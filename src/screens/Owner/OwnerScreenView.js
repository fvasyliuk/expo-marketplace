import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import s from './styles';
import { ProductList, Avatar, Touchable } from '../../components';
import Header from './components/Header/Header';



function OwnerScreen({
    productsList,
    isLoading,
    fetchUserProducts,
    openProduct,
}) {
    if (!productsList) {
        return(
            <ActivityIndicator size="large" />
        );
    }    

    return (
        <View style={s.container}>
            <ProductList 
                items={productsList} 
                isLoading={isLoading}                 
                fetchItems={fetchUserProducts}                
                onItemPress={openProduct}
            />
        </View>
    )
};

OwnerScreen.navigationOptions = ({ navigation }) => {  
          
    return {        
        headerTitle: <Header navigation={navigation}/>,
        headerTitleStyle: s.headerTitle,
        headerStyle: s.header,

    };
};

export default OwnerScreen;