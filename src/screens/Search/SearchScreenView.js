import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProductList, SearchInput } from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { NavigationServices } from '../../services';


function SearchScreen({
    list,
    isLoading,
    isLoadingMore, 
    fetchSearchItems,
    fetchSearchMoreItems,
    openProduct,
    
}) {
    return (
        <View style={s.container}>
            <ProductList 
                items={list} 
                isLoading={isLoading}
                isLoadingMore={isLoadingMore} 
                fetchItems={fetchSearchItems} 
                fetchItemsMore={fetchSearchMoreItems}
                onItemPress={openProduct}
            />
        </View>
    )
};

SearchScreen.navigationOptions = {
    header: (
        <View style={s.header}>
            <View style={s.headerContainer}>
                <SearchInput />
                <TouchableOpacity onPress={() => {NavigationServices.navigateToFiltersModal()}} style={s.headerRight} >
                    <AntDesign name="filter" size={32} color={colors.primary} />
                </TouchableOpacity>
            </View>            
        </View>
    )    
};

export default SearchScreen;