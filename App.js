import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import MainStyle from "./styles/MainStyle";
import appWindow from "./components/AppWindow";
import AppWindow from "./components/AppWindow";

export default function App() {
  return (
      //The wrapper will vary across platform
    <View style={{marginTop: 20}}>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
        <AppWindow></AppWindow>
    </View>
  );
}

