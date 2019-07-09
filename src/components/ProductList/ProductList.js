import React from 'react';
import T from 'prop-types';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import ProductItem from '../ProductItem/ProductItemContainer';
import s from './styles';

function ProductList({
    items,
    isLoading,
    isLoadingMore,
    fetchItems,
    fetchItemsMore,
    onItemPress,
}) {           
    return (
        <FlatList                     
            refreshing={isLoading}
            onRefresh={fetchItems}
            onEndReached={fetchItemsMore}
            onEndReachedThreshold={0.1}
            numColumns={2}
            data={items} 
            keyExtractor={(item) => item}
            renderItem={({item}) => <ProductItem onPress={onItemPress} itemId={item} />}
            ListFooterComponent={() => (
                isLoadingMore 
                    ? (<View>
                        <ActivityIndicator size="large" />
                    </View>)
                    : null
                
            )}
        />        
    );
};

ProductList.propTypes = {};

export default ProductList;