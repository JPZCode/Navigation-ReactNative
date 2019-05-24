import React, {Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';

import TabBar from "../components/TabBar";

export default class Rojo extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Vista ROJO</Text>
        <TabBar selected="Rojo"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
  }
});