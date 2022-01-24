// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const Product = ({navigation}) => {
//   const [search, setSearch] = useState('');

//   return (
//     <View style={styles.background}>
//        <View style={{float:'left',alignItems: 'center'}}>
//         <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('AddSellerProduct')}>
//             <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD PRODUCT</Text>
//           </TouchableOpacity>
//           </View>
//       <View style={styles.centre}>
//         <View style={styles.inputView}>
//           <MaterialIcons
//             name={'search'}
//             size={30}
//             color="black"
//             style={{backgroundColor: '#FFFFFF', marginLeft: 20}}
//           />
//           <TextInput
//             style={styles.TextInput}
//             placeholder="what are you looking for?"
//             placeholderTextColor="#003f5c"
//             color='black'
//             onChangeText={search => setSearch(search)}
//           />
//         </View>
//         <TouchableOpacity>
//           <View
//             style={{
//               backgroundColor: '#352F98',
//               width: 140,
//               height: 50,
//               borderRadius: 10,
//               marginLeft: -180,
//             }}>
//             <Text
//               style={{
//                 color: '#FFFFFF',
//                 marginLeft: 40,
//                 fontSize: 18,
//                 marginTop: 10,
//                 fontWeight: 'bold',
//               }}>
//               GRAINS
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       <View
//         style={{
//           backgroundColor: '#9898DE',
//           borderRadius: 10,
//           width: '95%',
//           margin: 10,
//           flexDirection: 'row',
//         }}>
//         <View
//           style={{
//             height: 150,
//             width: 250,
//             marginTop: 10,
//             marginLeft: -30,
//           }}>
//           <Image
//             source={require('../wheat.png')}
//             style={{
//               width: null,
//               resizeMode: 'contain',
//               height: 130,
//               borderRadius: 10,
//             }}
//           />
//         </View>
//         <View style={{marginLeft: -20}}>
//           <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>
//             WHEAT
//           </Text>
//           <Text>Remaining Stock: 10 kg</Text>
//           <Text>Sold Today: 20 kg</Text>
//           <Text>Profit: 1400 rs</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: '#EEF0FF',
//     height: '100%',
//   },
//   cornerbg: {
//     width: 25,
//     height: 25,
//     marginLeft: 0,
//   },
//   centre: {
//     alignItems: 'center',

//     marginTop: 20,
//     marginLeft: 10,
//   },
//   inputView: {
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     borderRadius: 30,
//     width: '100%',
//     height: 50,
//     marginBottom: 20,
//     alignItems: 'center',
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 10,
//     width: '80%',
//   },
//   loginBtn: {
//     width: '70%',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     backgroundColor: '#7D7AFF',
//   },
// });

// export default Product;
import React, {useState, useEffect} from 'react';
import axios from '../axios';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductComponent from './productComponent';
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

const Product = ({navigation}) => {
  const [staff, setstaff] = useState([]);
  let allStaff = [];
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
      let id = await AsyncStorage.getItem('id');
      console.log(id, staff);
      const results = await axios.get(`/buyer/${id}/all`);
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });;
      setstaff(results.data);
    }
    getResults();
  }, [staff]);

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
  console.log('staff', staff);
  return (
    <View style={styles.background}>
      <View style={{float: 'left', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('AddSellerProduct')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD</Text>
        </TouchableOpacity>
      </View>
      {staff.length === 0 ? (
        <Text>You Have No Product...</Text>
      ) : (
        staff.map(x => (
          <View key={x._id}>
            <ProductComponent
              buy_name={x.buy_name}
              buy_price={x.buy_price}
              buy_quantity={x.buy_quantity}
              buy_image={x.buy_image}
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

export default Product;
