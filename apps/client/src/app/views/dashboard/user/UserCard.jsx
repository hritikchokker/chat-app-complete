import React from 'react';
function UserCard({ userDetails = {}, navigateToDetails, isDetails = false }) {
  console.log(userDetails, 'user details');
  const clickHandler = () => {
    navigateToDetails(userDetails);
  };
  return (
    <div className="list_container_card">
      <div className="list_container_card_img">
        <img src="" alt="" />
      </div>
      <div className="list_container_card_content">
        <p>
          {userDetails.get('firstName') + ' ' + userDetails.get('lastName')}
        </p>
      </div>
      {!isDetails && (
        <div className="list_container_card_actions">
          <div className="list_container_card_actions_btn">
            <button onClick={clickHandler}>show details</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
