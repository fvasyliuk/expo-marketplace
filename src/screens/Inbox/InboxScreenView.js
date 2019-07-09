import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { ChatList, EmptyView } from './components';
import Api from '../../api';




function Inbox({     
    createChatItems,
    fetchChats,
    isLoading, 
    isEmptyView,
}){ 
    if (isEmptyView) {
        return <EmptyView />
    }
    const items = createChatItems();    
    if (!items) {
        return <ActivityIndicator size="large" />
    }

    return(
        <View style={s.container}>            
            <ChatList 
                items={items}
                isLoading={isLoading}
                fetchItems={fetchChats}
            />
        </View>
    );
}


Inbox.navigationOptions = {
    title: "Inbox",
    headerTitleStyle: s.headerTitle,
    headerStyle: s.header,
};

Inbox.propTypes = {

};

export default Inbox;