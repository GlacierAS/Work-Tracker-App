import {Text, Pressable} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import cardStyles from "../styles/cardStyles";

import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        // Classify different card type
        let specialStates;
        switch (this.props.cardData.type) {
            case "TRACKER_CARD":
                specialStates = {
                    dayCount: this._getDayCount(this.props.cardData.startDate, this.props.cardData.specialStatus.precision),
                    duration: this.props.cardData.specialStatus.duration, //can be incr. by modifying
                    completedToday: this.props.cardData.specialStatus.completedToday,
                }
                break
        }
        this.state = {
            // Array of (default 4) color gradient generated at creation
            bgColor: this.props.bgColor,
            cardTitle: this.props.cardData.cardTitle,
            ...specialStates,
        }
    }

    handleSetStateRequest = (stateToBeUpdated, stateValue) =>  {
        //arrow function other component use to update state in this component
        //FIXME: TEST FOLLOWING CODE
        this.setState(prevState => {
            return {
                ...prevState, //copies the old state
                stateToBeUpdated: stateValue
            }
        })
    }

    _getSpecialTag() {
        //Get special tag for different card type
        //cannot be moved to constructor switch statement because some states are not defined
        let specialTag = <></>;
        switch (this.props.cardData.type) {
            case "TRACKER_CARD":
                specialTag = <>
                    <Text style={cardStyles.cardStatusText}>
                        Day {this.state.dayCount} out of {this.state.duration}
                    </Text>
                    <Text style={[cardStyles.cardStatusText, {paddingBottom: 10}]}>
                        {this.state.completedToday ? <Text>Completed Today ☑</Text> : <Text>Incomplete ☐</Text>}
                    </Text>
                </>
                break
        }
        return specialTag
    }

    _getDayCount(startDate, precision) {
        if (precision === "accurate") {
            //return how many days has elapsed since start time, (86400000 ms in a day)
            return Math.floor((Date.now() - startDate) / 86400000) + 1
        } else if (precision === "loose") {
            const date = new Date();
            date.setHours(23, 59, 59, 999);
            //TODO: FIX LOGIC
            return Math.floor((date.getTime() - startDate) / 86400000) + 1
        } else {
            //Error:
            return -1
        }

    }
    render() {
        return (
            //TODO: change model text to fetched text
            <Pressable onPress={() => this.props.setModel('ModelText')} onLongPress={this.props.onLongPress}>
                <LinearGradient style={cardStyles.cardViewContainer} colors={this.state.bgColor} start={{x: 0, y: 0}}
                                end={{x:1, y: 1}}>
                    {/*title*/}
                    <Text style={cardStyles.cardTitleText}>{this.state.cardTitle}</Text>

                    {/*special tag depends on card type*/}
                    {this._getSpecialTag()}
                </LinearGradient>
            </Pressable>
        );
    }
}

export default Card;