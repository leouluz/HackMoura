import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from "../assets/rockete.jpeg"

export default function Login({navigation}) {
  function handlerLogin() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <TextInput type="" style={styles.input} placeholder="Digite seu RA" />
      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
      width:150,
      height:160
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#808',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#800080',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
