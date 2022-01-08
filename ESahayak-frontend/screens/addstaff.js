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
const Addstaff = ({navigation}) => {
  const [staff_name, setStaffName] = useState('');
  const [staff_email, setStaffEmail] = useState('');
  const [staff_phone, setStaffPhone] = useState('');
  const [staff_last_salary_paid, setStaffLastSalary] = useState('');
  const [staff_salary, setStaffSalary] = useState('');
  const [staff_image, setStaffImage] = useState('');
  const [staff_upi, setStaffUpi] = useState('');

  // const handleChangeImage = (e) => {
  //   console.log(e.target.files[0]);
  //   setstaff_image(e.target.files[0]);
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    // if (!agree) {
    // console.log("Please Agree terms & conditons");
    // } else {
    const fd = new FormData();
    // fd.append('staff_image', staff_image);
    fd.append('staff_image',{
      name: staff_image.fileName,
      type: staff_image.type,
      uri: 
      //Platform.OS === 'ios' ? photo.uri.replace('file://', '') :
      staff_image.uri
   
      });
    fd.append('staff_name', staff_name);
    // fd.append('staff_email', staff_email);
    fd.append('staff_phone', staff_phone);
    fd.append('staff_salary', staff_salary);
    fd.append('staff_last_salary_paid', staff_last_salary_paid);
    fd.append('staff_upi', staff_upi);

    console.log(staff_image);
    console.log('data', fd);
    let id = await AsyncStorage.getItem('id');
    console.log(id);

    let token = await AsyncStorage.getItem('token');
    console.log(token);
    await axios
      .post(`/staff/${id}/addstaff`, fd, {
        headers: {
          Accept:'application/json',
          'Content-type':'multipart/form-data',
          'x-auth-token': token,
        },
      })
      .then(res => {
        console.log(res);
        navigation.navigate('Staff')
        //   window.location.href = "http://localhost:3000/owner/staff";
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response.assets[0].uri);
      if (response) {
        setStaffImage(response.assets[0]);
        console.log(staff_image);
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
            ADD STAFF DETAILS
          </Text>
          <View>
            {staff_image ? (
              <View style={styles.boxSimple}>
                <Image
                  source={{uri: staff_image.uri}}
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
              placeholder="ENTER STAFF NAME"
              placeholderTextColor="#003f5c"
              color="black"
              name="staff_name"
              onChangeText={name => setStaffName(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER SALARY"
              placeholderTextColor="#003f5c"
              color="black"
              name="staff_salary"
              onChangeText={salary => setStaffSalary(salary)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="ENTER LAST SALARY PAID"
              placeholderTextColor="#003f5c"
              color="black"
              name="staff_last_salary_paid"
              onChangeText={salary => setStaffLastSalary(salary)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="PHONE NUMBER"
              placeholderTextColor="#003f5c"
              color="black"
              name="staff_phone"
              onChangeText={no => setStaffPhone(no)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="UPI"
              name="staff_upi"
              placeholderTextColor="#003f5c"
              color="black"
              onChangeText={upi => setStaffUpi(upi)}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
              ADD STAFF
            </Text>
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

export default Addstaff;
