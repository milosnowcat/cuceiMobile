import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'phone',
      temperatura_actual: 0,
      buscar_ciudad: '',
      ciudad_actual: '',
      clima_actual: require('./assets/img/cloud.webp'),
      viento_velocidad_actual: 0,
      viento_direccion_actual: '',
      precipitacion_actual: 0,
      humedad_actual: 0,
      clima_semana: [
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
        {
          fecha: '',
          temperatura: 0,
          clima: require('./assets/img/cloudy.jpeg'),
        },
      ],
    };
  }

  render() {
    const updateData = res => {
      this.setState({ciudad_actual: res.location.name});
      this.setState({temperatura_actual: res.current.temp_c});
      this.setState({
        clima_actual: {uri: 'http://' + res.current.condition.icon},
      });
      this.setState({viento_velocidad_actual: res.current.wind_kph});
      this.setState({viento_direccion_actual: res.current.wind_dir});
      this.setState({precipitacion_actual: res.current.precip_mm});
      this.setState({humedad_actual: res.current.humidity});

      res.forecast.forecastday.forEach((day, i) => {
        let array = this.state.clima_semana;

        const date = day.date.split('-');
        let dia = date[2];
        let mes = date[1];

        array[i].fecha = dia + '/' + mes;
        array[i].clima = {uri: 'http://' + day.day.condition.icon};
        array[i].temperatura = day.day.avgtemp_c;

        this.setState({clima_semana: array});
      });
    };

    const buscar = async () => {
      const url =
        'http://api.weatherapi.com/v1/forecast.json?key=' +
        this.state.api +
        '&q=' +
        this.state.buscar_ciudad +
        '&days=7&aqi=no&alerts=no';

      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          updateData(JSON.parse(xhttp.responseText));
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    };

    return (
      <View style={styles[this.state.device].fondo}>
        <View style={styles[this.state.device].buscar}>
          <TextInput
            style={styles[this.state.device].buscar_input}
            onChangeText={input => this.setState({buscar_ciudad: input})}
          />
          <TouchableOpacity onPress={buscar}>
            <Image
              source={require('./assets/img/search.png')}
              style={styles[this.state.device].buscar_image}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles[this.state.device].texto_temp}>
          {' '}
          {this.state.temperatura_actual}°{' '}
        </Text>
        <Text style={styles[this.state.device].texto_lugar}>
          {' '}
          {this.state.ciudad_actual}{' '}
        </Text>
        <Image
          style={styles[this.state.device].imagen}
          source={this.state.clima_actual}
        />
        <View style={styles[this.state.device].contenedor}>
          <Image
            style={styles[this.state.device].contenedor_imagen}
            source={require('./assets/img/wind.png')}
          />
          <Text style={styles[this.state.device].contenedor_texto}>
            {'  '}
            {this.state.viento_velocidad_actual}{' '}
            {this.state.viento_direccion_actual}{' '}
          </Text>
        </View>
        <View style={styles[this.state.device].contenedor2}>
          <Image
            style={styles[this.state.device].contenedor_imagen}
            source={require('./assets/img/rain.webp')}
          />
          <Text style={styles[this.state.device].contenedor_texto}>
            {'   '} {this.state.precipitacion_actual}%{' '}
          </Text>
        </View>
        <View style={styles[this.state.device].contenedor3}>
          <Image
            style={styles[this.state.device].contenedor_imagen}
            source={require('./assets/img/humidity.png')}
          />
          <Text style={styles[this.state.device].contenedor_texto}>
            {'   '} {this.state.humedad_actual}%{' '}
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View>
            <View style={styles[this.state.device].scroll_contenedor1}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[0].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[0].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[0].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor2}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[1].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[1].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[1].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor3}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[2].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[2].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[2].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor4}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[3].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[3].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[3].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor5}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[4].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[4].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[4].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor6}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[5].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[5].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[5].temperatura}°
              </Text>
            </View>
            <View style={styles[this.state.device].scroll_contenedor7}>
              <Image
                style={styles[this.state.device].scroll_contenedor_imagen}
                source={this.state.clima_semana[6].clima}
              />
              <Text style={styles[this.state.device].scroll_contenedor_fecha}>
                {this.state.clima_semana[6].fecha}
              </Text>
              <Text style={styles[this.state.device].scroll_contenedor_temp}>
                {this.state.clima_semana[6].temperatura}°
              </Text>
            </View>
          </View>
        </ScrollView>
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
      marginLeft: 360,
      marginTop: 20,
      borderRadius: 20,
    },
    contenedor2: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 500,
      marginTop: -120,
      borderRadius: 20,
    },
    contenedor3: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 640,
      marginTop: -120,
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
    scroll_contenedor_imagen: {
      width: 100,
      height: 100,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 20,
    },
    scroll_contenedor_fecha: {
      fontSize: 25,
      color: 'white',
      marginLeft: 20,
      marginTop: -80,
    },
    scroll_contenedor_temp: {
      fontSize: 25,
      color: 'white',
      marginLeft: 35,
    },
    scroll_contenedor1: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 20,
    },
    scroll_contenedor2: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 200,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor3: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 380,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor4: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 560,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor5: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 740,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor6: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 920,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor7: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 1100,
      marginTop: -120,
      borderRadius: 20,
    },
    buscar: {
      width: 300,
      height: 60,
      marginLeft: 400,
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: '#C9C7C9',
    },
    buscar_input: {
      width: 220,
      height: 45,
      marginLeft: 5,
      marginTop: 5,
      borderRadius: 20,
    },
    buscar_image: {
      width: 30,
      height: 30,
      marginTop: -35,
      marginLeft: 250,
    },
  },
  phone: {
    fondo: {
      height: 759,
      width: 393,
      backgroundColor: 'grey',
      borderWidth: 2,
    },
    texto_temp: {
      fontSize: 40,
      color: 'white',
      marginLeft: 165,
      marginTop: 10,
    },
    texto_lugar: {
      fontSize: 40,
      color: 'white',
      marginLeft: 130,
    },
    imagen: {
      width: 200,
      height: 200,
      marginLeft: 100,
      marginTop: 30,
    },
    contenedor: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 5,
      marginTop: 20,
      borderRadius: 20,
    },
    contenedor2: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 135,
      marginTop: -120,
      borderRadius: 20,
    },
    contenedor3: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 265,
      marginTop: -120,
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
    scroll_contenedor_imagen: {
      width: 100,
      height: 100,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 20,
    },
    scroll_contenedor_fecha: {
      fontSize: 25,
      color: 'white',
      marginLeft: 20,
      marginTop: -80,
    },
    scroll_contenedor_temp: {
      fontSize: 25,
      color: 'white',
      marginLeft: 35,
    },
    scroll_contenedor1: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 10,
      marginTop: 30,
      borderRadius: 20,
    },
    scroll_contenedor2: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 140,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor3: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 270,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor4: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 400,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor5: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 530,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor6: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 660,
      marginTop: -120,
      borderRadius: 20,
    },
    scroll_contenedor7: {
      backgroundColor: '#C9C7C9',
      borderWidth: 0,
      width: 120,
      height: 120,
      marginLeft: 790,
      marginTop: -120,
      borderRadius: 20,
    },
    buscar: {
      width: 300,
      height: 60,
      marginLeft: 50,
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: '#C9C7C9',
    },
    buscar_input: {
      width: 220,
      height: 45,
      marginLeft: 5,
      marginTop: 5,
      borderRadius: 20,
    },
    buscar_image: {
      width: 30,
      height: 30,
      marginTop: -35,
      marginLeft: 250,
    },
  },
});
