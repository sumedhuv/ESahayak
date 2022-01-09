import React, {useState,useEffect} from 'react';
import axios from '../axios';
import OrderMoreComponent from './orderMoreComponent';
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
const OwnerOrderMore = ({navigation}) => {
    const [pdts, setPdts] = useState([]);

    useEffect(() => {
      axios
        .get(`/buypdts/all`)
        .then((res) => {
          console.log(res.data);
          setPdts(res.data);
        })
        .catch((err) => {
          console.log(err.status);
        });
    }, []);
    // useEffect(() => {
    //   axios
    //     .get(`/buypdts/all`)
    //     .then((res) => {
    //       setuser(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.status);
    //     });
    // }, [user]);
  
  
 
  
console.log('pdts',pdts)
return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.background}>
    <View style={{float:'left',alignItems: 'center'}}>
    {/* <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('AddSellerProduct')}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD</Text>
      </TouchableOpacity> */}
      </View>
      {pdts.length === 0 ? (
        <Text> No Product...</Text>
      ) : (
        pdts.map((x) => (
        <View key={x._id}>
          <OrderMoreComponent
              buy_email={x.buy_email}
              buy_image={x.buy_image}
              buy_name={x.buy_name}
              buy_price={x.buy_price}
              buy_seller_name={x.buy_seller_name}
              buy_upi={x.buy_upi}
              buy_quantity={x.buy_quantity}
              _id={x._id}
              />
         </View> 
        ))
      )}
 
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


  
 

export default OwnerOrderMore;
