import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import socketInstance from '../../../utils/socket/socketInstance';
function ChatBody() {
  const [list, setList] = useState([]);
  const [roomId, setRoomId] = useState('');
  const userDetails = useSelector((state) => state.userState.user);
  const [isOtherUserTyping, setOtherUserTyping] = useState(false);
  const { userId } = useParams();
  // otheruserid

  const getRoomId = (uid = '', otherUid = '') => {
    const flag = uid.localeCompare(otherUid);
    if (flag >= 0) {
      return `${uid}-${otherUid}`;
    } else {
      return `${otherUid}-${uid}`;
    }
  };
  React.useEffect(() => {
    if (userDetails.uid && userId) {
      setRoomId(getRoomId(userDetails.uid, userId));
      socketInstance.emit('create/update_room', {
        roomId: getRoomId(userDetails.uid, userId),
      });
      socketInstance.on('message_list', (list) => {
        console.log(list, 'on message list');
      });
    }
    socketInstance.on('user_typing', (payload) => {
      if (roomId === payload.roomId && payload.userId !== userId) {
        setOtherUserTyping(payload.isTyping);
      }
    });
    socketInstance.on('message', (data) => {
      console.log(data, 'datas message');
      // const { roomId, listArr } = data;
      // if (roomId === getRoomId(userDetails.uid, userId)) {
      //   setList(listArr);
      // }
    });
    // socketInstance
    //   .in(getRoomId(userDetails.uid, userId))
    //   .on('message', (res) => {
    //     const { listArr } = res;
    //     setList(listArr);
    //   });
  }, [roomId, userDetails.uid, userId]);
  return (
    <div className="chat_wrapper_m_content_body">
      {list.map((el) => (
        <p key={el}>{el}</p>
      ))}
      {isOtherUserTyping && <h4>....typing</h4>}
    </div>
  );
}

export default ChatBody;
