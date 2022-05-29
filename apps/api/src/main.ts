import { createServer } from 'http';
import { app, updateDatabaseInstance } from './app/app';
import { Database } from './app/utils/Database';
import { SocketManager } from './app/lib/SocketManager';
import { Logger } from './app/utils/Logging';
import './app/config';
const port = process.env.port || 3333;
const logger = new Logger();
const httpServer = createServer(app);
const server = httpServer.listen(port, () => {
  logger.success(
    `*****************Listening at http://localhost:${port}***************`
  );
});

(async function () {
  try {
    const db = new Database();
    await db.connectToDb();
    await db.verifyConnection();
    await db.syncToDb(); // pass true to clear database
    updateDatabaseInstance(db);
    db.setAssociation('user', 'sessionHistory');
    // await db.dropTable(['sessionHistory']);
    await db.syncAllModels();
    new SocketManager(httpServer, db.sequeLizeInstance);
    // db.showAllModels();
    logger.success(
      '*****************connected to db successfully****************'
    );
  } catch (error) {
    console.error('********', error, '*********');
    //
  }
})();
server.on('error', logger.error);
server.on('error', () => {
  process.exit();
});
