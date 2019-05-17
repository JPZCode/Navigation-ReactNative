import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

   constructor(props) {
    super(props);
    this.state = { 
      user: 'User',
      pass: 'Password' 
    };
  }

  _navigate = () => { //Navigate (Ventana Secreta)
    this.props.navigation.navigate('Vista2');
  }

   render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>My LOGIN</Text>
        <Text>https://mylogin.com </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.Input}
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}/>
          <TextInput
            style={styles.Input}
            onChangeText={(pass) => this.setState({pass})}
            value={this.state.pass}/>
          <Button 
            style={styles.Button}
            onPress={() => this._navigate()}
            title="Log in"/>
            <Button 
            style={styles.Button}
            onPress={() => this._navigate()}
            title="Forgotten your Password?"/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  form: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center',
  },
  Input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:  5,
    textAlign: 'center'
  },
  Button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    marginTop: 15
  }
});