import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// importing pages
import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#F0F0F5'
                    }
                }}
            >
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
                <Stack.Screen 
                    name="Points"
                    component={Points}
                />
                <Stack.Screen 
                    name="Detail"
                    component={Detail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}