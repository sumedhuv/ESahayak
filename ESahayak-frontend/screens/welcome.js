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
} from 'react-native';

const Welcome = () => {
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
});

export default Welcome;
