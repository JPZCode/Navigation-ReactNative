import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {

   render() {
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <Text>Contenedor Superior</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Medio</Text>
        </View>
        <View style={styles.div}>
          <Text>Contenedor Inferior</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div: {
    flex: 2,
    backgroundColor: 'gray',
    margin: '10px',
  }
});
