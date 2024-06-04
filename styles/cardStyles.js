import {Platform, StyleSheet} from "react-native";

export default StyleSheet.create({
    cardViewContainer: {
        display: 'flex',

        borderRadius: 12,
        //background color set in the card constructor

        width: '90%',
        // height depends on the content and set minimal here:
        //flexBasis: 100,

        //marginVertical: 5,

        alignSelf: "center",

        opacity: 0.8,

        shadowColor: 'C4C4C4',
        ...Platform.select({
            ios: {
                shadowRadius: 1
            },
            android: {
                elevation: 10
            }
        })
    },
    cardTitleText: {
        fontSize: 32,
        fontWeight: '400',
        padding:10,
        paddingBottom: 20
    },
    cardStatusText: {
        fontSize: 20,
        fontWeight: '300',
        alignSelf: 'flex-end',
        paddingRight: 15
    },
})