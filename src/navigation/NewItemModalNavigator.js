import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NewItemScreen from '../screens/NewItem/NewItemScreenContainer';
import LocationScreen from '../screens/Location/LocationScreenContainer';
import screens from './screens';

const routes = {
    [screens.NewItemScreen]: NewItemScreen,
    [screens.Location]: LocationScreen,
}

export default createStackNavigator(routes, {
    headerLayoutPreset: 'center',
    initialRouteName: screens.NewItemScreen,
});

