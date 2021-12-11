import React, { Component } from 'react';

import {View, Text, Button, Alert} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
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
          <Text style={{fontSize: 24, textAlign: 'center'}}>hALO</Text>

        </View>

        {/* BUTTONS */}
        <View style={{
          flex: 1, 
          flexDirection: 'row',
          backgroundColor: 'white',
          marginHorizontal: 0,
          justifyContent: 'center', // kontrol vertikal
          alignItems: "center",     // kontrol horizontal
          }}>

          <View style={{marginHorizontal: 20}}>

            <Button title='111' color={'red'}/>
            <Text>{"\n"}</Text>            
            <Button title='111' color={'red'}/>
            <Text>{"\n"}</Text>
            <Button title='111' color={'red'}/>

          </View>    

          <View style={{marginHorizontal: 20}}>

            <Button title='222' color={'blue'}/>
            <Text>{"\n"}</Text>
            <Button title='222' color={'blue'}/>
            <Text>{"\n"}</Text>
            <Button title='222' color={'blue'}/>

          </View>  

          <View style={{marginHorizontal: 20}}>

            <Button title='222' color={'green'}/> 
            <Text>{"\n"}</Text>
            <Button title='222' color={'green'}/> 
            <Text>{"\n"}</Text>
            <Button title='222' color={'green'}/>

          </View>  
          

        </View>

      </View>
    );
  }
};


export default App;