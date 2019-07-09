import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { compose, withHandlers } from 'recompose';
import s from './styles';
import { colors } from '../../styles';

function Section({
    text,
    onPress,
}) {
    return(    
        <View style={s.container}>            
            <TouchableOpacity 
                style={s.button}
                onPress={onPress}
            >            
                <Text style={s.text}>{text}</Text>                
                <Ionicons 
                    name='ios-arrow-forward' 
                    size={32} 
                    color={colors.newItemScreen.borderColor} 
                />
            </TouchableOpacity>   
        </View>    
    )
}

const enhancer = compose(
    withHandlers({
       
    }),
);

export default enhancer(Section);