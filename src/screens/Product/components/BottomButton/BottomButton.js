import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import s from './styles';
import { Touchable } from '../../../../components';
import { colors } from '../../../../styles';

function BottomButton({
    onCall,
    onMessage,
}) {
    return (
        <View style={s.container}>
            <Touchable 
                style={[s.call, s.contentAlign]}
                containerStyle={s.call}
                onPress={onCall}
            >
                <Ionicons 
                    name="ios-call" 
                    size={26} 
                    color={colors.white}
                />
                <Text style={s.text}>
                    Call
                </Text>
            </Touchable>
            <Touchable
                onPress={onMessage}
                style={[s.message, s.contentAlign]}
                containerStyle={s.message}
            >
                <MaterialIcons
                    name="chat-bubble" 
                    color={colors.white}
                    size={26}
                />
                <Text style={s.text}>
                    Message
                </Text>
            </Touchable>
        </View>
    )
};



export default BottomButton;