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
  Button,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
const AddSellerProduct = ({navigation}) => {
  const [buy_name, setbuy_name] = useState("");
  const [buy_price, setbuy_price] = useState("");
  const [buy_quantity, setbuy_quantity] = useState("");
  const [buy_image, setbuy_image] = useState("");
  
  // const handleChangeImage = (e) => {
  //   console.log(e.target.files[0]);
  //   setbuy_image(e.target.files[0]);
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    // if (!agree) {
    // console.log("Please Agree terms & conditons");
    // } else {
      const fd = new FormData();
      // fd.append("buy_image", buy_image);
      fd.append('buy_image',{
        name: buy_image.fileName,
        type: buy_image.type,
        uri: 
        //Platform.OS === 'ios' ? photo.uri.replace('file://', '') :
        buy_image.uri
     
        });
      fd.append("buy_price", buy_price);
      fd.append("buy_quantity", buy_quantity);
      fd.append("buy_name", buy_name);
    

    console.log(buy_image);
    console.log('data', fd);
    //console.log('id',await AsyncStorage.getItem("id"))
    //console.log('token',await AsyncStorage.getItem("token"))
    let id=await AsyncStorage.getItem('id')
    let token=await AsyncStorage.getItem("token")
    console.log(id)
    console.log(token)
    await axios
    .post(`/buyer/${id}/addpdt`, fd, {
      headers: {
        Accept:'application/json',
        'Content-type':'multipart/form-data',
        "x-auth-token": token,
      },
    })
    .then((res) => {
      console.log(res);
      navigation.navigate('Products')
    //   window.location.href = "http://localhost:3000/owner/pdt";
    })
    .catch((err) => {
      console.log('here')
      console.log(err.message);
    });

  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response.assets[0].uri);
      if (response) {
        setbuy_image(response.assets[0]);
        
      }
    });
  };
  
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
            ADD PRODUCT DETAILS
          </Text>
          <View>
            {buy_image ? (
              <View style={styles.boxSimple}>
                <Image
                  source={{uri: buy_image.uri}}
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
              placeholder="ENTER pdt NAME"
              placeholderTextColor="#003f5c"
              color="black"
              name="pdt_name"
              onChangeText={name => setbuy_name(name)}
            />
          </View>
         
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER PRICE"
              placeholderTextColor="#003f5c"
              color="black"
              name="pdt_last_salary_paid"
              onChangeText={salary => setbuy_price(salary)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER QUANTITY"
              placeholderTextColor="#003f5c"
              color="black"
              name="pdt_phone"
              onChangeText={no => setbuy_quantity(no)}
            />
          </View>

         
          
        
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD</Text>
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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 20,
    height: 100,
    width: 100,
  },
});

export default AddSellerProduct;
