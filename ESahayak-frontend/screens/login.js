import React, {useState} from 'react';
import axios from '../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const vals = {seller_email: email, seller_password: password};
    console.log(vals);
    await axios
      .post('/buyer/', vals)
      .then(res => {
        console.log('response', res.data);
        const jvalue = JSON.stringify(res.data);
        AsyncStorage.setItem('token', jvalue);
        const getData = async () => {
          try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
              // value previously stored
              console.log(value);
              navigation.navigate('mainTab');
            }
          } catch (e) {
            // error reading value
            console.log(e);
          }
        };
        getData();
        //window.location.href = "http://localhost:3000/seller/allpdts";
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.background}>
      <View style={styles.cornerbg}>
        <Image
          source={require('../corner.png')}
          style={{height: 120, width: 150}}
        />
      </View>
      <View style={styles.centre}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="ENTER YOUR EMAIL"
            color="black"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="PASSWORD"
            placeholderTextColor="#003f5c"
            color="black"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: 'grey', marginTop: 20}}>
              DONT HAVE AN ACCOUNT?{' '}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text
                style={{fontWeight: 'bold', color: '#7D7AFF', marginTop: 20}}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
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

export default Login;
