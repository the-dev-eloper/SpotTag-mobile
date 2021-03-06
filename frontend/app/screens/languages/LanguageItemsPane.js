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
import axios from 'axios';

var { height, width } = Dimensions.get('window');
import navBarStyles from '../../styles/navbar';

import baseURL from '../../../assests/common/baseUrl';

class LanguageItemsPane extends Component {

    constructor(props) {
        super(props);

        this.state = {
           languages: [],
           loading: false,
           error: false
        }
    }

    componentDidMount() {

        fetchData = async () => {

            try {

                this.setState({
                    loading: true
                })

                const { data } = await axios.get(`${baseURL}languages`);

                this.setState({
                    loading: false,
                    languages: data
                })                
            } catch (error) {
                this.setState({
                    error: error,
                    loading: false
                })
            }
        };

        fetchData();
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
        return (
            <FlatList
                style={{ flex:1 }}
                data={this.state.languages}
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

                        <Image
                            source={item.image}
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
        backgroundColor: "#FFFFFF",
        width: 30,
        height: 30,
        // tintColor: "#C7C7C7",
        borderRadius: 30
    },
});
