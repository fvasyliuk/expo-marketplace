import React from 'react';
import T from 'prop-types';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import ChatItem from '../ChatItem/ChatItem';
import s from './styles';
import { NavigationServices } from '../../../../services';


function ChatList({
    items,
    isLoading,
    fetchItems,    
}) {     
    return (
        <FlatList 
            style={s.container}            
            refreshing={isLoading}
            onRefresh={fetchItems}
            data={items} 
            keyExtractor={(item) => item.chatId}
            ItemSeparatorComponent={() => (
                <View style={s.separatorContainer}>
                    <View style={s.separator}/>
                </View>
            )}
            renderItem={({item}) => (
                <ChatItem             
                    userName={item.userName}
                    title={item.title} 
                    lastMessage={item.lastMessage}
                    userLastMessage={item.userLastMessage}
                    avatar={item.avatar} 
                    onPress={() => NavigationServices.navigateToChat(item.chatId)}                   
                />
            )}
        />        
    );
};

ChatList.propTypes = {};

export default ChatList;