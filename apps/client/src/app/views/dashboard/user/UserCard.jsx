import React from 'react';

function UserCard({ status, isOnline, firstName, lastName }) {
  console.log(
    status,
    'status',
    isOnline,
    'isOnline',
    firstName,
    'firstName',
    lastName,
    'lastname'
  );
  return <div>UserCard</div>;
}

export default UserCard;
