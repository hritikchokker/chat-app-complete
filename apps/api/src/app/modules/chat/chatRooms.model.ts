//  chatLastUpdate?: number,
//   chatRoomId?: string,
//   chatRoomTitle?: string
//   chatRoomType?: string,
//   deviceToken?: string
//   deviceType?: string,
//   email?: string,
//   firstName?: string,
//   isActive?: boolean,
//   key?: string
//   lastMessage: FirebaseInboxLastMessageModel
//   lastName?: string,
//   lastSeen?: number,
//   otherUserId?: string,
//   profilePicture?: string,
//   unreadMessages?: number,
//   userId?: string
import { DataTypes, Sequelize } from 'sequelize';
export const ChatRoomModel = (sequelize: Sequelize) => {
  return sequelize.define(
    'chat_messages',
    {
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      otherUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
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
