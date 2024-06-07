//The modal used in PersonalTaskWindow, visible when clicked on any card
import React from 'react';
import {Button, Modal, Pressable, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import personalTaskWindowStyle from "../styles/personalTaskWindowStyle";

const PersonalTaskModal = (props) => {
    //props was handed from the cards
    return (
        <Modal visible={props.isModalVis} animationType={"slide"} transparent={true}>
            <View style={personalTaskWindowStyle.modalViewStyle}>
                <Pressable style={personalTaskWindowStyle.topTransparentArea} onPress={()=> props.setModalVis(false)}/>
                {/*TODO: SYNC COLOR*/}
                <LinearGradient colors={props.bgColor} start={{x: 0, y: 0}} end={{x:1, y: 1}}
                                style={personalTaskWindowStyle.contentArea}>
                    <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus animi architecto atque consectetur cum deserunt dolor dolore dolorum exercitationem
                    laudantium magnam nobis numquam officia, quae reprehenderit tempora tenetur? Deleniti, sequi.
                    </Text>
                    <Button title={"Back"} onPress={()=> props.setModalVis(false)} color={"midnightblue"}></Button>
                </LinearGradient>
            </View>
        </Modal>
    );
};

export default PersonalTaskModal;