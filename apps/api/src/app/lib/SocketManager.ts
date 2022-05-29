import { Server as SocketServer } from 'socket.io';
import { Server } from 'http';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { config } from '../config';
import { Sequelize } from 'sequelize/types';
import middleware from '../middlewares/socketMiddleware';
type ISocket = SocketServer<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;
export class SocketManager {
  io: ISocket;
  dbInstance: Sequelize;
  constructor(httpServer: Server, db: Sequelize) {
    this.io = new SocketServer(httpServer, {
      cors: {
        origin: config.DB_HOST,
        methods: config.ALLOWED_METHODS.split(','),
        credentials: true,
      },
      transports: ['websocket', 'polling'],
      allowEIO3: true,
    });
    this.dbInstance = db;
    this.onConnection();
    this.io.use(middleware.bind(this, db.Sequelize));
  }

  private listenAll(socket: ISocket): void {
    socket.emit(
      'hello_world',
      'Hello world. your connection is created. message received from node app'
    );
    socket.on('msgToServer', (data) => {
      console.log(data, 'daa');
    });
  }

  private onConnection(): void {
    this.io.on('connection', this.listenAll.bind(this));
  }
}
