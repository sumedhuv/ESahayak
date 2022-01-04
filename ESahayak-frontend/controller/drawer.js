import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';

import Welcome from '../screens/welcome';
const RootDrawerNavigator = createDrawerNavigator({
  Welcome: {
    screen: Welcome,
  },
});
export default createAppContainer(RootDrawerNavigator);
