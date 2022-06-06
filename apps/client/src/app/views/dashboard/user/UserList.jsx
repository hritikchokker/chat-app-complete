import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUsersList } from '../state/actions';
import UserCard from './UserCard';

function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.userState.usersList) || [];
  React.useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);
  const userDetailMem = (details) => new Map(Object.entries(details));
  const navigateToDetails = (userDetails) => {
    navigate(`/dashboard/user/${userDetails.get('uid')}`);
  };
  return (
    <div className="list_container">
      {usersList.map((user) => (
        <UserCard
          key={user.uid}
          navigateToDetails={navigateToDetails}
          userDetails={userDetailMem(user)}
        />
      ))}
    </div>
  );
}

export default UserList;
