import React from 'react';
import T from 'prop-types';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import s from './styles';
import { Touchable } from '../../../components';
import screen from '../../..//navigation/screens';
import { colors }from '../../../styles';

const isAndroid = Platform.OS === 'android';

function RegisterScreen({
    isLoading,
    navigation,   
    handleFocus,
    isFocus,
    handleChange,
    handleBlur,
    values,
    handleSubmit,
    errors,
    touched,
}) {
    return (                    
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={isAndroid ? 90 : 40} style={s.container}>
            <View style={s.inputContainer}>
                <View style={s.emailContainer}>                            
                    <Text style={s.emailLabel}>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        style={[
                            s.emailInput, 
                            isFocus.email && s.inputFocus, 
                            touched.email && errors.email && s.errorBorder,
                        ]}                                
                        onFocus={() => handleFocus('email')}
                    />
                </View>    
                {touched.email && errors.email 
                    ? <Text style={s.errorText}>Please, enter valid email.</Text> 
                    : null
                }  
                <View style={s.emailContainer}>                            
                    <Text style={s.emailLabel}>Full Name</Text>
                    <TextInput 
                        placeholder="full name"
                        value={values.fullName}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        style={[
                            s.emailInput, 
                            isFocus.fullName && s.inputFocus, 
                            touched.fullName && errors.fullName && s.errorBorder,
                        ]}                                
                        onFocus={() => handleFocus('fullName')}
                    />
                </View>    
                {touched.fullName && errors.fullName 
                    ? <Text style={s.errorText}>Please, enter full name.</Text> 
                    : null
                } 
                <View style={s.passwordContainer}>
                    <Text style={s.passwordLabel}>Password</Text>
                    <TextInput 
                        secureTextEntry 
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        style={[
                            s.passwordInput, 
                            isFocus.password && s.inputFocus, 
                            touched.repeatPassword && errors.password && s.errorBorder,
                        ]}                                
                        onFocus={() => handleFocus('password')}
                    />
                </View>  
                {touched.password && errors.password 
                    ? <Text style={s.errorText}>
                        Password must contain 6-20 characters.
                    </Text> 
                    : null
                }  
                <View style={s.passwordContainer}>
                    <Text style={s.passwordLabel}>Repeat password</Text>
                    <TextInput 
                        secureTextEntry                                
                        value={values.repeatPassword}
                        onChangeText={handleChange('repeatPassword')}
                        onBlur={handleBlur('repeatPassword')}
                        style={[
                            s.passwordInput, 
                            isFocus.repeatPassword && s.inputFocus, 
                            touched.repeatPassword && errors.repeatPassword && s.errorBorder,
                        ]}                                
                        onFocus={() => handleFocus('repeatPassword')}
                    />
                </View>                              
                {touched.repeatPassword && errors.repeatPassword 
                    ? <Text style={s.errorText}>Passwords don’t match.</Text> 
                    : null
                }                        
            </View> 
            <View style={s.bottomContainer}>
                <View style={s.textBottomContainer}>
                    <Text style={s.textBottom}>
                        Already have an account?
                    </Text>
                    <Touchable
                        onPress={() => navigation.navigate({routeName: screen.Login})}
                    >
                        <Text 
                            style={s.textBottomRegister}                                     
                        >
                            LOGIN
                        </Text>
                    </Touchable>
                </View>
                <Touchable
                    onPress={handleSubmit}
                    style={[s.registerButton, s.alignCenter]}
                    useOpacityAndroid
                    disabled={isLoading ? true : false}
                >
                    {
                        isLoading 
                            ? <ActivityIndicator 
                                size="small" 
                                style={s.registerText} 
                                color={colors.white} 
                            />
                            : (<Text style={s.registerText}>
                                Register
                            </Text>)
                    }
                </Touchable>  
            </View>   
        </KeyboardAvoidingView>            
    )
};

RegisterScreen.navigationOptions = () => ({
    title: 'Register',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
})

RegisterScreen.propTypes = {
    onLogin: T.func,
    email: T.string,
    onChangeEmail: T.func,
};



export default RegisterScreen;