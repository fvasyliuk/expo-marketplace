import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import s from './styles';



function EmptyView({}) {     
    return (
        <View style={s.container}>
            <Text>
                Empty Screen
            </Text>
            <Text style={s.text}>
                No messages for you...
            </Text>
        </View>       
    );
};

EmptyView.propTypes = {};

export default EmptyView;