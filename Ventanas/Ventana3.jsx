import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class Ventana3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "phone"
    };
  }

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles[this.state.device].map}
        region={{
          latitude: 20.655001649416853,
          longitude: -103.32545828466182,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    );
  }
}

const styles = StyleSheet.create({
  tablet: {
    map: {height: 400, width: 400, marginLeft: 350, marginTop: 50},
  },
  phone: {
    map: {height: 300, width: 300, marginLeft: 50, marginTop: 50},
  },
});
