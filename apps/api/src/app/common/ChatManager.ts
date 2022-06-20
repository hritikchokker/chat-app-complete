import { Sequelize } from 'sequelize/types';
import { ISocket } from '../lib/SocketManager';
import { ChatMessageController } from '../modules/chat/chatMessageController';


export class ChatManager {
  socket!: ISocket;
  dbInstance!: Sequelize;
  constructor(socket: ISocket, dbInstance: Sequelize) {
    this.socket = socket;
    this.dbInstance = dbInstance;
    this.listenForChat();
  }

  private listenForChat(): void {
    const chatMessageController = new ChatMessageController(this.socket, this.dbInstance);
    this.socket.on('chat_messages', ({ content, to }) => {
      // this.socket.to(to).emit('chat_messages',{
      //     content,
      //     from:this.socket
      // })
    });
  }

}
