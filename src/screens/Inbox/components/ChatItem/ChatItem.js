import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Avatar, Touchable } from '../../../../components';
import T from 'prop-types';
import s from './styles';


function ChatItem({    
    title,    
    userName,
    lastMessage,
    avatar,
    onPress,
    userLastMessage,
}){    
    return(
        <Touchable 
            style={s.container}
            onPress={onPress}           
        >
            <Avatar 
                size={65}
                source={avatar}
                name={userName}
            />
            <View style={s.right} >
                <Text 
                    style={s.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <Text 
                    style={s.name} 
                    numberOfLines={1}
                >
                    {userName}
                </Text>
                <Text 
                    style={s.lastMessage} 
                    numberOfLines={1}
                >
                    <Text style={s.PrefixlastMessage}>{userLastMessage}</Text>
                    {lastMessage}
                </Text>
            </View>
        </Touchable>
    );
}

ChatItem.propTypes = {

};

export default ChatItem;