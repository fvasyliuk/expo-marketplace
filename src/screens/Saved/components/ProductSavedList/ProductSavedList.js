import React from 'react';
import T from 'prop-types';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { ProductItem } from '../../../../components';
import s from './styles';

function ProductList({
    items,
    isLoading,
    fetchItems,
    onItemPress,
}) {    
    return (
        <FlatList             
            refreshing={isLoading}
            onRefresh={fetchItems}            
            onEndReachedThreshold={0.1}
            numColumns={2}
            data={items} 
            keyExtractor={(item) => item}
            renderItem={({item}) => <ProductItem onPress={onItemPress} itemId={item} />}            
        />        
    );
};

ProductList.propTypes = {};

export default ProductList;