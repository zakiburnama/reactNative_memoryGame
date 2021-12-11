import React, { Component } from 'react';

import { Button, Text, View, Alert } from 'react-native';
import { extend } from './node_modules/dayjs/index';

export default class HelloWorldApp extends Component {
    state = {
        text: 'My Text', random: 5,
        charData: ['A', 'B', 'C', 'D', 'E'],
        topFirstChar: 0, topSecondChar: 0,
        botFirstChar: 0, botSecondChar: 0,

        topButtonText: 'AA',
        botButtonText: 'AA'
    }

    onPressTop = () => {

        var topValue = this.state.topFirstChar + this.state.topSecondChar;
        var botValue = this.state.botFirstChar + this.state.botSecondChar;

        
        if (topValue > botValue) {
            this.setState({ text: 'Benar' })
        }
        else {
            this.setState({ text: 'Salah' })
        }
        this.testRandom()
    }

    onPressBot = () => {
        var topValue = this.state.topFirstChar + this.state.topSecondChar;
        var botValue = this.state.botFirstCHar + this.state.botSecondChar;
        if (topValue < botValue) {
            this.setState({ text: 'Benar' })
        }
        else {
            this.setState({ text: 'Salah' })
        }
        this.testRandom()
    }


    testRandom = () => {
        
        this.setState({
            topFirstChar: parseInt(Math.random() * 5, 10),
            topSecondChar: parseInt(Math.random() * 5, 10),

            botFirstChar: parseInt(Math.random() * 5, 10),
            botSecondChar: parseInt(Math.random() * 5, 10),

            topButtonText: this.state.charData[this.state.topFirstChar] + this.state.charData[this.state.topSecondChar],
            botButtonText: this.state.charData[this.state.botFirstChar] + this.state.charData[this.state.botSecondChar]
            //topButtonText: 'AA',
            //botButtonText: 'CC'

        })
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> {this.state.text} </Text>
                <Button
                    onPress={this.onPressTop}

                    title={this.state.topButtonText}
                    color="#AABBAA"
                />

                <Text>{"\n"}</Text>

                <Button
                    onPress={this.onPressBot}

                    title={this.state.botButtonText}
                    color="#AABBAA"
                />

            </View>
        )
    }
}