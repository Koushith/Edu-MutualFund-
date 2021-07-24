import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AllFunds from '../allFunds/allFunds.component';

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);
  return <AllFunds />;
}

export default HomeScreen;
