import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileNavigator from './ProfileNavigator';
import BrowseNavigator from './BrowseNavigator';
import InboxNavigator from './InboxNavigator';
import SavedScreen from '../screens/Saved/SavedScreenContainer';
import Empty from '../screens/Empty';
import { Touchable } from '../components';
import CustomTabBar from './components/CustomTabBar';
import screens from './screens';
import { colors } from '../styles';
import s from './styles';

const routes = {
    [screens.BrowseTab]: {
        screen: BrowseNavigator,
        navigationOptions: {
            tabBarIcon: (props) => (
                <Ionicons 
                    name="ios-search"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Browse
                </Text>
            )
        },
    },
    [screens.Saved]: {
        screen: SavedScreen,
        navigationOptions: {
            tabBarIcon: (props) => (
                <Ionicons 
                    name="ios-bookmark"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Saved
                </Text>
            )
        },
    },
    [screens.TabCreateItem]: {
        screen: Empty,
        navigationOptions: {
            tabBarIcon: (props) => (
                // <TouchableOpacity 
                //     //style={s.createNewItem}
                //     onPress={() => {console.log('gggg')}}
                //     hitSlop={{top: 41,}}
                // >
                    <Ionicons 
                        name="ios-add-circle"
                        size={82}
                        color={colors.primary}                        
                    />
                //</TouchableOpacity>                
            ),
            tabBarLabel: <View />
        },
    },
    [screens.InboxTab]: {
        screen: InboxNavigator,
        navigationOptions: {
            tabBarIcon: (props) => (
                <MaterialIcons 
                    name="inbox"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Inbox
                </Text>
            )
        },
    },
    [screens.ProfileTab]: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: (props) => (
                <MaterialCommunityIcons 
                    name="account"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Profile
                </Text>
            )
        },
    },
    // overlay: {
    //     screen: Empty,// Where 'CustomTab' is the name of my registered tab button
    //     height: 62,
    //     width: 62,
    //     position: {
    //       top:62,
    //       left: 31
    //     }
    // }
}

export default createBottomTabNavigator(routes, {
    initialRouteName: screens.BrowseTab,
    tabBarComponent: CustomTabBar,
    tabBarOptions: {
        style: {height: 70, paddingVertical: 10},        
    },
});

