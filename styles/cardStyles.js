import {Platform, StyleSheet} from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

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
        fontSize: RFPercentage(3.8),
        fontWeight: '400',
        padding:10,
        paddingBottom: 20
    },
    cardStatusText: {
        fontSize: RFPercentage(2.5),
        fontWeight: '300',
        alignSelf: 'flex-end',
        paddingRight: 15
    },
})