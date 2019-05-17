import React, {Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';

import TabBar from "../components/TabBar";

export default class Azul extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Vista AZUL</Text>
        <TabBar selected="Coloruno"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
});