import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import TabBar from "../components/TabBar";

export default class App extends React.Component {

   render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.div}>
          <Text>Contenedor Uno</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Dos</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Tres</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Cuatro</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Cinco</Text>
        </View>
        <TabBar selected="Azul"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div: {
    flex: 1,
    height: 180,
    width: '100%',
    backgroundColor: 'gray',
    marginTop: 10,
  }
});
