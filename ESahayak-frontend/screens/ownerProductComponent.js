import React, {useState, useEffect} from 'react';
import axios from '../axios';
import jwtDecode from 'jwt-decode';
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
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OwnerProductComponent = props => {
  const navigation = useNavigation();
  console.log('props', props);
  const handleDelete = async () => {
    console.log('delete Product');
    // let o_id = await AsyncStorage.getItem('id');
    // let tok = await AsyncStorage.getItem('token');
    // let id = props._id;
    // console.log(o_id);
    // console.log(id);
    // console.log(tok);

    // await axios
    //   .delete(`staff/${o_id}/${id}/delete`, {
    //     headers: {
    //       'x-auth-token': tok,
    //     },
    //   })
    //   .then(res => {
    //     console.log('staff deleted');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OwnerProductDetails', {id: props._id})}>
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
              {props.pdt_image?(<>
            <Image
            source={{uri:`https://stormy-island-55490.herokuapp.com/${props.pdt_image}`}}
            style={{  width: 140,
                resizeMode: 'contain',
                height: 140,
                borderRadius: 100,}}
          /></>):(<>
          <Image
            source={require('../wheat.png')}
            style={{
              width: 140,
              resizeMode: 'contain',
              height: 140,
              borderRadius: 100,
            }}
          /></>)}
        
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
            {props ? props.pdt_name : null}
          </Text>
          {/* <Text
            style={{
              color: 'black',
              marginLeft: 20,

              fontSize: 20,

              fontWeight: 'bold',
            }}>
           Product 
          </Text> */}
          {/* <TouchableOpacity style={styles.loginBtn} onPress={handleDelete}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>REMOVE</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
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

export default OwnerProductComponent;
