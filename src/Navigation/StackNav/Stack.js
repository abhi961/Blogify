import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../Screens/Splash';
import TabNav from '../BottomTab/TabNav';
import ArticleDetails from '../../Screens/ArticleDetails';
import LobDetails from '../../Screens/LobDetails';


const Stack = createNativeStackNavigator()

function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Details" component={ArticleDetails} />
                <Stack.Screen name="LobDetails" component={LobDetails} />
                <Stack.Screen name="TabNav" component={TabNav} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav;