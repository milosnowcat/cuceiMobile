import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ventana2 from './Ventana2';
import Ventana3 from './Ventana3';
import Ventana4 from './Ventana4';
import {Icon} from '@rneui/themed';

export default class ManejoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="V2"
          component={Ventana2}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                type="material-community"
                name="account"
                color={focused ? 'red' : 'blue'}
              />
            ),
          }}
          initialParams={{nombre: this.props.route.params.nombre}}
        />
        <Tab.Screen
          name="V3"
          component={Ventana3}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon type="feather" name="map-pin" color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
        <Tab.Screen
          name="V4"
          component={Ventana4}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon type="antdesign" name="setting" color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
