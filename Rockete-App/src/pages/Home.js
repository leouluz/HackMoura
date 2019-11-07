import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Perfil from '../assets/perfil.jpg' 

export default function Login() {

  return (
    <View style={styles.container}>
    <Image style={styles.perfil} source={Perfil}></Image>
      <Text style={styles.logo}>Bem-Vindo Leonardo</Text>
      <Text style={styles.texto}>Eventos recentes:</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>HackMoura: 04/11 Á 06/11 - HackMoura</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}> 07/11 CalixtoLand - Tudo sobre dev Web</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:18,
        marginBottom:15
    },
    perfil:{
    height:60,
    width:60,
    },
  logo: {
    fontSize: 30,
    color: '#02193e',
    marginBottom:50
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#800080',
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
