import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LanguageItemsPane from "../components/languages/LanguageItemsPane";
import BugItemsPane from "../components/bugs/BugItemsPane";
import LanguageNavigator from "./LanguageNavigator";
import BugNavigator from "./BugNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "#e91e63",
            }}
        >

            <Tab.Screen
                name="Home"
                component={LanguageNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name="Bugs"
                component={BugNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name="shopping-cart" color={color} size={30} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Main;