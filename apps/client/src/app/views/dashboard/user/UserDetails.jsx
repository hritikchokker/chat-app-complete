import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserDetailAPI, fetchUserDetails } from '../state/actions';
import UserCard from './UserCard';

function UserDetails() {
  const dispatch = useDispatch();
  let userDetails = useSelector((state) => state.userState.userDetails);
  const userList = useSelector((state) => state.userState.usersList);
  if (userDetails) {
    userDetails = new Map(Object.entries(userDetails));
  }
  const { uid } = useParams();
  console.log(userList,'userlist',userDetails,'userDetails')
  useEffect(() => {
    if (userList && userList.length < 1) {
      dispatch(fetchUserDetailAPI(uid));
    } else {
      dispatch(fetchUserDetails(uid));
    }
  }, [dispatch, uid, userList]);
  return (
    <div className="card_details">
      {userDetails && userDetails.size && (
        <UserCard isDetails={true} userDetails={userDetails} />
      )}
    </div>
  );
}

export default UserDetails;
