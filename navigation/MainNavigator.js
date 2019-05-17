import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/login';
import Vista2 from '../screens/VistaDos';
import Azul from '../screens/rojo';
import Rojo from '../screens/azul';


const navigator = createAppContainer(createStackNavigator({

  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Vista2: {
    screen: Vista2
  },
  Rojo: {
    screen: Rojo
  },
  Azul: {
    screen: Azul
  }

}));

export default navigator;