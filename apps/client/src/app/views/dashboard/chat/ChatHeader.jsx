import React from 'react';

function ChatHeader() {
  return (
    <div className="chat_wrapper_m_content_header">
      <div className="header_left_content">
        <div className="header_img"></div>
        <div className="header_name">User Name</div>
      </div>
      <div className="header_right_content">
        <div className="header_icons">
          <img src="/assets/video-camera.png" alt="" />
        </div>
        <div className="header_icons">
          <img src="/assets/phone-call.png" alt="" />
        </div>
        <div className="header_icons">
          <img src="/assets/search.png" alt="" />
        </div>
        <div className="header_icons">
          <img src="/assets/arrow-down-sign-to-navigate.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
