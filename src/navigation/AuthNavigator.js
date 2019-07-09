import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Auth/Login/LoginScreenContainer';
import RegisterScreen from '../screens/Auth/Register/RegisterScreenContainer';
import screens from './screens';

const routes = {
    [screens.Login]: LoginScreen,
    [screens.Register]: RegisterScreen,
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
});

