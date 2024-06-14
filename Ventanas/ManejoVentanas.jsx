import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ventana1 from './Ventana1';
import Ventana2 from './Ventana2';

export default class ManejoVentanas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Ventana1}
            options={{headerShow: false}}
          />
          <Stack.Screen
            name="Bienvenido"
            component={Ventana2}
            options={{headerShow: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
