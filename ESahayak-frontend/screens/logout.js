import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
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
const logout = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
    backgroundColor: '#7D7AFF',
  },
});

export default logout;
