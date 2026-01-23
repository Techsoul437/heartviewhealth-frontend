import React, { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding/Onboarding';
import BottomTabs from './BottomTabs';
import Login from '../screens/auth/Login';
import SplashScreen from '../screens/SplashScreen';
import SignUp from '../screens/auth/SignUp';
import Profile from '../screens/auth/Profile';
import HealthProfile from '../screens/auth/HealthProfile';
import FamilyDetails from '../screens/auth/FamilyDetails';
import Permissions from '../screens/auth/Permissions';
import AddHealthData from '../screens/health/AddHealthData';
import UploadScreen from '../screens/health/UploadScreen';
import HealthDetail from '../screens/health/HealthDetail';
import AddMedication from '../screens/reminders/AddMedication'
import AddLabsAppointment from '../screens/reminders/AddLabsAppointment'
import AddDoctorAppointment from '../screens/reminders/AddDoctorAppointment'
import EditProfile from '../screens/settings/EditProfile'
import EditHealthProfile from '../screens/settings/EditHealthProfile'
import EditFamilyDetails from '../screens/settings/EditFamilyDetails'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="HealthProfile" component={HealthProfile} />
      <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
      <Stack.Screen name="Permissions" component={Permissions} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
      <Stack.Screen name="AddHealthData" component={AddHealthData} />
      <Stack.Screen name="HealthDetail" component={HealthDetail} />
      <Stack.Screen name="AddMedication" component={AddMedication} />
      <Stack.Screen name="AddLabsAppointment" component={AddLabsAppointment} />
      <Stack.Screen name="AddDoctorAppointment" component={AddDoctorAppointment} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditHealthProfile" component={EditHealthProfile} />
      <Stack.Screen name="EditFamilyDetails" component={EditFamilyDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
