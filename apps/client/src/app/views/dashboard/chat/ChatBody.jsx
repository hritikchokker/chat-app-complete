import React from 'react';

function ChatBody() {
  return (
    <div className="chat_wrapper_m_content_body">
      {[1,2,3,4,5,6,7,8].map((el) => (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ducimus dignissimos ad, voluptatibus maxime animi eligendi esse itaque
          iure quas voluptatum veniam necessitatibus dolor voluptates doloribus
          repellat corrupti earum cupiditate.
        </p>
      ))}
    </div>
  );
}

export default ChatBody;
