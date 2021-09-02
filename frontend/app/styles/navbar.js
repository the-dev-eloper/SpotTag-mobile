
import { StyleSheet, Dimensions } from 'react-native';
import * as vars from './variable';
var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    navbar: {
        width: '100%',
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 5,
        paddingTop: 15
    },
    navBarMenu: {
        fontSize: 26,
        color: 'white',
        padding: 10
    },
    navBarRelative: {
        position: 'relative',
        flex: 0,
    },
    navBarTitle: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        color: 'white',
        width: '20%',
        fontFamily: 'HelveticaNeue-Medium',
        lineHeight:22
    },
})
