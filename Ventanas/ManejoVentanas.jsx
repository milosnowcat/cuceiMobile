import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ventana1 from './Ventana1';
import ManejoTabs from './ManejoTabs';

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
            options={{headerShown: false}}
            name="Login"
            component={Ventana1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Bienvenido"
            component={ManejoTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
