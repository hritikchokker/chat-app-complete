import { Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { Model, Sequelize, Op } from "sequelize";
import { ISocket } from "../../lib/SocketManager";
import { Queue } from "../../utils/Queue";
import { ResponseHandler } from "../../utils/ResponseHandler";

const arr = [];
export class ChatMessageController {
    socket;
    dbInstance: Sequelize;
    private queueManager: Queue;
    chatMessageModel: Sequelize;
    private queuePubSub: Observable<any>;
    constructor(socket: ISocket, dbInstance: Sequelize) {
        this.socket = socket;
        this.dbInstance = dbInstance;
        this.listenForChatMessages();
        // this.queueManager = new Queue();
        // this.queuePubSub = this.queueManager.queuePubSub;
        // this.handleQueue();
    }

    private listenForChatMessages(): void {
        console.log('*********************', 'listen for chat message');
        this.socket.on('create/update_room', async (payload) => {
            console.log(JSON.stringify(payload.roomId), 'roomid inside test');
            this.socket.join(payload.roomId || '');
            // const list = await this.fetchMessagesList(payload.roomId);
            // console.log(list, 'inside a');
            this.socket.to(payload.roomId).emit('message_list', { list: arr, roomId: payload.roomId });
        });
        this.socket.on('message', async (payload) => {
            // const resp = await this.addMessageToDb(payload);
            arr.push(payload);
            this.socket.to(payload.roomId).emit('message', { list: arr, roomId: payload.roomId })
            // this.fetchMessagesList(data.roomId);
        });
        this.socket.on('user_typing', (data) => {
            this.socket.to(data.roomId).emit('user_typing', data);
        });
    }
    // this.socket.to(roomId).emit('message', { listArr: arr, roomId })
    async addMessageToDb(data) {
        try {
            if (!data) return;
            const chatMessageModel = this.dbInstance.models.chatMessage;
            data.messageId = uuidv4();
            const newMessage = await (await chatMessageModel.create(data))?.toJSON();
            return newMessage;
        } catch (error) {
            console.log(error, 'error');
        }
        // if (!Object.prototype.hasOwnProperty.call(this.chatMessageModel, 'create')) return;
    }

    async fetchMessagesList(roomId: string) {
        try {
            const chatMessageModel = this.dbInstance.models.chatMessage;
            const res = await chatMessageModel.findAll({
                where: {
                    roomId: {
                        [Op.eq]: roomId
                    }
                }
            })
            const pr = [];
            res.forEach((el) => {
                pr.push(el?.toJSON());
            });
            const updatedList = await Promise.all(pr);
            console.log('messages list', updatedList.length)
            return updatedList;
        } catch (error) {
            return error;
        }
    }

    handleQueue(): void {
        this.queuePubSub.subscribe((data) => {
            if (data) {
                console.log(data, 'every time');
                this.addMessageToDb(data);
            }
        });
    }
}
