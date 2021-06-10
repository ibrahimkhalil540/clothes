import  React, {Component} from 'react';
import {  View, Text,TouchableOpacity,Image ,LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Add} from './redux/reducer'

import Items from './screen/item'
import Store from './screen/store'
import Basket from './screen/basket'
const Stack = createStackNavigator();



LogBox.ignoreAllLogs
console.disableYellowBox = true;


export default class App extends Component {
  render (){
     return(
       <Provider store ={createStore(Add)}>
      <NavigationContainer >
         <Stack.Navigator initialRouteName={"store"}  >
         <Stack.Screen name="item" component={Items} options = {
                { headerShown : false  }
              }
                />
         <Stack.Screen name="store" component={Store}  options = {
                { headerShown : false  }
              }/>
                 <Stack.Screen name="basket" component={Basket} options = {
                { headerShown : false  }
              }
               />
        </Stack.Navigator>
        </NavigationContainer>
        </Provider>
     )
  }
}