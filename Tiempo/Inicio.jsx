import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.tablet.fondo}>
        <Text style={styles.tablet.texto_temp}> 20° </Text>
        <Text style={styles.tablet.texto_lugar}> Mexico </Text>
        <Image
          style={styles.tablet.imagen}
          source={require('./assets/img/cloud.webp')}
        />
        <View style={styles.tablet.contenedor}>
          <Image
            style={styles.tablet.contenedor_imagen}
            source={require('./assets/img/wind.png')}
          />
          <Text style={styles.tablet.contenedor_texto}> 20 WS </Text>
        </View>
        <View style={styles.tablet.contenedor2}>
          <Image
            style={styles.tablet.contenedor_imagen}
            source={require('./assets/img/rain.webp')}
          />
          <Text style={styles.tablet.contenedor_texto}> 30% </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tablet: {
    fondo: {
      height: 614,
      width: 1097,
      backgroundColor: 'grey',
      borderWidth: 2,
    },
    texto_temp: {
      fontSize: 40,
      color: 'white',
      marginLeft: 370,
      marginTop: 50,
    },
    texto_lugar: {
      fontSize: 40,
      color: 'white',
      marginLeft: 330,
    },
    imagen: {
      width: 200,
      height: 200,
      marginLeft: 620,
      marginTop: -150,
    },
    contenedor: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 430,
      marginTop: 20,
      borderRadius: 20,
    },
    contenedor_imagen: {
      width: 90,
      height: 90,
      marginLeft: 15,
    },
    contenedor_texto: {
      fontSize: 15,
      color: 'white',
      marginLeft: 25,
    },
    contenedor2: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 570,
      marginTop: -120,
      borderRadius: 20,
    },
  },
});
