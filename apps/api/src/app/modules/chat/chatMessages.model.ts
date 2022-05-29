import { DataTypes, Sequelize } from 'sequelize';
export const ChatMessagesModel = (sequelize: Sequelize) => {
  return sequelize.define(
    'chat_messages',
    {
      messageId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      sendersId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      receiversId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      messageStatus: {
        type: DataTypes.STRING,
        values: ['1', '2', '3'], // 1= sent , 2=delivered, 3=read
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      modelName: 'User',
    }
  );
};

//
