import React from 'react';
import './index.scss';
const ChatBody = React.lazy(() => import('./ChatBody'));
const ChatUserList = React.lazy(() => import('./ChatUserList'));
const ChatMessageField = React.lazy(() => import('./ChatMessageField'));
const ChatHeader = React.lazy(() => import('./ChatHeader'));
function Chat() {
  return (
    <div className="chat_wrapper">
      <ChatUserList />
      <div className="chat_wrapper_m_content">
        <ChatHeader />
        <ChatBody />
        <ChatMessageField />
      </div>
    </div>
  );
}

export default Chat;
