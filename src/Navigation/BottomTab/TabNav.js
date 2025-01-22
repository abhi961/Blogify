import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Favourite from '../../Screens/Favourite';
import Search from '../../Screens/Search';
import Profile from '../../Screens/Profile';
import LattestJob from '../../Screens/LattestJob';
import {Fonts} from '../../theme/fonts';
import {normalize} from '../../utlities/helpers/normalize';
import {COLORS} from '../../theme/color';
import {IMAGES} from '../../theme/images';
import {Image} from 'react-native';
import {useDarkMode} from '../../Components/DarkModeProvider';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const isDarkMode = useDarkMode();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.orange,
        tabBarLabelStyle: {
          fontSize: normalize(11),
          fontFamily: Fonts.Poppins_bold,
          letterSpacing: 0.2,
        },
        tabBarStyle: {
          height: normalize(56),
          backgroundColor: isDarkMode ? COLORS.cardDark : COLORS.white,
          paddingBottom: 10,
          // paddingTop: 14,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={IMAGES.Home}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.orange : COLORS.lightBack,
                transform: [focused ? {rotate: '20deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={IMAGES.Search}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.orange : COLORS.lightBack,
                transform: [focused ? {rotate: '20deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={IMAGES.Favourite}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.orange : COLORS.lightBack,
                transform: [focused ? {rotate: '20deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lattest Job"
        component={LattestJob}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={IMAGES.LattestJob}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.orange : COLORS.lightBack,
                transform: [focused ? {rotate: '20deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={IMAGES.Profile}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.orange : COLORS.lightBack,
                transform: [focused ? {rotate: '20deg'} : {rotate: '0deg'}],
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
