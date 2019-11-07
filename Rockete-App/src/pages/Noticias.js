import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImgNoticia from '../assets/noticia.jpg';
import Fog from '../assets/rocket.png'

export default function Login({navigation}) {
  function handlerLogin() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tela de noticias</Text>
      <Image style={styles.imagemNoticia} source={ImgNoticia}></Image>
      <Text style={styles.textoNoticia}>A Universidade de Fortaleza, por meio do Escritório de Gestão, Empreendedorismo e Sustentabilidade (EGES) e em parceria com o jornal Diário do Nordeste, realiza a cerimônia de entrega do Prêmio Você Empreendedor nesta quarta-feira, dia 13 de novembro, às 19 horas, no Teatro Celina Queiroz.</Text>
      <Text style={styles.texto}></Text>
      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonText}>Viage nesse Mundo</Text>
        <Image style={styles.fog} source={Fog}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    color: '#02193e',
  },
  imagemNoticia:{
      height: 340,
      width: 320,
  },
  textoNoticia:{
    marginTop:10,
    fontSize:18
  },
  fog:{
      width:25,
      height:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#800080',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
