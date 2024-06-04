//Represent inner window of the personalTask page independent of status bar and tabs;
import Card from "./Card";
import {Button, Modal, Pressable, Text, View} from "react-native";
import {useState} from "react";

//Styling
import getWhiteTint from "../styles/whiteTintRes";
import PersonalTaskModal from "./PersonalTaskModal";


const AppWindow = () => {
    //modal related states
    const [isModalVis, setModalVis] = useState(false)
    const [modalConfig, setModalConfig] = useState({})

    //TODO: GET MORE PARAMETER FOR setModal
    const setModal = (modalContent) => {
        setModalConfig(modalContent)
        setModalVis(true)
    }

    return (
        <View>
            <Card bgColor={getWhiteTint(4)} setModel={setModal}></Card>
            <Card bgColor={getWhiteTint(4)} setModel={setModal}></Card>
            <Card bgColor={getWhiteTint(4)} setModel={setModal}></Card>

            <PersonalTaskModal isModalVis={isModalVis} setModalVis={setModalVis} modalConfig={modalConfig} />
        </View>
    );
};




export default AppWindow;