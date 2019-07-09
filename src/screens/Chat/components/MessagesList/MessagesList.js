import React from 'react';
import T from 'prop-types';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import MessageItem from '../MessageItem/MessageItem';
import s from './styles';


function MessagesList({
    items,
    isLoading,
    fetchItems,
    viewer,
}) { 
    return (        
         <View style={s.container}>
            <FlatList 
                inverted                           
                refreshing={isLoading}
                onRefresh={fetchItems}
                data={items} 
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (                                       
                    <MessageItem             
                        text={item.text}
                        time={"11.10"}
                        isViewer={
                            viewer.id === item.ownerId
                                ? true
                                : false
                        }
                    />                    
                )}
            />  
         </View>      
    );
};

MessagesList.propTypes = {};

export default MessagesList;