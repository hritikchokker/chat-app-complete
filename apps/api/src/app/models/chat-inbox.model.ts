// import { DataTypes, Sequelize } from 'sequelize';

// // key?: string;
// //   chatLastUpdate: number;
// //   chatRoomId: string;
// //   chatRoomTitle?: string;
// //   isChatActive: boolean;
// //   chatRoomType: string;
// //   lastMessage: FirebaseInboxLastMessageModel;
// //   otherUserId: string;
// //   unreadMessages: number;
// //   isOtherUserTyping?: boolean;

// export const ChatInboxModel = (sequelize: Sequelize) => {
//   return sequelize.define(
//     'chat_inbox',
//     {
//       otherUid: {
//         type: DataTypes.UUID,
//         allowNull: false,
//       },
//       chatRoomId: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         allowNull: false,
//       },
//       lastMessage: {
//         type: DataTypes.STRING,
//         defaultValue: '',
//       },
//     },
//     {
//       timestamps: true,
//       freezeTableName: true,
//       modelName: 'User',
//     }
//   );
// };
