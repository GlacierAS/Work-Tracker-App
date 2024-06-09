import {StyleSheet} from "react-native";
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
    bot: {
        display: "flex",
        flex: 1,
        height: '30%'
    },
    //Top Left cluster
    topLeft: {
        display: "flex",
        flex: 1,
        flexBasis: '70%',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    topLeftBox: {
        display: 'flex',
        borderRadius: 12,
        flex: 1,
        padding: 12,
    },
    topLeftBoxTitle: {
        fontSize: 32,
        fontWeight: '300',
        flex: 1 //to push box descript to end
    },
    topLeftBoxDescription: {
        fontSize: 24,
        alignSelf: "flex-end",
        textAlign: 'right',

    },
    topLeftText: {
        //Not flex, fix
        fontSize: 24,
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
    },
    chooseGoalContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})