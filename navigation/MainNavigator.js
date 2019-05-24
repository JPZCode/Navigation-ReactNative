import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/login';
import Dos from '../screens/VistaDos';
import Azul from '../screens/rojo';
import Rojo from '../screens/azul';


const navigator = createAppContainer(createSwitchNavigator({

  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Dos: {
    screen: Dos
  },
  Rojo: {
    screen: Rojo
  },
  Azul: {
    screen: Azul
  }

}));

export default navigator;