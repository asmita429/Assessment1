import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from '../StackNav/StackNav';

const RootNav = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootNav;
