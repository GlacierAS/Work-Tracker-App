import {StyleSheet, Text, View, StatusBar} from 'react-native';

import MainStyle from "./styles/MainStyle";
import appWindow from "./components/PersonalTaskWindow";
import PersonalTaskWindow from "./components/PersonalTaskWindow";

export default function App() {
  return (
      //The wrapper will vary across platform
    <View style={{paddingTop: StatusBar.currentHeight}}>
      <StatusBar style="auto" />
        <PersonalTaskWindow></PersonalTaskWindow>
    </View>
  );
}

