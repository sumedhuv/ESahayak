
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
import SellerLogin from './screens/seller_login';
import OwnerLogin from './screens/owner_login';
import SellerRegister from './screens/seller_register';
import OwnerRegister from './screens/owner_register';
import Welcome from './screens/welcome';
import Home from './screens/home';
import Products from './screens/product';
import ProfileOwner from './screens/profileOwner';
import ProfileSeller from './screens/profileSeller';
import SellerUpdate from './screens/updateSeller';
import Voice from './screens/voice';
import Sales from './screens/sales';
import Staff from './screens/staff';
import Settings from './screens/settings';
import Addstaff from './screens/addstaff';
import AddSellerProduct from './screens/addSellerproduct';
import StaffDetails from './screens/staffdetails';
const Stack = createNativeStackNavigator();

const App = () => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#EEF0FF',
    },
    headerTintColor: 'black',
    headerBackTitle: 'Back',
  };
  const mainTabSeller = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={screenOptionStyle}>
        <Drawer.Screen name="ProfileSeller" component={ProfileSeller} />
        <Drawer.Screen name="Voice" component={Voice} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Sales" component={Sales} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
  };
  const mainTabOwner = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={screenOptionStyle}>
        <Drawer.Screen name="ProfileOwner" component={ProfileOwner} />
        <Drawer.Screen name="Voice" component={Voice} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Sales" component={Sales} />
        <Drawer.Screen name="Staff" component={Staff} />
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
          name="SellerLogin"
          component={SellerLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnerLogin"
          component={OwnerLogin}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SellerRegister"
          component={SellerRegister}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SellerUpdate"
          component={SellerUpdate}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="OwnerRegister"
          component={OwnerRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainTabSeller"
          component={mainTabSeller}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="mainTabOwner"
          component={mainTabOwner}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Addstaff"
          component={Addstaff}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AddSellerProduct"
          component={AddSellerProduct}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="StaffDetails"
          component={StaffDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
