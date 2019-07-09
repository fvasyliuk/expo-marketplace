import React from 'react';
import T from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  Touchable  from '../Touchable';
import s from './styles';
import { colors } from '../../styles';


function ProductItem({ 
    item, 
    handleLike,
    onPressItem, 
}) {
    
    const uri = item.photos && item.photos[0] 
        ? item.photos[0]  
        : "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <View style={s.wraper}>
            <Touchable 
                style={s.container} 
                onPress={onPressItem}
                containerStyle={s.containerWraper}
            >            
                <Image 
                    source={{uri}} 
                    style={s.image} 
                />            
                <View style={s.bottomContainer}>
                    <Text style={s.title} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <View style={s.bottom}>
                        <Text style={s.price}>{item.price}</Text>
                        <Touchable onPress={handleLike} hitSlop={10}>
                            <Ionicons 
                                name="ios-bookmark"
                                size={24}                              
                                color={item.saved ? colors.primary : colors.borderColor}         
                                        
                            />
                        </Touchable>                    
                    </View>
                </View>            
            </Touchable>
        </View>
    );
};

ProductItem.propTypes = {
    item: T.object,
};



export default ProductItem;