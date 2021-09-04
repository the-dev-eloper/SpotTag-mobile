import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Dimensions,
    FlatList,
    Image
} from 'react-native';

class BugItemsPane extends Component {
    render() {
        return (
            <View style={styleTab.mainWrap}>
                <Text>
                    All Bugs Screen
                </Text>
            </View>
        )
    }
}

export default BugItemsPane;

const styleTab = StyleSheet.create({
    mainWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})