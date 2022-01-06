import React, {useState,useEffect} from 'react';
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

const ProfileSeller = ({navigation}) => {
  const [user, setuser] = useState([]);
  
  useEffect(() => {
    async function getResults() {
      let id=await AsyncStorage.getItem('id')
      console.log(id);
      const results = await axios.get(`/buyer/${id}`)
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      setuser(results.data)
    }
    getResults();
    
   
  },[]);
  console.log(user)
  return (
    <View style={styles.background}>
      <View style={styles.cornerbg}>
        <Image
          source={require('../corner.png')}
          style={{height: 120, width: 150}}
        />
      </View>
      <View style={styles.centre}>
        <View style={{height: 250, width: 250, marginTop: 30}}>
          <Image
            source={require('../profile.png')}
            style={{width: null, resizeMode: 'contain', height: 220}}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'black',
            marginBottom: 20,
          }}>
          WELCOME MAHESH!
        </Text>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('SellerUpdate')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 18}}>
            UPDATE
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

export default ProfileSeller;
