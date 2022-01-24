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
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
const OwnerUpdate = ({navigation}) => {
  useEffect(() => {
    async function getResults() {
      let id = await AsyncStorage.getItem('id');
      console.log(id);
      const results = await axios.get(`/${id}`);
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      setownerName(results.data.owner_name);
      setownerEmail(results.data.owner_email);
      setownerPassword(results.data.owner_password);
      setownerPhone(results.data.owner_phone);
      setShopAddress(results.data.shop_address);
      setownerImage(results.data.owner_image);
      setownerUpi(results.data.owner_upi);
    }
    getResults();
  }, []);
  const [owner_name, setownerName] = useState('');
  const [owner_email, setownerEmail] = useState('');
  const [owner_password, setownerPassword] = useState('');
  const [owner_phone, setownerPhone] = useState(0);
  const [shop_address, setShopAddress] = useState('');
  const [owner_image, setownerImage] = useState('');
  const [owner_upi, setownerUpi] = useState('');

  const [errmsg, seterrmsg] = useState('');

  // const handleChangeImage = (e) => {
  //   console.log(e.target.files[0]);
  //   setowner_image(e.target.files[0]);
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    // if (!agree) {
    // console.log("Please Agree terms & conditons");
    // } else {
    const fd = new FormData();
    fd.append('owner_image', {
      name: owner_image.fileName,
      type: owner_image.type,
      uri:
        //Platform.OS === 'ios' ? photo.uri.replace('file://', '') :
        owner_image.uri,
    });
    fd.append('owner_name', owner_name);
    fd.append('owner_email', owner_email);
    fd.append('owner_phone', owner_phone);
    fd.append('owner_password', owner_password);
    fd.append('shop_address', shop_address);
    fd.append('owner_upi', owner_upi);

    console.log(owner_image);
    console.log('data', fd);
    let id = await AsyncStorage.getItem('id');
    let token = await AsyncStorage.getItem('token');
    await axios
      .put(`/${id}/update`, fd, {
        headers: {
          Accept: 'application/json',
          'Content-type': 'multipart/form-data',
          'x-auth-token': token,
        },
      })
      .then(res => {
        console.log('here');
        console.log(res);
        //localStorage.setItem("token", res.headers["x-auth-token"]);
        //window.location.href = 'http://localhost:3000/owner/allpdts';
        navigation.navigate('OwnerDetails');
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
        setownerImage(response.assets[0]);
        console.log(owner_image);
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
            UPDATE OWNER
          </Text>
          <View>
            {owner_image ? (
              <View style={styles.boxSimple}>
                <Image
                  source={{
                    uri: `https://stormy-island-55490.herokuapp.com/${owner_image}`,
                  }}
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
              name="owner_name"
              value={owner_name}
              onChangeText={name => setownerName(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER YOUR EMAIL"
              placeholderTextColor="#003f5c"
              color="black"
              name="owner_email"
              value={owner_email}
              onChangeText={email => setownerEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PHONE NUMBER"
              placeholderTextColor="#003f5c"
              color="black"
              name="owner_phone"
              value={owner_phone.toString()}
              onChangeText={no => setownerPhone(no)}
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
              value={shop_address}
              onChangeText={addr => setShopAddress(addr)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UPI"
              name="owner_upi"
              placeholderTextColor="#003f5c"
              color="black"
              value={owner_upi}
              onChangeText={upi => setownerUpi(upi)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PASSWORD"
              placeholderTextColor="#003f5c"
              color="black"
              name="owner_password"
              value={owner_password}
              secureTextEntry={true}
              onChangeText={pass => setownerPassword(pass)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>UPDATE</Text>
          </TouchableOpacity>
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

    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 20,
    height: 100,
    width: 100,
  },
});

export default OwnerUpdate;
