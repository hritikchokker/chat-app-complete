import { Sequelize } from "sequelize";
import { ISocket } from "../../lib/SocketManager";

const arr = [];
export class ChatMessageController {
    socket: any;
    dbInstance: Sequelize;
    constructor(socket: ISocket, dbInstance: Sequelize) {
        this.socket = socket;
        this.dbInstance = dbInstance;
        this.listenForChatMessages();
    }

    private listenForChatMessages(): void {
        this.socket.on('create/update_room', (payload) => {
            this.socket.join(payload.roomId || '');
            console.log(JSON.stringify(payload.roomId), 'roomid inside test');
        });
        this.socket.on('message', ({ msg, roomId }) => {
            arr.push(msg);
            this.socket.to(roomId).emit('message', { listArr: arr, roomId })
        });
        this.socket.on('user_typing', (data) => {
            this.socket.to(data.roomId).emit('user_typing',data);
        });
    }
}
