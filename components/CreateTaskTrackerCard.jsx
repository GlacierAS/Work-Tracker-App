import React from 'react';
import {Modal, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStackNavigator} from "@react-navigation/stack";

import ChooseGoal from "./ChooseGoal";
import ChooseDuration from "./ChooseDuration";
import {NavigationContainer} from "@react-navigation/native";
const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator()


const CreateTaskTrackerCard = () => {
    return (
        <Stack.Navigator initialRouteName={"goal"} >
            <Stack.Screen
                name="goal"
                component={ChooseGoal}
                options={{
                    title: 'Choose Your Goal',
            }}/>
            <Stack.Screen name="about" component={ChooseDuration} />
        </Stack.Navigator>
    );
};

export default CreateTaskTrackerCard;