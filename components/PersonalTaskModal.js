import React from 'react';
import {Button, Modal, Text} from "react-native";

const PersonalTaskModal = (props) => {
    return (
        <Modal
            visible={props.isModalVis}
            animationType={"slide"}
            transparent={true}
        >
            <Text>{props.modalConfig}</Text>
            {/*for testing*/}
            <Button title={"Back"} onPress={()=> props.setModalVis(false)} color={"midnightblue"}></Button>
        </Modal>
    );
};

export default PersonalTaskModal;