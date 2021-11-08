import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import BugItemsPane from '../components/bugs/BugItemsPane';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Bugs'
                component={BugItemsPane}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Bug Detail'
                component={BugItemsPane}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}

export default function BugNavigator() {
    return <MyStack />;
}
