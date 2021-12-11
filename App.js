import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Separator = () => (
  <View style={styles.separator} />
);

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.containerAll}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.titleFooterCont}>
        <Text style={styles.titleStyle}>
          Simple Matching Game
        </Text>
      </View>
      <Separator/>
      <View style={styles.fixToText}>
        <Button 
          color='#1261A0'
          title="1 button"
          onPress={() => Alert.alert('1 button pressed')}
        />
        <Button
          color='#1261A0'
          title="2 button"
          onPress={() => Alert.alert('2 button pressed')}
        />
        <Button
          color='#1261A0'
          title="3 button"
          onPress={() => Alert.alert('3 button pressed')}
        />
      </View>
      <View style={styles.fixToText}>
        <Button 
          color='#1261A0'
          title="4 button"
          onPress={() => Alert.alert('4 button pressed')}
        />
        <Button
          color='#1261A0'
          title="5 button"
          onPress={() => Alert.alert('5 button pressed')}
        />
        <Button
          color='#1261A0'
          title="6 button"
          onPress={() => Alert.alert('6 button pressed')}
        />
      </View>
      <View style={styles.fixToText}>
        <Button
          color='#1261A0'
          title="7 button"
          onPress={() => Alert.alert('7 button pressed')}
        />
        <Button
          color='#1261A0'
          title="8 button"
          onPress={() => Alert.alert('8 button pressed')}
        />
        <Button
          color='#1261A0'
          title="9 button"
          onPress={() => Alert.alert('9 button pressed')}
        />
      </View>
      <View style={styles.fixToText}>
        <Button
          color='#072F5F'
          title="Go Start button"
          onPress={() => Alert.alert('Go Start button pressed')}
        />
      </View>
      <Separator/>
      <View style={styles.titleFooterCont}>
        <Text style={styles.footerStyle}>
          Tugas 5 MPR - Kelompok Delta 
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerAll: {
    justifyContent: 'space-evenly', 
    flex:1,
    backgroundColor: '#58CCED',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  titleFooterCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    color: '#001540',
    fontSize: 35,
    fontFamily: 'sans-serif-medium',
  },
  footerStyle: {
    color: '#001540',
    fontSize: 15,
    fontFamily: 'sans-serif-condensed',
  },
  separator: {
    borderWidth: 3,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;