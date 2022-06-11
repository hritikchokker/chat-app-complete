import React from 'react';

const ChatUserCard = () => {
  return (
    <div className="chat_wrapper_message_list_user_card">
      <div className="user_img">
        <p></p>
      </div>
      <div className="user_msg_content">
        <div className="user_msg_content_header">UserName</div>
        <p>lorem dollar ipstat </p>
      </div>
      <div className="user_msg_info">
        <p>Sat</p>
        <div>&#10004;</div>
      </div>
    </div>
  );
};
function ChatUserList() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="chat_wrapper_message_list">
      {users.map((el, index) => (
        <ChatUserCard key={el + index} />
      ))}
    </div>
  );
}

export default ChatUserList;
