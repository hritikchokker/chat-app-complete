import { Sequelize } from 'sequelize';
import { config } from '../config';
import {
  UserModel,
  SessionModel,
  ChatInboxModel,
  ChatMessagesModel,
  ChatRoomModel,
} from '../models';

export class Database {
  sequeLizeInstance: Sequelize;
  async connectToDb() {
    try {
      const sequelize = new Sequelize(
        config.DB_NAME,
        config.DB_DIALECT,
        config.DB_PASSWORD,
        {
          host: config.DB_HOST,
          dialect: config.DB_DIALECT,
          logging: console.log,
        }
      );
      this.sequeLizeInstance = sequelize;
      this.sequeLizeInstance.models['user'] = UserModel(sequelize);
      this.sequeLizeInstance.models['sessionHistory'] = SessionModel(sequelize);
      this.sequeLizeInstance.models['chatInbox'] = ChatInboxModel(sequelize);
      this.sequeLizeInstance.models['chatRoom'] = ChatRoomModel(sequelize);
      this.sequeLizeInstance.models['chatMessage'] =
        ChatMessagesModel(sequelize);
      return sequelize;
    } catch (error) {
      Promise.reject(error);
    }
  }
  async verifyConnection(): Promise<unknown> {
    return this.sequeLizeInstance.authenticate();
  }
  async syncToDb(force = false) {
    try {
      await this.sequeLizeInstance.sync({ force });
    } catch (e) {
      console.log('failed to sync');
    }
  }

  async syncAllModels() {
    const promiseModel = [];
    Object.keys(this.sequeLizeInstance.models).forEach((model) => {
      promiseModel.push(this.sequeLizeInstance.models[model].sync());
    });
    await Promise.all(promiseModel);
  }

  addModels(arr: Array<{ modelName: string; modelValue: unknown }>): void {
    arr.forEach((model) => {
      this.addModel(model.modelName, model.modelValue);
    });
  }

  private addModel(modelName, model: any): void {
    this.sequeLizeInstance.define(modelName, model);
  }
  private getModelInstance(modelName: string) {
    return this.sequeLizeInstance.models[modelName];
  }

  setAssociation(from: string, to: string): void {
    /**
     * @example
     * from = user
     * to = sessionHistory
     * user hasMany sessions
     */
    const fromModel = this.getModelInstance(from); // user
    const toModel = this.getModelInstance(to); //session
    console.log(from, 'from', to, 'to');
    // toModel.belongsTo(fromModel);
    fromModel.hasMany(toModel, { foreignKey: 'userId' });
    toModel.belongsTo(fromModel, { foreignKey: 'userId' });
  }
  showAllModels(): void {
    console.log(this.sequeLizeInstance.models, '******** ALL Models');
  }

  async dropTable(tableNames: Array<string>) {
    const pr = [];
    tableNames?.forEach((table) => {
      pr.push(this.getModelInstance(table).drop());
    });
    return Promise.all(pr);
  }
}
