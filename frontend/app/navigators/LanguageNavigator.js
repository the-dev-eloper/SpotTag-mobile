import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import LanguageItemsPane from '../components/languages/LanguageItemsPane';
import BugItemsPane from '../components/bugs/BugItemsPane';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={LanguageItemsPane}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Language Detail'
                component={BugItemsPane}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}

export default function LanguageNavigator() {
    return <MyStack />;
}