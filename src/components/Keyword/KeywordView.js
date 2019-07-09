import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Touchable from '../Touchable';
import s from './styles';
import { colors } from '../../styles';



function KeywordView({
    items,
    onPressItem,
    style,
}) {      
    return (
        <View style={[s.container, style]}>              
            <FlatList 
                data={items} 
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => (
                    <View style={s.separatorContainer}>
                        <View style={s.separator}/>
                    </View>
                )}
                renderItem={({item}) => (
                    <Touchable 
                        style={s.itemContainer}
                        onPress={() => onPressItem(item)}
                    > 
                        <Text style={s.itemTitle}>
                            {item}
                        </Text>
                        <Feather 
                            name="arrow-up-left" 
                            size={20}
                            color={colors.borderColor}
                        />
                    </Touchable>
                )}
            />       
        </View>
    )
};



export default KeywordView;