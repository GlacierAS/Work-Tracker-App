//Entry point of the app, wrapped container, navigations.
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native"

import MainStyle from "./styles/MainStyle";
import appWindow from "./components/PersonalTaskWindow";
import PersonalTaskWindow from "./components/PersonalTaskWindow";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
    const Tab = createBottomTabNavigator()
    return (
      //The wrapper will vary across platform
        //TODO: iOS: wrap around <SafeAreaView>
        <GestureHandlerRootView>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name={"My Tasks"} component={PersonalTaskWindow} />
                    <Tab.Screen name={"Task 2"} component={PersonalTaskWindow} />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />

        </GestureHandlerRootView>
    );
}

