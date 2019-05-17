import React, {Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';

import TabBar from "../components/TabBar";

export default class Secret extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Vista ROJO</Text>
        <TabBar selected="Colordos"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});