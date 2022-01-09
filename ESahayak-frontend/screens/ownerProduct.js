
import React,{useState,useEffect} from 'react';
import axios from '../axios';
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import OwnerProductComponent from './ownerProductComponent';
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



const OwnerProduct = ({navigation}) => {

  const [staff, setstaff] = useState([]);
  let allStaff=[];
  // const fetchdata=async()=>{
  //   let id=await AsyncStorage.getItem('id')
  
  //   let response= await 
  //    console.log(response.data)
  //     // if(response.data){
  //     allStaff.push(response.data)
   
  //   setstaff(allStaff)
  
  
  // }
  useEffect(() => {
    async function getResults() {
      let id=await AsyncStorage.getItem('id')
      console.log(id);
       await axios.get(`/product/${id}/all`)
      .then((res) => {
        console.log(res.data);
        setstaff(res.data)
      })
      .catch((err) => {
        console.log(err);
      });;
      
    }
    getResults();
    
   
  },[]);
  
  // console.log(allStaff);
  
  // useEffect(() => {
  //   async function fetchdata(){
  //     let id=await AsyncStorage.getItem('id')
  
  //     await axios
  //       .get(`/staff/${id}/allstaff`)
  //       .then((res) => {
  //         setstaff(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.status);
  //       });
  //   }
  //   fetchdata()
  // }, [staff]);
console.log('staff',staff)
  return (
    <View style={styles.background}>
        <View style={{float:'left',alignItems: 'center'}}>
        {/* <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('AddSellerProduct')}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD</Text>
          </TouchableOpacity> */}
          </View>
          {staff.length === 0 ? (
            <Text>You Have No Product...</Text>
          ) : (
            staff.map((x) => (
            <View key={x._id}>
              <OwnerProductComponent
                   pdt_name={x.pdt_name}
                   pdt_bought_price={x.pdt_bought_price}
                   pdt_current_price={x.pdt_current_price}
                   pdt_remaining_stock={x.pdt_remaining_stock}
                   pdt_image={x.pdt_image}
                   _id={x._id}
                  />
             </View> 
            ))
          )}
     
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

export default OwnerProduct;

