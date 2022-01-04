import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.cornerbg}>
        <Image
          source={require('../corner.png')}
          style={{height: 120, width: 150}}
        />
      </View>
      <View style={styles.centre}>
        <Image
          source={require('../welcome.png')}
          style={{height: 280, width: 280}}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'black',
            marginTop: 20,
          }}>
          WELCOME TO E-SAHAYAK
        </Text>
        <Text
          style={{
            width: 250,
            fontSize: 18,
            color: 'black',
            marginTop: 20,
          }}>
          One stop solution to all your business problems with the help of a
          voice assistant
        </Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={navigation.navigate('Home')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
            GET STARTED
          </Text>
        </TouchableOpacity>
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
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#7D7AFF',
  },
});

export default Welcome;
