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

class LanguageItemsPane extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { key: "1", name: "JavaScript", "photo": require('../../assets/JS.png') },
                { key: "2", name: "Python", "photo": require('../../assets/JS.png') },
                { key: "3", name: "HTML", "photo": require('../../assets/JS.png') },
                { key: "4", name: "TypeScript", "photo": require('../../assets/JS.png') },
                { key: "5", name: "CSS", "photo": require('../../assets/JS.png') },
                { key: "6", name: "Dart", "photo": require('../../assets/JS.png') },
            ]
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
                    Language Screen
                </Text>
            </View>
        )
    }

    onPressed() {
        Alert.alert("Works!");
    }

    renderHeadingTexts() {
        let headingTexts = (
            <View>
                <Text style={styleTab.headText}>
                    Languages
                </Text>
            </View>
        );

        return headingTexts;
    }

    renderList() {
        let fList = (
            <FlatList
                style={{ flex:1 }}
                data={this.state.data}
                renderItem={({ item }) => <Item item={item}/>}
                keyExtractor={item => item.email}
            />
        );

        return fList;
    }

    onSelected(name) {
        Alert.alert(name)
    }

    render() {

        Item = ({ item }) => {
            return (

                <TouchableOpacity onPress={() => this.onSelected(item.name)}>

                    <View style={styleTab.listItem}>
            
                        <Image
                            source={item.photo}
                            style={styleTab.imgStyle}
                        />

                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontWeight:"bold", fontSize: 20, color: "#FFFFFF" }}>
                                {item.name}
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

                <View style={styleTab.container}>
                    {this.renderList()}
                </View>
            </View>
        );
    }
}

export default LanguageItemsPane;

const styleTab = StyleSheet.create({
    mainWrap: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F7F7F7',
    },
    headerWrap: {
        flexDirection: 'row',
        // backgroundColor: vars.brandPrimary,
        paddingTop: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:40
    },
    headText: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#25282B',
        marginTop: height * 0.015,
        marginStart: width * 0.1
    },
    listItem:{
        margin:10,
        padding:10,
        paddingTop: 10,
        backgroundColor:"#0000FF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    },
    imgStyle: {
        width:30,
        height:30,
        tintColor: "#C7C7C7",
        borderRadius: 30
    },
});
