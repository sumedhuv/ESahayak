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
const Voice = () => {
  return (
    <View style={styles.background}>
      <View style={styles.centre}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: 'black',
            marginBottom: 10,
          }}>
          TAP TO SPEAK
        </Text>
        <TouchableOpacity>
          <View
            style={{
              height: 200,
              width: 200,
              marginTop: 30,
              backgroundColor: '#9898DE',
              borderRadius: 200,
            }}>
            <Image
              source={require('./mic.png')}
              style={{
                width: null,
                resizeMode: 'contain',
                height: 100,
                marginTop: 50,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 300, width: 300, marginTop: 30}}>
          <Image
            source={require('../home.png')}
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

export default Voice;
