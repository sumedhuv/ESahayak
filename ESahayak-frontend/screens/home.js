import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

const Home = ({navigation}) => {
 
  return (
    <View style={styles.background}>
      <View style={styles.cornerbg}>
        <Image
          source={require('../corner.png')}
          style={{height: 120, width: 150}}
        />
      </View>
      <View style={styles.centre}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'black',
            marginTop: 20,
            marginBottom: 20,
          }}>
          LET'S GET YOU ON BOARD
        </Text>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SellerRegister')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('OwnerRegister')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Shop Owner</Text>
        </TouchableOpacity>
        <View style={{height: 350, width: 350, marginTop: 30}}>
          <Image
            source={require('../login.png')}
            style={{width: null, resizeMode: 'contain', height: 220}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#EEF0FF',
    height: '100%',
  },
  cornerbg: {
    width: 25,
    height: 25,
    marginLeft: 0,
  },
  centre: {
    alignItems: 'center',

    marginTop: 100,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: '70%',
  },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#7D7AFF',
  },
});

export default Home;
