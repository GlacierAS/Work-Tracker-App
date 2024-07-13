import {StyleSheet} from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

export default StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
    },
    top: {
        display: "flex",
        height: '70%',
        flexDirection: "row"

    },
    //bot
    bot: {
        display: "flex",
        flex: 1,
        height: '30%'
    },
    botBox: {
        flex: 1,
        borderRadius: 12
    },
    //Top Left cluster
    topLeft: {
        display: "flex",
        flex: 1,
        flexBasis: '70%',
        padding: 20
    },
    topLeftBox: {
        display: 'flex',
        borderRadius: 12,
        flex: 1,
        padding: 12,
    },
    topLeftBoxTitle: {
        fontSize: RFPercentage(4),
        fontWeight: '300',
        flex: 1 //to push box descript to end
    },
    topLeftBoxDescription: {
        fontSize: RFPercentage(2.5),
        alignSelf: "flex-end",
        textAlign: 'right',
    },
    topLeftText: {
        //Not flex, fix
        fontSize: RFPercentage(3.2),
        borderRadius: 15,
        alignSelf: "flex-start",
        fontWeight: "600",
        marginBottom: 10
    },
    //Top Right
    topRight: {
        display: "flex",
        flex: 1,
        flexBasis: '30%',
        paddingVertical: 20,
        paddingRight: 20
    },
    topRightBoxes: {
        display: "flex",
        borderRadius: 12,
        backgroundColor: 'blue',
        flex: 1,
        marginTop: 10
    },
    //misc
    chooseGoalContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})