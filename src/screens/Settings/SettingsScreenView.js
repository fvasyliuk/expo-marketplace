import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import s from './styles';
import { Section } from '../../components';
import { colors } from '../../styles';

function SettingsScreen({
    handleLogout,
}) {
    return (
        <View style={s.container}> 
            <Text style={s.textVer}>
                Apico Marketplace App Ver. 1.1.1
            </Text>
            <Section onPress={()=> {}} text='Email' /> 
            <Section onPress={()=> {}} text='Password' />
            <Section onPress={()=> {}} text='Notifications' />  
            <Section onPress={()=> {}} text='Privacy Policy' />
            <Section onPress={()=> {}} text='Terms & Conditions' />       
            <View style={s.logoutContainer}>
                <TouchableOpacity style={s.logoutButton} onPress={handleLogout}>
                    <SimpleLineIcons name='logout' size={32} color={colors.primary} />
                    <Text style={s.logoutText}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

SettingsScreen.navigationOptions = {
    title: 'Settings',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
};

export default SettingsScreen;