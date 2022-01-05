
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './screens/login';
import Register from './screens/register';
import Welcome from './screens/welcome';
import Home from './screens/home';
import Grains from './screens/grains';
import Profile from './screens/profile';
import Voice from './screens/voice';
import Sales from './screens/sales';
import Settings from './screens/settings';

const Stack = createNativeStackNavigator();

const App = () => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#EEF0FF',
    },
    headerTintColor: 'black',
    headerBackTitle: 'Back',
  };
  const mainTab = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={screenOptionStyle}>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Voice" component={Voice} />
        <Drawer.Screen name="Grains" component={Grains} />
        <Drawer.Screen name="Sales" component={Sales} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
     
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainTab"
          component={mainTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
