import React, { Component } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import Main from '../navigators/MainNavigator';

export default class SpotTag extends Component {

    render() {
        return (
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        );
    }
}
