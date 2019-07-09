import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Touchable } from '../../../../components';
import s from './styles';
import { NavigationServices } from '../../../../services';

function OwnerInfo({
    owner,
    handleNavigate,
}) {
    return (
        <View style={s.container}> 
            <Avatar 
                source={owner.avatar}
                name={owner.fullName}
                size={68}
            />
            <View style={s.ownerText}>
                <Text style={s.fullName}>
                    {owner.fullName}
                </Text>
                <Touchable 
                    style={s.otherPostsButton} 
                    useOpacityAndroid 
                    onPress={handleNavigate}
                >
                    <Text style={s.otherPosts} numberOfLines={1}>
                        See other posts from {owner.fullName}
                    </Text>
                </Touchable>
            </View>
        </View>
    )
};

OwnerInfo.navigationOptions = {
    
    headerTransparent: s.header,
    
};

export default OwnerInfo;