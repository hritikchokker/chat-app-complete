import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersList } from '../state/actions';
import UserCard from './UserCard';

function UserList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.userState.usersList) || [];
  React.useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  return (
    <div className="list_container">
      {usersList.map((user) => (
        <UserCard key={user.uid} {...user} />
      ))}
    </div>
  );
}

export default UserList;
