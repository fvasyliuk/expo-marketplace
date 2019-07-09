import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { compose, withHandlers } from 'recompose';
import s from './styles';
import { colors } from '../../../../styles';

function Location({
    onPress,
}) {
    return(                     
        <TouchableOpacity 
            style={s.button}
            onPress={onPress}
        >
            <View style={s.box}>
                <AntDesign name='plus' size={32} color={colors.borderColor} />
            </View>
        </TouchableOpacity>      
    )
}

const enhancer = compose(
    withHandlers({
       
    }),
);

export default enhancer(Location);