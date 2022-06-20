import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import socketInstance from '../../../utils/socket/socketInstance';
function ChatMessageField() {
  const [messageField, setMessageField] = useState('');
  const [roomId, setRoomId] = useState('');
  const userDetails = useSelector((state) => state.userState.user);
  const { userId } = useParams();
  const onInputChange = (event) => {
    setMessageField(event.target.value);
  };
  const getRoomId = (uid = '', otherUid = '') => {
    const flag = uid.localeCompare(otherUid);
    if (flag >= 0) {
      return `${uid}-${otherUid}`;
    } else {
      return `${otherUid}-${uid}`;
    }
  };
  useEffect(() => {
    if (userDetails.uid && userId) {
      setRoomId(getRoomId(userDetails.uid, userId));
    }
  }, [roomId, userDetails.uid, userId]);
  const handleMessage = () => {
    socketInstance.emit('message', {
      msg: messageField,
      roomId: getRoomId(userDetails.uid, userId),
    });
    setMessageField('');
  };
  const onFocus = () => {
    console.log('on focus called');
    socketInstance.emit('user_typing', {
      roomId,
      userId,
      isTyping: true,
    });
  };
  const onBlur = () => {
    console.log('on blur called');
    socketInstance.emit('user_typing', {
      roomId,
      userId,
      isTyping: false,
    });
  };
  return (
    <div className="chat_wrapper_m_content_messagefield">
      <div className="input_field">
        <input
          value={messageField}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onInputChange}
          placeholder="Send a message"
          type="text"
        />
      </div>
      <button onClick={handleMessage}>send message</button>
    </div>
  );
}

export default ChatMessageField;
