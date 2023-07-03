import React,{Component} from 'react';
import {Text,View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import TabNav from './TabNavigator';
import StackNav from './stackNav';
const Drawer = createDrawerNavigator();
export default class DrawerNav extends Component{
    render(){
        return(
           <Drawer.Navigator useLegacyImplementation initialRouteName='Home'>
           <Drawer.Screen name='Profile' component={Profile}/>
           <Drawer.Screen name='Home' component={StackNav}/>
           </Drawer.Navigator>
        )
    }
} 