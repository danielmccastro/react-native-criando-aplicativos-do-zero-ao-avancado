import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#00dae4',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Inicio',
        }}
      />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
