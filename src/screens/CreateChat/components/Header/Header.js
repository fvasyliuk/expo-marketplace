import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Touchable, Avatar } from '../../../../components';
import { NavigationServices } from '../../../../services';
import s from './styles';
import { compose, hoistStatics } from 'recompose';




function Header({
    viewer,
}) {  
    return ( 
        <View style={s.header}>
            <Touchable 
                hitSlop={8}
                useOpacityAndroid
                style={s.headerBackButton}
                onPress={() => NavigationServices.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={32} />
            </Touchable>
            <Avatar 
                size={54}
                name={viewer.fullName}
                source={viewer.avatar}
            />
            <Text style={s.headerUserName}>
                {viewer.fullName}
            </Text>
        </View>
    )
};

const mapStateToProps = (state) => ({
    viewer: state.viewer.user,
})
const enhancer = compose(
    connect(mapStateToProps),
); 


export default enhancer(Header);