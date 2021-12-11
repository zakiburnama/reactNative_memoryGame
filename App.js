import React, { Component } from 'react';

import {View, Text, Button, Alert, ToastAndroid} from 'react-native';
import { isDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'hALO', 
      random: 5,
      charData: ['A', 'B', 'C', 'D', 'E'],

      topFirstChar: 0, topSecondChar: 0,
      botFirstChar: 0, botSecondChar: 0,

      warna: 'red',
      // flag: 0,

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

  onPressRandom = () => {
      this.state.warna = 'black'
      this.testRandom()
  }

  onPressStart = () => {
      this.state.warna = 'white'
      this.testStart()
  }

  testRandom = () => {

    const array = [0, 0, 1, 1, 2, 2, 3, 3, 4];
    
    let currentIndex = array.length,  randomIndex;

    // acak array
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
        
    this.setState({
      // topFirstChar: parseInt(Math.random() * 5, 10),
      // topSecondChar: parseInt(Math.random() * 5, 10),

      // botFirstChar: parseInt(Math.random() * 5, 10),
      // botSecondChar: parseInt(Math.random() * 5, 10),

      // topButtonText: this.state.charData[this.state.topFirstChar] + this.state.charData[this.state.topSecondChar],
      // botButtonText: this.state.charData[this.state.botFirstChar] + this.state.charData[this.state.botSecondChar],
      
      //topButtonText: 'AA',
      //botButtonText: 'CC',
      
      nilaiA: array[0],
      nilaiB: array[1],
      nilaiC: array[2],
      nilaiD: array[3],
      nilaiE: array[4],
      nilaiF: array[5],
      nilaiG: array[6],
      nilaiH: array[7],
      nilaiI: array[8],
      
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

  testStart = () => {      
    this.setState({      
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

    var flag = 0; var temp = ''; var poin = 0;
    
    function pressButton(huruf) {      

      if (flag == 1) {
        if (temp == huruf) {
          // Alert.alert(`asd, ${huruf}`);
          flag = 0; temp = ''; poin++;
          ToastAndroid.showWithGravityAndOffset(`BENAR`, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
          
          if (poin>3) {
            // Alert.alert(`YAY`);
            poin = 0;
            // this.testRandom();
            ToastAndroid.showWithGravityAndOffset(`SELAMAT BENAR SEMUA ,${poin}`, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
          }
        }
        else {
          Alert.alert('SALAH');
          flag = 0; temp = ''; poin = 0; 
          // this.onPressRandom();
          // ToastAndroid.showWithGravityAndOffset("SALAH", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
        }
      }
      else {
        temp = huruf;
        flag++;
      }

    }

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

            <Button title={this.state.topLeftButton} color={this.state.warna} onPress={() => pressButton(this.state.topLeftButton)}/>
            <Text>{"\n"}</Text>            
            <Button title={this.state.midLeftButton} color={this.state.warna} onPress={() => pressButton(this.state.midLeftButton)}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.botLeftButton} color={this.state.warna} onPress={() => pressButton(this.state.botLeftButton)}/>

          </View>    

          <View style={{marginHorizontal: 20}}>

            <Button title={this.state.topMiddButton} color={this.state.warna} onPress={() => pressButton(this.state.topMiddButton)}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.midMiddButton} color={this.state.warna} onPress={() => pressButton(this.state.midMiddButton)}/>
            <Text>{"\n"}</Text>
            <Button title={this.state.botMiddButton} color={this.state.warna} onPress={() => pressButton(this.state.botMiddButton)}/>

          </View>  

          <View style={{marginHorizontal: 20}}>

            <Button title={this.state.topRghtButton} color={this.state.warna} onPress={() => pressButton(this.state.topRghtButton)}/> 
            <Text>{"\n"}</Text>
            <Button title={this.state.midRghtButton} color={this.state.warna} onPress={() => pressButton(this.state.midRghtButton)}/> 
            <Text>{"\n"}</Text>
            <Button title={this.state.botRghtButton} color={this.state.warna} onPress={() => pressButton(this.state.botRghtButton)}/>

          </View>            

        </View> 
        
        <Button title='soal' onPress={this.onPressRandom}/>
        <Text>{"\n"}</Text>
        <Button title='start' onPress={this.onPressStart}/>

      </View>
    );
  }
};


export default App;