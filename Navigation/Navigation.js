// Navigation/Navigations.js
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Solution from '../Components/Solution'
import Mensuration from '../Components/Mensuration'
import Contact from '../Components/Contact'



const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator()

function Stack1() {
  return (
<Stack.Navigator initialRouteName="Solution">
        <Stack.Screen name="Solution" component={Solution} />
        <Stack.Screen name="Mensuration" component={Mensuration} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
  )}

  function Drawer1() {
    return (
      <Drawer.Navigator initialRouteName="Contact">
      <Drawer.Screen name="Solution" component={Stack1} />
      <Drawer.Screen name="Contact" component={Mensuration} />
    </Drawer.Navigator>
    )}

function Navigation() {
  return (
    <NavigationContainer>
      

      <Tab.Navigator>
        <Tab.Screen name="Solution" component={Stack1} />
        <Tab.Screen name="Contact" component={Drawer1} />
      </Tab.Navigator>

      

    </NavigationContainer>
  );
}

export default Navigation
