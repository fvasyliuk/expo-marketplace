import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {  } from '../../components';
import s from './styles';
import { colors } from '../../styles';


function Location({
    navigation,
    value,
    onChange,
    handleSend,
}) {
    return (
        <View style={s.container}>
            <View style={s.inputContainer}>
                <TextInput 
                    style={s.input}
                    value={value}
                    onChangeText={onChange}
                    placeholder="location"
                />
                <TouchableOpacity 
                    onPress={handleSend}
                >
                    <Ionicons 
                        name="ios-arrow-forward"
                        size={32}
                        style={s.inputIcon}
                    />
                </TouchableOpacity>                
            </View>
        </View>
    )
};

Location.navigationOptions = {
    title: 'Location',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
};

export default Location;