import { Sequelize } from 'sequelize';
import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { TokenManager } from '../lib/TokenManager';
const tokenService = new TokenManager();
const middleware = async (
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
  sequeLizeInstance,
  next,
) => {
  try {
    if (!sequeLizeInstance) {
      const err = new Error('not authorized') as any;
      err.data = { content: 'Please retry later' }; // additional details
      next(err);
    }
    const userModel = sequeLizeInstance.models.user;
    const sessionModel = sequeLizeInstance.models.sessionHistory;
    if (socket?.handshake?.auth?.token) {
      const { uid, sessionId } = (await tokenService.decodeToken(
        socket?.handshake?.auth?.token
      )) as any;
      const activeSession = await sessionModel.findByPk(sessionId);
      if (!activeSession) {
        const err = new Error('not logged in') as any;
        err.data = { content: 'Please retry later' }; // additional details
        next(err);
        return;
      }
      if (uid) {
        const user = await userModel.findByPk(uid);
        if (user) {
          await userModel.update(
            { lastSeen: Date.now(), isOnline: true },
            { where: { uid }, validate: true }
          );
          const updatedDetails = await userModel.findByPk(uid, {
            attributes: { exclude: ['password', 'isActive'] },
          });
          (socket as any).user = updatedDetails.toJSON();
          next();
          return;
        }
        throw new Error('No user found ');
      }
    } else {
      const err = new Error('not authorized') as any;
      err.data = { content: 'Please retry later' }; // additional details
      next(err);
      return;
    }
  } catch (error) {
    const err = new Error('token invalid') as any;
    err.data = { content: 'Please login and try again', ...error }; // additional details
    next(err);
  }
};
export default middleware;
