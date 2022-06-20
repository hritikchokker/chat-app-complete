import { Sequelize, DataTypes } from 'sequelize';

export const ChatInboxModel = (sequelize: Sequelize) => {
  return sequelize.define(
    'chat_inbox',
    {
      otherUid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      chatRoomId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      lastMessage: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      modelName: 'User',
    }
  );
};
