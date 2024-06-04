import {Text, Pressable} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import cardStyles from "../styles/cardStyles";

import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Array of (default 4) color gradient generated at creation
            bgColor: this.props.bgColor
        }
    }


    render() {
        return (
            //TODO: change model text to fetched text
            <Pressable onPress={() => this.props.setModel('ModelText')}>
                <LinearGradient style={cardStyles.cardViewContainer}
                    colors={this.state.bgColor}
                    start={{x: 0, y: 0}}
                    end={{x:1, y: 1}}>
                    {/*title*/}
                    <Text style={cardStyles.cardTitleText}>Daily Task</Text>
                    {/*status*/}
                    <Text style={cardStyles.cardStatusText}>Day 5 out of 12</Text>
                    <Text style={[cardStyles.cardStatusText, {paddingBottom: 10}]}>Completed Today</Text>
                </LinearGradient>
            </Pressable>
        );
    }
}

export default Card;