import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SpotTag = () => {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.titleText}>
                Spot-<Text style={styles.titleSpan}>Tag</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 50,
        color: '#7B3F00'
    },
    titleSpan: {
        color: '#483C32'
    }
});

export default SpotTag;
