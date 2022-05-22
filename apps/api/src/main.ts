import { app, updateDatabaseInstance } from './app/app';
import { Database } from './app/utils/Database';
import { Logger } from './app/utils/Logging';
import './app/config';
const port = process.env.port || 3333;
const logger = new Logger();
const server = app.listen(port, () => {
  logger.success(
    `*****************Listening at http://localhost:${port}/api***************`
  );
});

(async function (app) {
  try {
    const db = new Database();
    await db.connectToDb();
    await db.verifyConnection();
    await db.syncToDb(); // pass true to clear database
    updateDatabaseInstance(db);
    db.setAssociation('user', 'sessionHistory');
    // await db.dropTable(['sessionHistory']);
    await db.syncAllModels();

    db.showAllModels();
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
