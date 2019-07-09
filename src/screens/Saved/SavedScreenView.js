import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ProductSavedList from './components/ProductSavedList/ProductSavedList';
import s from './styles';
import Header from './components/Header/Header';


function SavedScreenView({
    list,
    isLoading, 
    fetchItems,
    openProduct,   
    isFocus, 
}) {        
    
    if (isLoading) {
        return (
            <ActivityIndicator size="large" />                
        );
    } ;

     
    return (
        <View style={s.container}>            
            <ProductSavedList 
                items={list} 
                isLoading={isLoading}                 
                fetchItems={fetchItems}                 
                onItemPress={openProduct}
            /> 
            {isFocus && (
                <View style={s.searchContainer}>
                    <Text >
                        Absolut
                    </Text>
                </View>
            ) }           
        </View>
    )
};

SavedScreenView.navigationOptions =  {
    title: 'Settings',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
};
// ({ navigation }) => {
//     return {
//         title: 'Settings',
//         headerStyle: s.header,
//         headerTitleStyle: s.headerTitle,
//     }; 
    // if ( navigation.state.params ) {
    //     const filterOnPress = navigation.state.params.handleNavigateToFilters;
    //     const handleChange = navigation.state.params.handleChange;
    //     const value = navigation.state.params.values.keywords;
    //     const onSearch = navigation.state.params.onSearch;
    //     const setIsFocus = navigation.state.params.setIsFocus;
        
    //     return {
    //         header: (
    //             <Header 
    //                 filterOnPress={filterOnPress}
    //                 handleChange={handleChange}
    //                 value={value}
    //                 onSearch={onSearch}
    //                 setIsFocus={setIsFocus}
    //             />                
    //         )
    //     }; 
    // }
              

    

export default SavedScreenView;