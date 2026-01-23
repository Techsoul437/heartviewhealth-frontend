import React, { useContext, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import RemindersScreen from '../screens/reminders/RemindersScreen';
import Eco from '../screens/Eco';
import SettingScreen from '../screens/settings/SettingScreen'
import { Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colour';
import { FONTS } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import ImagesPath from '../constants/ImagesPath';
import { useTheme } from '../theme/ThemeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealthScreen from '../screens/health/HealthScreen'
import { LanguageContext } from '../constants/LanguageContext';
import i18n from '../assets/i18n';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const BottomTabs = () => {
  const { theme } = useTheme();
  useContext(LanguageContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
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
          tabBarLabel: (i18n.t('home')),
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily: FONTS.REGULAR,
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
        component={HealthScreen}
        options={{
          tabBarLabel: (i18n.t('health')),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily: FONTS.REGULAR,
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
        name="RemindersScreen"
        component={RemindersScreen}
        options={{
          tabBarLabel: (i18n.t('reminders')),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily: FONTS.REGULAR,
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
          tabBarLabel: (i18n.t('eco')),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily: FONTS.REGULAR,
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
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: (i18n.t('settings')),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: RFValue(10),
            fontFamily: FONTS.REGULAR,
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
