//Represent inner window of the personalTask page independent of status bar and tabs;
import Card from "./Card";
import {FlatList, View} from "react-native";
import {useState} from "react";
import getWhiteTint from "../styles/whiteTintRes";
import PersonalTaskModal from "./PersonalTaskModal";
import DraggableFlatList, {ScaleDecorator} from 'react-native-draggable-flatlist'

import {GestureHandlerRootView} from "react-native-gesture-handler";

//used for testing
import cardDatasetA from '../userdata/sampleCardDataset.json'
import {withDecay} from "react-native-reanimated";

const PersonalTaskWindow = () => {
    //cardDataset Arrangement
    const [cardDataset, setCardDataset] = useState(cardDatasetA)

    //modal related states
    const [isModalVis, setModalVis] = useState(false)
    const [modalConfig, setModalConfig] = useState({})

    //TODO: GET MORE PARAMETER FOR setModal

    //Setter function for modal content, depends on which card is clicked
    const setModal = (modalContent) => {
        setModalConfig(modalContent)
        setModalVis(true)
    }

    //TODO: Handle HTTP GET requst and list using </FlatList>
    //FIXME: Dummy code for sample object:

    const renderCard = ({item, drag})=> {
        return (
            <ScaleDecorator>
                <Card bgColor={getWhiteTint(4)} cardData={item} setModel={setModal} onLongPress={drag}/>
            </ScaleDecorator>

        )
    }


    return (
        //FIXME: remove random color generator
        <View style={{flexGrow: 1}}>

            {/*The following flatlist is deprecated*/}
            {/*<FlatList data={cardDataset}*/}
            {/*          renderItem={({item}) => <Card bgColor={getWhiteTint(4)} cardData={item} setModel={setModal}/>}*/}
            {/*          keyExtractor={item => item.key}*/}
            {/*/>*/}

            {/*
                ItemSeparatorComponent and similar props for regular flatlist need written in functional JSX
                due to a bug in react-native-draggable-flatlist library
            */}
            <DraggableFlatList data={cardDataset}
                               renderItem={renderCard}
                               ItemSeparatorComponent={() => <View style={{height: 15}}/>}
                               keyExtractor={(item) => item.key}
                               onDragEnd={({ data }) => setCardDataset(data)}/>

            <PersonalTaskModal isModalVis={isModalVis} setModalVis={setModalVis} modalConfig={modalConfig}
                               bgColor={getWhiteTint(4)}/>
        </View>
    );
};

export default PersonalTaskWindow;