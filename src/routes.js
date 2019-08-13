import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createMaterialTopTabNavigator({
    Login,
    Main,
  })
);
