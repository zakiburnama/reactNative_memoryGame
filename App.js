import React, { Component } from 'react';

import {View, Text, Button, Alert} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'hALO', 
      random: 5,
      charData: ['A', 'B', 'C', 'D', 'E'],

      topFirstChar: 0, topSecondChar: 0,
      botFirstChar: 0, botSecondChar: 0,

      nilaiA: 0, nilaiB: 0, nilaiC: 0, nilaiD: 0, nilaiE: 0,
      nilaiF: 0, nilaiG: 0, nilaiH: 0, nilaiI: 0,

      topButtonText: 'AA',
      botButtonText: 'AA',

      topLeftButton: 'TL',
      topMiddButton: 'TM',
      topRghtButton: 'TR',

      midLeftButton: 'ML',
      midMiddButton: 'MM',
      midRghtButton: 'MR',
      
      botLeftButton: 'BT',
      botMiddButton: 'BM',
      botRghtButton: 'BB',
    };
  }
  
  onPressTop = () => {

      // var topValue = this.state.topFirstChar + this.state.topSecondChar;
      // var botValue = this.state.botFirstChar + this.state.botSecondChar;

      
      // if (topValue >= botValue) {
      //     this.setState({ text: 'Benar' })
      // }
      // else {
      //     this.setState({ text: 'Salah' })
      // }//
      this.testRandom()

  }

  onPressRandom = () => {
      this.testRandom()
  }

  

  testRandom = () => {

    const array = [0, 0, 1, 1, 2, 2, 3, 3, 4];
    
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  

    // function shuffleArray(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    // }
    
    // shuffleArray(arrlist);
    this.state.nilaiA = array[0];
    this.state.nilaiB = array[1];
    this.state.nilaiC = array[2];
    this.state.nilaiD = array[3];
    this.state.nilaiE = array[4];
    this.state.nilaiF = array[5];
    this.state.nilaiG = array[6];
    this.state.nilaiH = array[7];
    this.state.nilaiI = array[8];
      
    this.setState({
      // topFirstChar: parseInt(Math.random() * 5, 10),
      // topSecondChar: parseInt(Math.random() * 5, 10),

      // botFirstChar: parseInt(Math.random() * 5, 10),
      // botSecondChar: parseInt(Math.random() * 5, 10),

      // topButtonText: this.state.charData[this.state.topFirstChar] + this.state.charData[this.state.topSecondChar],
      // botButtonText: this.state.charData[this.state.botFirstChar] + this.state.charData[this.state.botSecondChar],
      
      //topButtonText: 'AA',
      //botButtonText: 'CC',

      // nilaiA: parseInt(Math.random() * 5),
      // nilaiB: parseInt(Math.random() * 5),
      // nilaiC: parseInt(Math.random() * 5),

      // nilaiA: array.pop(),
      // nilaiB: array.pop(),
      // nilaiC: array.pop(),
      // nilaiD: array.pop(),
      // nilaiE: array.pop(),
      
      topLeftButton: this.state.charData[this.state.nilaiA],
      midLeftButton: this.state.charData[this.state.nilaiB],
      botLeftButton: this.state.charData[this.state.nilaiC],

      topMiddButton: this.state.charData[this.state.nilaiD],
      midMiddButton: this.state.charData[this.state.nilaiE],
      botMiddButton: this.state.charData[this.state.nilaiF],

      topRghtButton: this.state.charData[this.state.nilaiG],
      midRghtButton: this.state.charData[this.state.nilaiH],
      botRghtButton: this.state.charData[this.state.nilaiI],
    })
    
  }
  
  render() {
    return (
      <View style={{flex: 1, padding:0}}>

        {/* AppBar */}
        <View style={{
          backgroundColor: 'white', 
          paddingVertical: 20,
          elevation: 2,
          }}>
          
          {/* <Text style={{fontSize: 24, textAlign: 'center'}}>hALO</Text> */}
          <Text style={{fontSize: 24, textAlign: 'center'}}>{this.state.text}</Text>

        </View>

        {/* BUTTONS */}
        <View style={{
          flex: 0.8, 
          flexDirection: 'row',
          backgroundColor: 'white',
          marginHorizontal: 0,
          justifyContent: 'center', // kontrol vertikal
          alignItems: "center",     // kontrol horizontal
          }}>

          <View style={{marginHorizontal: 20}}>

            <Button title={this.state.topLeftButton} onPress={this.onPressTop} color={'red'}/>
            <Text>{"\n"}</Text>            
            <Button title={this.state.midLeftButton} color={'red'}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.botLeftButton} color={'red'}/>

          </View>    

          <View style={{marginHorizontal: 20}}>

            <Button title={this.state.topMiddButton} onPress={this.onPressRandom} color={'blue'}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.midMiddButton} color={'blue'}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.botMiddButton} color={'blue'}/>

          </View>  

          <View style={{marginHorizontal: 20}}>

            <Button title={this.state.topRghtButton} color={'green'}/> 
            <Text>{"\n"}</Text>
            <Button title={this.state.midRghtButton} color={'green'}/> 
            <Text>{"\n"}</Text>
            <Button title={this.state.botRghtButton} color={'green'}/>

          </View>            

        </View> 
        <Button title='soal' onPress={this.onPressRandom}/>



      </View>
    );
  }
};


export default App;