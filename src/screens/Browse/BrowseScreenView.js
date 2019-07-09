import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ProductList, Keyword } from '../../components';
import s from './styles';
import Header from './components/Header/Header';


function BrowseScreen({
    keywordsItems,
    onPressItemKeywords,
    list,
    isLoading,
    isLoadingMore, 
    fetchItems,
    fetchItemsMore,
    openProduct,   
    isFocus, 
    values,
}) {
    if (isLoading) {
        return (
            <ActivityIndicator size="large" />                
        );
    } 

    if (!list.length) {
        return (
            <View style={s.container}>
                <Text>Empty list</Text>
                {isFocus.focus 
                    ? <Keyword 
                        style={s.searchContainer} 
                        items={keywordsItems}
                        onPressItem={onPressItemKeywords}
                    />
                    : null
                } 
            </View>
        );
    }
    return (
        <View style={s.container}>                     
            <ProductList 
                items={list} 
                isLoading={isLoading}
                isLoadingMore={isLoadingMore} 
                fetchItems={fetchItems} 
                fetchItemsMore={fetchItemsMore}
                onItemPress={openProduct}
            /> 
            {isFocus.focus
                ? <Keyword 
                    style={s.searchContainer}
                    items={keywordsItems.filter(it => it.includes(values.keywords))}
                    onPressItem={onPressItemKeywords}
                />
                : null
            }           
        </View>
    )
};

BrowseScreen.navigationOptions = ({ navigation }) => {

    if ( navigation.state.params ) {
        const filterOnPress = navigation.state.params.handleNavigateToFilters;
        const handleChange = navigation.state.params.handleChange;
        const value = navigation.state.params.values.keywords;
        const onSearch = navigation.state.params.onSearch;
        const setIsFocus = navigation.state.params.setIsFocus;
        const isFocus = navigation.state.params.isFocus;
        const setIsFocusObj = navigation.state.params.setIsFocusObj;
        const setIsHeaderInput = navigation.state.params.setIsHeaderInput;

        return {
            header: (
                <Header
                    setIsHeaderInput={setIsHeaderInput}
                    setIsFocusObj={setIsFocusObj}
                    isFocus={isFocus}
                    filterOnPress={filterOnPress}
                    handleChange={handleChange}
                    value={value}
                    onSearch={onSearch}
                    setIsFocus={setIsFocus}
                />                
            )
        }; 
    }
              
};

export default BrowseScreen;