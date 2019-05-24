import React, {Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';

import TabBar from "../components/TabBar";

export default class Azul extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Vista AZUL</Text>
        <TabBar selected="Azul"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  }
});