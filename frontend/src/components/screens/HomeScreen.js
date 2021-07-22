import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomeScreen({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log('userDetais from journal', userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);
  return <h1>Home Page</h1>;
}

export default HomeScreen;
