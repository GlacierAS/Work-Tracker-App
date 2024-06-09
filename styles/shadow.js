import {Platform} from "react-native";
import {StyleSheet} from "react-native";


export default StyleSheet.create({
    card: {
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
    text: {
        textShadowColor: 'C4C4C4',
        textShadowOffset: {
            height: 1
        },
        textShadowRadius: 1
    }
})
