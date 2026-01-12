import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen'
import UploadScreen from '../screens/health/UploadScreen';
import Reminders from '../screens/Reminders';
import Eco from '../screens/Eco';
import Setting from '../screens/Setting';
import { Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colour';
import { FONTS } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import ImagesPath from '../constants/ImagesPath';
import { useTheme } from '../theme/ThemeContext';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddHealthData from '../screens/health/AddHealthData'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HealthTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="AddHealthData"
        component={AddHealthData}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background ,
          borderTopWidth: RFValue(1),
          borderColor: COLORS.gray,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily:FONTS.REGULAR
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ImagesPath.home}
              style={[
                styles.icon,
                { tintColor: focused ? COLORS.primary : COLORS.gray },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HealthScreen"
        component={HealthTab}
        options={{
          tabBarLabel: 'Health',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily:FONTS.REGULAR
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ImagesPath.pulse}
              style={[
                styles.icon,
                { tintColor: focused ? COLORS.primary : COLORS.gray },
              ]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarLabel: 'Reminders',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily:FONTS.REGULAR
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ImagesPath.bell}
              style={[
                styles.icon,
                { tintColor: focused ? COLORS.primary : COLORS.gray },
              ]}
            />
          ),
        }}
      />

       <Tab.Screen
        name="Eco"
        component={Eco}
        options={{
          tabBarLabel: 'ECO',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily:FONTS.REGULAR
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ImagesPath.heart}
              style={[
                styles.icon,
                { tintColor: focused ? COLORS.primary : COLORS.gray },
              ]}
            />
          ),
        }}
      />

       <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily:FONTS.REGULAR
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ImagesPath.settings}
              style={[
                styles.icon,
                { tintColor: focused ? COLORS.primary : COLORS.gray },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
});
