import React from 'react';
import T from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { compose, withHandlers } from 'recompose';
import s from './styles';
import { colors } from '../../styles';

function Location({
    onPress,
    errorBorder,
}) {
    return(    
        <View style={[s.container, errorBorder]}>            
            <TouchableOpacity 
                style={s.button}
                onPress={onPress}
            >
                <View style={s.left}>
                    <EvilIcons name='location' size={32} color={colors.primary} />
                    <Text style={s.locationText}>Location</Text>
                </View>
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

export default enhancer(Location);