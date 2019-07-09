import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Avatar, Touchable } from '../../../../components';
import T from 'prop-types';
import s from './styles';


function MessageItem({ 
    text,
    time,
    isViewer,
}){    
    return(
        <View style={isViewer ? s.wraperViewer : s.wraperUser}>
            <View 
                style={[
                    s.container, 
                    isViewer 
                        ? s.viewerMessage 
                        : s.userMessage
                ]}
            >
                <Text 
                    style={isViewer 
                        ? s.viewerMessageText 
                        : s.userMessageText
                    }
                >
                    {text}
                </Text>
            </View>
        </View>
    );
}

MessageItem.propTypes = {

};

export default MessageItem;