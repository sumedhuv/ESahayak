import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const grains = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.background}>
      <View style={styles.centre}>
        <View style={styles.inputView}>
          <MaterialIcons
            name={'search'}
            size={30}
            color="black"
            style={{backgroundColor: '#FFFFFF', marginLeft: 30}}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="what are you looking for?"
            placeholderTextColor="#003f5c"
            onChangeText={search => setSearch(search)}
          />
        </View>
        <View
          style={{
            backgroundColor: '#352F98',
            width: 140,
            height: 50,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              marginLeft: 60,
              fontSize: 18,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            GRAINS
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#9898DE',
          borderRadius: 10,
          width: '95%',
          margin: 10,
          flexDirection: 'row',
        }}>
        <View style={{height: 150, width: 250, marginTop: 10, marginLeft: 10}}>
          <Image
            source={require('../wheat.png')}
            style={{
              width: null,
              resizeMode: 'contain',
              height: 130,
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>
            WHEAT
          </Text>
          <Text>Remaining Stock: 10 kg</Text>
          <Text>Sold Today: 20 kg</Text>
          <Text>Profit: 1400 rs</Text>
        </View>
      </View>
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

    marginTop: 20,
    marginLeft: 10,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 30,
    width: '80%',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    width: '80%',
  },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#7D7AFF',
  },
});

export default grains;
