import React, {useState, useEffect} from 'react';
import axios from '../axios';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaffComponent from './staffComponent';
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

const Staff = ({navigation}) => {
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
      const results = await axios.get(`/staff/${id}/allstaff`);
      //.then((res) => {
      //  console.log(res.data);
      // })
      //.catch((err) => {
      // console.log(err);
      // });;
      setstaff(results.data);
    }
    getResults();
  }, []);

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.background}>
        <View style={{float: 'left', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Addstaff')}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>ADD</Text>
          </TouchableOpacity>
        </View>
        {staff.length === 0 ? (
          <Text>You Have No staff...</Text>
        ) : (
          staff.map(x => (
            <View key={x._id}>
              <StaffComponent
                staff_name={x.staff_name}
                staff_phone={x.staff_phone}
                staff_salary={x.staff_salary}
                staff_last_salary_paid={x.staff_last_salary_paid}
                staff_upi={x.staff_upi}
                staff_image={x.staff_image}
                staff_joining_date={x.staff_joining_date}
                _id={x._id}
                setstaff={setstaff}
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

export default Staff;
