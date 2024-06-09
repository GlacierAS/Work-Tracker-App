import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles/createCardStyles"
import {LinearGradient} from "expo-linear-gradient";
import getWhiteTint from "../styles/whiteTintRes";
import shadow from "../styles/shadow";

const CreatCardScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    {/*TODO: GENERATE TEXT BASE ON CONTENT*/}
                    {/*Top Left Title*/}
                    <Text style={[styles.topLeftText, shadow.text]}>
                        Recommended{"\n"}<Text style={{color: "royalblue", fontSize: 32}}>Task Tracker!</Text>
                    </Text>

                    {/*Top Left Box*/}
                    <LinearGradient
                        style={[styles.topLeftBox, shadow.card]}
                        colors={getWhiteTint(6)}
                        start={{x: 0, y: 0}}
                        end={{x:1, y: 1}}>

                        <Text style={styles.topLeftBoxTitle}>Create a new {'\n'}Task Tracker</Text>

                        <Text style={styles.topLeftBoxDescription}>
                            A Task Tracker{'\n'}will track your{'\n'}progress towards{'\n'}
                            <Text style={{color: 'navy', fontSize: 28}}>anything!{'\n'}</Text>
                            {'\n'}
                            <Text style={{fontSize: 20}}>Work, Exercise, or Personal Project{'\n'}...{'\n'}
                            Start Tracking Today!</Text>
                        </Text>
                    </LinearGradient>
                </View>
                {/*Top Right*/}
                <View style={styles.topRight}>
                    <View></View>
                </View>
            </View>

            <View style={styles.bot}>

            </View>
        </View>
    );
};





export default CreatCardScreen;