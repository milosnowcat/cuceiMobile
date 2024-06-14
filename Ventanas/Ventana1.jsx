import React, {Component} from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Input, Icon, Button} from '@rneui/themed';

export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'phone',
      codigo: '',
      nip: '',
    };
  }

  render() {
    const navigation = this.props.navigation;
    const autenticacion = () => {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (xhttp.responseText == 0) {
            datos = xhttp.responseText.split(',');
            navigation.navigate('Bienvenido', {nombre: datos[2]});
          } else {
            Alert.alert('Error', 'Datos Erroneos', [{text: 'Ok'}]);
          }
        }
      };
      xhttp.open(
        'GET',
        this.state.url +
          '?codigo=' +
          this.state.codigo +
          '&nip=' +
          this.state.nip,
        true,
      );
      xhttp.send();
    };

    return (
      <View>
        <Image
          style={styles[this.state.device].logo}
          source={require('./assets/img/udg.png')}
        />
        <View style={styles[this.state.device].form}>
          <Input
            style={styles[this.state.device].form_input}
            placeholder="Codigo"
            onChangeText={input => this.setState({codigo: input})}
            leftIcon={{
              type: 'font-awesome',
              name: 'user',
              size: 34,
              color: 'red',
            }}
          />
          <Input
            placeholder="Nip"
            secureTextEntry={true}
            onChangeText={input => this.setState({nip: input})}
            leftIcon={{
              type: 'font-awesome',
              name: 'lock',
              size: 34,
              color: 'red',
            }}
          />
          <Button
            buttonStyle={styles[this.state.device].form_button}
            radius={'sm'}
            type="solid"
            color="red"
            onPress={autenticacion}>
            Iniciar sesión
            <Icon type="font-awesome" name="right-to-bracket" color="white" />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tablet: {
    logo: {
      width: 150,
      height: 205,
      marginTop: 20,
      marginLeft: 470,
    },
    form: {
      width: 600,
      height: 300,
      borderWidth: 2,
      borderColor: 'blue',
      borderRadius: 20,
      marginLeft: 250,
      marginTop: 10,
    },
    form_button: {
      marginTop: 20,
      width: 200,
      marginLeft: 200,
    },
    form_input: {
      marginTop: 20,
    },
  },
  phone: {
    logo: {
      width: 150,
      height: 205,
      marginTop: 20,
      marginLeft: 120,
    },
    form: {
      width: 300,
      height: 400,
      borderWidth: 2,
      borderColor: 'blue',
      borderRadius: 20,
      marginLeft: 50,
      marginTop: 10,
    },
    form_button: {
      marginTop: 100,
      width: 200,
      marginLeft: 50,
    },
    form_input: {
      marginTop: 20,
    },
  },
});
