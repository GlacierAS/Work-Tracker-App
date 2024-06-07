//Represent inner window of the personalTask page independent of status bar and tabs;
import Card from "./Card";
import { FlatList, View } from "react-native";
import {useState} from "react";

//Styling
import getWhiteTint from "../styles/whiteTintRes";
import PersonalTaskModal from "./PersonalTaskModal";

//FIXME: data loading
import cardData from '../userdata/cardTemplate.json';
import cardDataset from '../userdata/sampleCardDataset.json'
import {GestureHandlerRootView} from "react-native-gesture-handler";


const PersonalTaskWindow = () => {
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



    return (
        //FIXME: remove random color generator
        <View>

            <FlatList data={cardDataset} renderItem={({item})=> {
                    return <Card bgColor={getWhiteTint(4)} cardData={item} setModel={setModal}/>
                }} ItemSeparatorComponent={<View style={{height: 15}}/>}/>

            <PersonalTaskModal isModalVis={isModalVis} setModalVis={setModalVis} modalConfig={modalConfig}
                               bgColor={getWhiteTint(4)}/>
        </View>
    );
};




export default PersonalTaskWindow;