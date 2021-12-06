/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  return (
    <View style={styles.background}>
      <View style={styles.cornerbg}>
        <Image
          source={require('./corner.png')}
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="ENTER YOUR FULL NAME"
            placeholderTextColor="#003f5c"
            onChangeText={name => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="ENTER YOUR EMAIL"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="PASSWORD"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="CONFIRM PASSWORD"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={cpassword => setCPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>REGISTER</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', color: 'grey', marginTop: 20}}>
            ALREADY HAVE AN ACCOUNT?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold', color: '#7D7AFF', marginTop: 20}}>
              SIGN IN
            </Text>
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
    marginTop: 20,
    backgroundColor: '#7D7AFF',
  },
});

export default Register;
