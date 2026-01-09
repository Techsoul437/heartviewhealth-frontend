import React, { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding/Onboarding';
import BottomTabs from './BottomTabs';
import Login from '../screens/auth/Login';
import SplashScreen from '../screens/SplashScreen';
import SignUp from '../screens/auth/SignUp';
import Profile from '../screens/auth/Profile';
import HealthProfile from '../screens/auth/HealthProfile'
import FamilyDetails from '../screens/auth/FamilyDetails'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="HealthProfile" component={HealthProfile} />
      <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
