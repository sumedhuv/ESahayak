import React, {useState} from 'react';
import axios from '../axios';
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
const SellerRegister = ({navigation}) => {
  const [seller_name, setSellerName] = useState('');
  const [seller_email, setSellerEmail] = useState('');
  const [seller_password, setSellerPassword] = useState('');
  const [seller_phone, setSellerPhone] = useState('');
  const [shop_address, setShopAddress] = useState('');
  const [seller_image, setSellerImage] = useState('');
  const [seller_upi, setSellerUpi] = useState('');

  const [errmsg, seterrmsg] = useState('');

  // const handleChangeImage = (e) => {
  //   console.log(e.target.files[0]);
  //   setseller_image(e.target.files[0]);
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    // if (!agree) {
    // console.log("Please Agree terms & conditons");
    // } else {
    const fd = new FormData();
    // fd.append('seller_image', seller_image);
    fd.append('seller_image',{
      name: seller_image.fileName,
      type: seller_image.type,
      uri: 
      //Platform.OS === 'ios' ? photo.uri.replace('file://', '') :
      seller_image.uri
   
      });
    fd.append('seller_name', seller_name);
    fd.append('seller_email', seller_email);
    fd.append('seller_phone', seller_phone);
    fd.append('seller_password', seller_password);
    fd.append('shop_address', shop_address);
    fd.append('seller_upi', seller_upi);

    console.log(seller_image);
    console.log('data', fd);
    await axios
      .post('/buyer/register', fd,{
        headers:{
          Accept:'application/json',
          'Content-type':'multipart/form-data',
        }
      })
      .then(res => {
        console.log('here')
        console.log(res);
        //localStorage.setItem("token", res.headers["x-auth-token"]);
        AsyncStorage.setItem('token', res.headers['x-auth-token']);
        const jwt =   AsyncStorage.getItem("token");
        const getData = async () => {
          try {
            const value = await AsyncStorage.getItem('token');
            console.log(value)
            if (value !== null) {
              // value previously stored
              const user = jwtDecode(value);
              console.log(user)
             AsyncStorage.setItem("id", user._id);
              console.log('token',(await AsyncStorage.getItem('token')));
              console.log('id',(await AsyncStorage.getItem('id')));
              navigation.navigate('mainTabSeller');
            }
          } catch (e) {
            // error reading value
            console.log(e);
          }
        };
        getData();
     
        //window.location.href = 'http://localhost:3000/seller/allpdts';
       
      })
      .catch(err => {
        console.log(err);
      });
    // }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response.assets[0].uri);
      if (response) {
        setSellerImage(response.assets[0]);
        console.log(seller_image);
      }
    });
  };
  // const createFormData = (photo, body = {}) => {
  //   const data = new FormData();

  //   data.append('photo', {
  //     name: photo.fileName,
  //     type: photo.type,
  //     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  //   });

  //   Object.keys(body).forEach((key) => {
  //     data.append(key, body[key]);
  //   });

  //   return data;
  // };
  // const handleUploadPhoto = () => {
  //   fetch(`${SERVER_URL}/api/upload`, {
  //     method: 'POST',
  //     body: createFormData(photo, { userId: '123' }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response', response);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <View>
            {seller_image ? (
              <View style={styles.boxSimple}>
                <Image
                  source={{uri: seller_image.uri}}
                  style={{width: 100, height: 100}}
                />
                {/* <Button title="Upload Photo" onPress={handleUploadPhoto} /> */}
              </View>
            ) : null}
            {/* <TouchableOpacity style={styles.loginBtn} onPress={handleChoosePhoto}>
           <Text style={{fontWeight: 'bold', conulllor: '#FFFFFF'}}>CHOOSE PHOTO</Text>
         </TouchableOpacity> */}
            <>
              <Button title="Choose Photo" onPress={handleChoosePhoto} />
            </>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER YOUR FULL NAME"
              placeholderTextColor="#003f5c"
              color="black"
              name="seller_name"
              onChangeText={name => setSellerName(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER YOUR EMAIL"
              placeholderTextColor="#003f5c"
              color="black"
              name="seller_email"
              onChangeText={email => setSellerEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PHONE NUMBER"
              placeholderTextColor="#003f5c"
              color="black"
              name="seller_phone"
              onChangeText={no => setSellerPhone(no)}
            />
          </View>

          {/* <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="CONFIRM PASSWORD"
             placeholderTextColor="#003f5c"
             secureTextEntry={true}
             onChangeText={handleChange}
           />
         </View> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="SHOP ADDRESS"
              placeholderTextColor="#003f5c"
              color="black"
              name="shop_address"
              onChangeText={addr => setShopAddress(addr)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UPI"
              name="seller_upi"
              placeholderTextColor="#003f5c"
              color="black"
              onChangeText={upi => setSellerUpi(upi)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PASSWORD"
              placeholderTextColor="#003f5c"
              color="black"
              name="seller_password"
              secureTextEntry={true}
              onChangeText={pass => setSellerPassword(pass)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>REGISTER</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: 'grey', marginTop: 20}}>
              ALREADY HAVE AN ACCOUNT?{' '}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SellerLogin')}>
              <Text
                style={{fontWeight: 'bold', color: '#7D7AFF', marginTop: 20}}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  boxSimple: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 20,
    height: 100,
    width: 100,
  },
});

export default SellerRegister;
