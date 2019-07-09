import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {  SearchInput } from '../../../../components';
import s from './styles';
import { colors } from '../../../../styles';
import { compose, withState, hoistStatics, withProps, withHandlers, lifecycle } from 'recompose';




function Header({
    setIsFocus,
    isFocusSearch,
    setIsFocusSearch,
    filterOnPress,
    handleChange,
    value,
    handleSearch,
    refSearch,
    handleCancel,
    setIsHeaderInput,
}) {  
    return ( 
        <View style={s.header}>
            <View style={s.headerContainer}>
                <SearchInput 
                    handleCancel={handleCancel}
                    setIsHeaderInput={setIsHeaderInput}
                    value={value}
                    handleChange={handleChange}
                    onSearch={handleSearch}
                    handleFocusSearch={(val) => {
                        setIsFocusSearch(val);
                        setIsFocus(val);
                    }}    
                    refSearch={refSearch}                    
                />
                {
                    isFocusSearch 
                        ? <TouchableOpacity 
                            onPress={handleCancel} 
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
    withHandlers({
        handleCancel: (props) => () => {
            props.setIsFocusSearch(false);
            props.setIsFocus(false);
            props.refSearch.current.blur();
        },
        handleSearch: (props) => () => {
            props.setIsFocusSearch(false);
            props.setIsFocus(false);
            props.onSearch();
            props.refSearch.current.blur();
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.setIsFocusObj({headerCancel: this.props.handleCancel})
        } 
    },)
); 


export default hoistStatics(enhancer)(Header);