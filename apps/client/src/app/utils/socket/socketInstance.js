import { io } from 'socket.io-client';
const instance = io('http://localhost:3333', {
  autoConnect: false,
  auth: {
    token: localStorage.getItem('token') ?? '',
  },
  transports: ['websocket', 'polling'],
});

export const createInstance = () => {
  instance.connect();
};

export const disconnect = () => {
  instance.disconnect();
};

instance.on('connect_error', (err) => {
  console.log(err instanceof Error); // true
  console.log(err.message); // not authorized
  console.log(err.data); // { content: "Please retry later" }
  console.error(err);
});
instance.on('error', (err) => {
  console.log(err, 'error in socket');
});
export default instance;
