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

import Icon from 'react-native-vector-icons/FontAwesome';

var { height, width } = Dimensions.get('window');
import navBarStyles from '../../styles/navbar';
import data from '../../containers/data';

class BugItemsPane extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    renderNavigationBar() {

        return (
            <View style={navBarStyles.navbar}>

                <TouchableOpacity
                    accessible={true}
                    testID={"Menu"}
                    accessibilityLabel={"menu"}
                    onPress={() => this.onPressed()}
                >
                    <Icon style={navBarStyles.navBarMenu} name='bars' />
                </TouchableOpacity>

                <Text style={navBarStyles.navBarTitle}>
                    Bug Screen
                </Text>
            </View>
        )
    }

    onPressed() {
        Alert.alert("Works!");
    }

    renderHeadingTexts() {
        return (
            <View>
                <Text style={styleTab.headText}>
                    All Bugs
                </Text>
            </View>
        )
    }

    renderList() {
        return(
            <FlatList
                style={{ flex:1 }}
                data={data.bugs}
                renderItem={({ item }) => <Item item={item}/>}
                keyExtractor={item => item.email}
            />
        );
    }

    onSelected(name) {
        Alert.alert(name)
    }     

    render() {

        Item = ({ item }) => {
            return (

                <TouchableOpacity onPress={() => this.onSelected(item.name)}>
                    <View style={styleTab.listItem}>

                        <View style={styleTab.listHeader}>
                            <Text
                                style={{
                                    fontWeight:"bold",
                                    fontSize: 20,
                                    color: "#000000"
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>

                        <View style={styleTab.listContent}>

                            <Text
                                style={{
                                    // fontWeight:"bold",
                                    fontSize: 15,
                                    color: "#000000"
                                }}
                            >

                                Category: {item.category} {"\n"}
                                Language: {item.language} {"\n"}
                                Reason: {item.reason} {"\n"}
                                Solution: {item.solution}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styleTab.mainWrap}>

                <View style={styleTab.headerWrap}>
                    {this.renderNavigationBar()}
                </View>

                <View style={{ flexDirection: 'column' }}>
                    {this.renderHeadingTexts()}
                </View>

                <View style={styleTab.listStyle}>
                    {this.renderList()}
                </View>
            </View>
        )
    }
}

export default BugItemsPane;

const styleTab = StyleSheet.create({
    mainWrap: {
        flex: 1,
        height: '100%',
        backgroundColor: '#E7E7E7',
    },
    headerWrap: {
        flexDirection: 'row',
        paddingTop: 40
    },
    headText: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 22,
        color: '#000000',
        marginTop: height * 0.015,
        marginStart: width * 0.1
    },
    listStyle: {
        flex: 1,
        marginTop: 20
    },
    listItem:{
        margin: 10,
        padding: 10,
        backgroundColor: "#FBF9F8",
        width: "90%",
        height: height * 0.2,
        alignSelf: "center",
        borderRadius: 10
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    listContent: {
        padding: 10,
        paddingLeft: 50
    }
})