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

const Staff = () => {
  return (
    <View style={styles.background}>
      
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: '90%',
          height: 180,
          borderRadius: 10,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            height: 150,
            width: 150,
            margin: 20,
          }}>
          <Image
            source={require('../employee.jpg')}
            style={{
              width: 140,
              resizeMode: 'contain',
              height: 140,
              borderRadius: 100,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              marginLeft: 10,

              fontSize: 24,
              marginTop: 35,
              fontWeight: 'bold',
            }}>
            SARVESH K.
          </Text>
          <Text
            style={{
              color: 'black',
              marginLeft: 20,

              fontSize: 20,

              fontWeight: 'bold',
            }}>
            Employee
          </Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>REMOVE</Text>
          </TouchableOpacity>
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
  loginBtn: {
    width: '70%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: '#7D7AFF',
  },
});

export default Staff;
