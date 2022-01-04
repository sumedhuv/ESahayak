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
import Welcome from './screens/welcome';
import Home from './screens/home';
import Grains from './screens/grains';
import Profile from './screens/profile';
import Voice from './screens/voice';

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
        <Drawer.Screen name="Voice" component={Voice} />
        <Drawer.Screen name="Grains" component={Grains} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="mainTab"
          component={mainTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
