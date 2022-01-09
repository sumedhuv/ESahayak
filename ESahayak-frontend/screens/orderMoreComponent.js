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
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderMoreComponent = props => {
  const navigation = useNavigation();
  console.log('props', props);
  const [qty, setqty] = useState(0);
  const [price, setprice] = useState(0);
  const handleEdit = async () => {
    if (qty > props.buy_quantity) return alert("Quantity unavailable");
    console.log(props.buy_image);
    const fd_owner = new FormData();
    fd_owner.append("pdt_name", props.buy_name);
    fd_owner.append("pdt_remaining_stock", qty);
    fd_owner.append("pdt_bought_price", props.buy_price);
    fd_owner.append("pdt_current_price", price);
    fd_owner.append("pdt_image", props.buy_image);

    //update owner
    let oid = await AsyncStorage.getItem('id');
    await axios
      .post(`/product/${oid}/addpdt`, fd_owner, {
        headers: {
          "x-auth-token": oid,
        },
      })
      .then((res) => {
        console.log("Owner Updated");
      });

    let seller_id;
    //get seller email
    await axios.post("/buyer/one", { seller_email: props.buy_email }).then((res) => {
      console.log(res.data);
      seller_id = res.data;
    });

    // update seller
    const fd_seller = new FormData();
    fd_seller.append("buy_quantity", props.buy_quantity - qty);

    console.log(fd_seller);
    await axios
      .put(`/buyer/${seller_id}/${props._id}/update`, fd_seller)
      .then((res) => {
        console.log("seller updated");
      });

    // //get owner email
    // let owner_email;
    // await axios.get(`/${oid}`).then((res) => {
    //   console.log(res.data);
    //   owner_email = res.data.owner_email;
    // });

    //send email
    // const fd_email = new FormData();
    // fd_email.append("email1", owner_email);
    // fd_email.append("email2", props.buy_email);
    // fd_email.append("pdt_price", props.buy_price);
    // fd_email.append("pdt_qunatity", qty);
    // fd_email.append("pdt_name", props.buy_name);
    // fd_email.append("pdt_image", props.buy_image);

    // await axios.post(`/sendmail`, fd_email).then((res) => {
    //   // console.log("emailsent");
    //   // history("/owner/home");
    // });
  };




return (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetails', {id: props._id})}>
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#7D7AFF',
        width: '90%',
        // height: '',
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
            {props.buy_image?(<>
          <Image
          source={{uri:`https://stormy-island-55490.herokuapp.com/${props.buy_image}`}}
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
        <View style={{flexDirection: 'row'}}>
      <View style={styles.inputView}>
            <TextInput
              // style={styles.TextInput}
              placeholder="QUANTITY"
              placeholderTextColor="#003f5c"
              color="black"
              name="quantity"
              onChangeText={no => setqty(no)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              // style={styles.TextInput}
              placeholder="PRICE"
              placeholderTextColor="#003f5c"
              color="black"
              name="price"
              onChangeText={no => setprice(no)}
            />
          </View>
          </View>
      </View>
      <View>
        {/* <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 24,
            marginTop: 35,
            fontWeight: 'bold',
          }}>
          {props ? props.buy_name : null}
        </Text> */}
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Product: {props.buy_name}!
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
         Product Price: {props.buy_price}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
         Quantity: {props.buy_quantity}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
        Seller Email: {props.buy_email}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
        Seller Name: {props.buy_seller_name}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 10,

            fontSize: 15,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
        Seller UPI: {props.buy_upi}
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={handleEdit}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ORDER</Text>
        </TouchableOpacity>
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
inputView: {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  width: '50%',
  // height: 40,
  // marginBottom: 20,
  
   marginLeft:10,     
  alignItems: 'center',
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
  marginBottom:10,
  backgroundColor: 'black',
},

});

export default OrderMoreComponent;