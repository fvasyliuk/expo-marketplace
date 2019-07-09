import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {  SearchInput } from '../../../../components';
import s from './styles';
import { colors } from '../../../../styles';
import { compose, withState, hoistStatics, withProps } from 'recompose';




function Header({
    setIsFocus,
    isFocusSearch,
    setIsFocusSearch,
    filterOnPress,
    handleChange,
    value,
    onSearch,
    refSearch
}) {  
    return ( 
        <View style={s.header}>
            <View style={s.headerContainer}>
                <SearchInput 
                    value={value}
                    handleChange={handleChange}
                    onSearch={onSearch}
                    handleFocusSearch={(val) => {
                        setIsFocusSearch(val);
                        setIsFocus(val);
                    }}    
                    refSearch={refSearch}                    
                />
                {
                    isFocusSearch 
                        ? <TouchableOpacity 
                            onPress={() => {refSearch.current.blur()}} 
                            style={s.headerRight} 
                        >
                            <Text style={s.headerRightText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        : <TouchableOpacity 
                            onPress={filterOnPress} 
                            style={s.headerRight} 
                        >
                            <AntDesign name="filter" size={32} color={colors.primary} />
                        </TouchableOpacity>
                    }  
            </View>            
        </View>
    )
};

const enhancer = compose(
    withState('isFocusSearch', 'setIsFocusSearch', false), 
    withProps((props) => ({
        refSearch: React.createRef(),
    })),
); 


export default hoistStatics(enhancer)(Header);