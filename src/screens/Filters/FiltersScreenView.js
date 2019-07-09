import React from 'react';
import { View, TextInput, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { NavigationServices } from '../../services';
import s from './styles';
import { Touchable, Price, Location } from '../../components';
import { colors } from '../../styles';


function FiltersScreen({
    isLoading,
    setEditablePrice,
    editablePrice,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
}) {    
    return (                     
        <KeyboardAvoidingView 
            style={s.container}
            behavior="padding"
            keyboardVerticalOffset={80}
        >             
            <View style={s.containerOption}>
                <Location 
                    onPress={() => NavigationServices.navigateToLocation({
                        valueLocation: values.location,
                        onChangeText: handleChange('location')
                    })}
                    border={false}
                    errorBorder={errors.location && touched.location 
                        ? s.errorBorder
                        : undefined}
                />                       
                <View 
                    style={[
                        s.priceContainer,                          
                    ]}
                >
                    <Price 
                        handleChange={(val) => {                                
                            handleChange('priceFrom')(val);
                            handleChange('priceTo')(val);
                        }}
                        setEditablePrice={setEditablePrice}
                        borderTop={false}
                    />
                    <View style={s.priceInputContainer}>
                        <TextInput 
                            value={values.priceFrom}
                            onChangeText={handleChange('priceFrom')}
                            onBlur={handleBlur('priceFrom')}
                            placeholder='From'
                            editable={editablePrice}
                            style={[
                                s.inputPrice,
                                errors.priceFrom && touched.priceFrom 
                                ? s.errorBorder
                                : s.inputBorder
                            ]}
                        /> 
                        <TextInput 
                            value={values.priceTo}
                            onChangeText={handleChange('priceTo')}
                            onBlur={handleBlur('priceTo')}
                            placeholder='To'
                            editable={editablePrice}
                            style={[
                                s.inputPrice,
                                errors.priceTo && touched.priceTo 
                                ? s.errorBorder
                                : s.inputBorder
                            ]}
                        /> 
                    </View>                     
                </View>
            </View>                
            <Touchable
                disabled={isLoading ? true : false}
                style={s.submitButton}
                containerStyle={s.submitButtonContainerStyle}
                onPress={handleSubmit}
            >
                {
                    isLoading
                        ? <ActivityIndicator size="small" color={colors.white} />
                        : <Text style={s.submitText}>
                            RESULTS
                        </Text>
                        
                        
                }                
            </Touchable>
        </KeyboardAvoidingView>
    )     
};

FiltersScreen.navigationOptions = {
    headerLeft: (
        <Touchable onPress={() => {NavigationServices.goBack()}} style={s.headerLeft} >
            <Ionicons name="ios-close" size={42} color={colors.primary}/>
        </Touchable>
    ),
    title: 'Filters',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
    
};

export default FiltersScreen;