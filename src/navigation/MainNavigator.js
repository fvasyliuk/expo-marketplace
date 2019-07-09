import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import screens from './screens';
import AppTabNavigation from './AppTabNavigation';

const routes = {
    [screens.Auth]: AuthNavigator,
    [screens.MainApp]: AppTabNavigation,
}

export default createSwitchNavigator(routes, {
});

