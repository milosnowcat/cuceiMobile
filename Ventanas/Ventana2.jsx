import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';

export default class Ventana2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'phone',
    };
  }

  render() {
    return (
      <View>
        <Text style={styles[this.state.device].bienvenido} h1>
          Hola
        </Text>
        <Text style={styles[this.state.device].nombre} h3>
          {this.props.route.params.nombre} :D
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tablet: {
    bienvenido: {
      marginTop: 50,
      marginLeft: 480,
      color: 'blue',
    },
    nombre: {
      marginTop: 50,
      marginLeft: 480,
    },
  },
  phone: {
    bienvenido: {
      marginTop: 50,
      marginLeft: 150,
      color: 'blue',
    },
    nombre: {
      marginTop: 50,
      marginLeft: 130,
    },
  },
});
