import React from 'react';
import T from 'prop-types';
import { Image, View, Text } from 'react-native';
import s from './styles';


function Avatar({ source, size, name }) {    
    const char = name.split(' ').reduce((acc, it)=>acc+it[0],'')
    return(   
        <>     
            {source 
                ? <Image                    
                    source={{uri: source}}                      
                    style={[s.avatar, {height: size, width: size, borderRadius: size,}]}
                />
                : <View  style={[s.containerAvatar, {height: size, width: size, borderRadius: size,}]}>
                    <Text>
                        {char}
                    </Text>                    
                </View>
            }
        </>
    );
}

Avatar.propTypes = {

};

export default Avatar;