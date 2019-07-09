import React from 'react';
import { View, Text, ActivityIndicator, TextInput, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Touchable, Avatar } from '../../components';
import { MessagesList, Header } from './components';
import { colors } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationServices } from '../../services';




function ChatScreen({
    user,
    items, 
    viewer,
    fetchMessages,
    isLoading, 
    text,
    setText, 
    sendMessage,  
}){ 
    if (!user) {
        return <ActivityIndicator size="small" />
    }
    
    return(
        <View style={s.container}>
            <Touchable 
                style={s.userContainer}
                onPress={() => NavigationServices.navigateToOwner(user.id)}
            >
                <Avatar 
                    source={user.avatar}
                    name={user.fullName}
                    size={48}
                />
                <Text style={s.userName}>
                    {user.fullName}
                </Text>                
                <Ionicons 
                    style={s.userArrow}
                    name="ios-arrow-forward" 
                    size={32} 
                    color={colors.borderColor}
                />                
            </Touchable>
            <MessagesList 
                items={items}
                viewer={viewer}
                isLoading={isLoading}
                fetchItems={fetchMessages}
            />   
            <KeyboardAvoidingView 
                behavior="padding" 
                keyboardVerticalOffset={80}
            >
                <View style={s.bottomContainer}> 
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        style={s.input}
                        multiline ={true}
                        underlineColorAndroid={colors.transparent}
                        minHeight={46}
                        maxHeight={150}
                        placeholder="Message..." 
                    />
                    <Touchable 
                        style={[s.sendButton, !text && s.disabledButton]}
                        onPress={sendMessage}
                        useOpacityAndroid
                        disabled={!text}
                    >
                        <Ionicons 
                            name="md-send" 
                            size={32} 
                            color={colors.primary}
                        />
                    </Touchable>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}


ChatScreen.navigationOptions =  {
    header: <Header />, 
};

ChatScreen.propTypes = {

};

export default ChatScreen;