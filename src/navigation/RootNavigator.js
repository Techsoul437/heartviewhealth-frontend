import React, { useCallback, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/onboarding/Onboarding";
import BottomTabs from "./BottomTabs";
import Login from "../screens/auth/Login";
import SplashScreen from "../screens/SplashScreen";
import SignUp from '../screens/auth/SignUp'



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
 

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={BottomTabs} />
     
    </Stack.Navigator>
  );
};

export default RootNavigator;
