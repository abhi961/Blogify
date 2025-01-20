import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Favourite from '../../Screens/Favourite';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite} />
        </Tab.Navigator>
    );
};

export default TabNav;