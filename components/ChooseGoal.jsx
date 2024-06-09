import React from 'react';
import styles from "../styles/createCardStyles";
import {Button, Text, View} from "react-native";

const ChooseGoal = ({navigation}) => {
    return (
        <View style={styles.chooseGoalContainer}>
            <Text style={{fontSize: 26}}>What do you want to achieve?</Text>
            <Button title="Next" onPress={() => navigation.navigate("about")} />
        </View>
    );
};

export default ChooseGoal;