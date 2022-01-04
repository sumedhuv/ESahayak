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

const Sales = () => {
  return (
    <View style={styles.background}>
      <View style={styles.centre}>
        <Image
          source={require('../sales.png')}
          style={{height: 280, width: 280}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '90%',
          height: 80,
          borderRadius: 10,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            height: 80,
            width: '20%',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Image
            source={require('../wheat.png')}
            style={{
              width: null,
              resizeMode: 'contain',
              height: 60,
              borderRadius: 200,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              marginLeft: 20,

              fontSize: 18,
              marginTop: 25,
              fontWeight: 'bold',
            }}>
            ITEMS SOLD TODAY:900
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '90%',
          height: 80,
          borderRadius: 10,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            height: 80,
            width: '20%',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Image
            source={require('../wheat.png')}
            style={{
              width: null,
              resizeMode: 'contain',
              height: 60,
              borderRadius: 200,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              marginLeft: 20,

              fontSize: 18,
              marginTop: 25,
              fontWeight: 'bold',
            }}>
            ITEMS SOLD TODAY:900
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '90%',
          height: 80,
          borderRadius: 10,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            height: 80,
            width: '20%',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Image
            source={require('../wheat.png')}
            style={{
              width: null,
              resizeMode: 'contain',
              height: 60,
              borderRadius: 200,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              marginLeft: 20,

              fontSize: 18,
              marginTop: 25,
              fontWeight: 'bold',
            }}>
            ITEMS SOLD TODAY:900
          </Text>
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

    marginTop: 50,
  },
});

export default Sales;
