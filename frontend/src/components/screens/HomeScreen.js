import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFunds } from '../../redux/actions/fundActions';
import AllFunds from '../allFunds/allFunds.component';

function HomeScreen({ history }) {
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
