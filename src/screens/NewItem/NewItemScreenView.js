import React from 'react';
import T from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Ionicons } from '@expo/vector-icons';
import { NavigationServices } from '../../services';
import ActionSheet from 'react-native-actionsheet';
import { Price, Location } from '../../components';
import { AddPhoto } from './components';
import { colors } from '../../styles';
import s from './styles';

function NewItemScreen({
    setEditablePrice,
    editablePrice,
    actionSheet,
    onPressModal,
    showModal,
    photos,
    isLoadingImage,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
}) {
    return (                     
        <KeyboardAwareScrollView 
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{flexGrow: 1,}}
            style={{flex: 1}}            
            extraHeight={250}
            extraScrollHeight={100}
        >
            <View style={s.container}> 
                <Text style={s.titleText}>
                    Key information
                </Text>
                <TextInput 
                    value={values.title}
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    placeholder='Title...'
                    style={[
                        s.inputTitle, 
                        errors.title && touched.title 
                            ? s.errorBorder
                            : s.inputBorder
                    ]}
                />  
                <TextInput 
                    value={values.description}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    placeholder='Description...'
                    style={[
                        s.inputDescription,
                        errors.description && touched.description 
                            ? s.errorBorder
                            : s.inputBorder
                    ]}
                    multiline                            
                />  
                <Text style={s.label}>
                    Photos
                </Text>                           
                <View style={s.addPhotos}>
                    { photos.length < 7 ? <AddPhoto onPress={showModal} /> : null}
                    {isLoadingImage? 
                        <ActivityIndicator size="small" /> 
                        : null
                    }
                    { photos && photos.map((uri) => 
                        <Image 
                            key={uri}
                            style={s.photo}
                            source={{uri}}
                        />
                    )}
                </View>      
                <Text style={s.label}>
                    Price
                </Text>                         
                <View 
                    style={[
                        s.priceContainer,                          
                    ]}
                >
                    <Price 
                        handleChange={handleChange('price')}
                        setEditablePrice={setEditablePrice}
                    />
                    <TextInput 
                        value={values.price}
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                        placeholder='Price...'
                        editable={editablePrice}
                        style={[
                            s.inputPrice,
                            errors.price && touched.price 
                            ? s.errorBorder
                            : s.inputBorder
                        ]}
                    />  
                </View>               
                <Text style={s.label} >
                    Location
                </Text>                               
                <Location 
                    onPress={() => NavigationServices.navigateToLocation({
                        valueLocation: values.location,
                        onChangeText: handleChange('location')
                    })}
                    errorBorder={errors.location && touched.location 
                        ? s.errorBorder
                        : s.inputBorder}
                />

            </View>  

            <ActionSheet
                ref={actionSheet}
                title={'Choose photo'}
                options={['Open Camera', 'Open Gallery', 'Cancel']}
                cancelButtonIndex={2}                
                onPress={onPressModal}
            />                   
        </KeyboardAwareScrollView>
    )     
};

NewItemScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: (
        <TouchableOpacity onPress={() => {NavigationServices.goBack()}} style={s.headerLeft} >
            <Ionicons name="ios-close" size={42} color={colors.primary} />
        </TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity 
            onPress={() => {
                navigation.state.params.onSubmit();                
            }} 
            style={s.headerRightContainer} 
        >
            <Text style={s.headerRight} >Post</Text>
        </TouchableOpacity>
    ),
    title: 'New Post',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
});

NewItemScreen.propTypes = {
    onOpenCamera: T.func,
    onOpenGallery: T.func,
}

export default NewItemScreen;