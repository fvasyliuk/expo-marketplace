import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { Avatar } from '../../../../components';
import { productsSelectors } from '../../../../modules/products';




function Header({
    owner,
}) {  
    console.log({owner})
    return ( 
        <View style={s.headerTitleOwner}>
            <Avatar name={owner.fullName} source={owner.avatar} size={92} />
            <Text style={s.headerTitleOwnerText}>{owner.fullName}</Text>
        </View>
    )
};

const mapStateToProps = (state, {navigation}) => {    
    const ownerId = navigation.state.params.id;    
    return {
        owner: productsSelectors.getUser(state, ownerId),
    };
};

const enhancer = compose(
    connect(mapStateToProps), 
); 


export default hoistStatics(enhancer)(Header);