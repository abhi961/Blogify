import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Splash from '../../Screens/Splash';
import TabNav from '../BottomTab/TabNav';
import Favourite from '../../Screens/Favourite';


const Stack = createNativeStackNavigator()

function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={Splash} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="TabNav" component={TabNav} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav;