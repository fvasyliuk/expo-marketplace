import React from 'react';
import T from 'prop-types';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import screen from '../../..//navigation/screens';
import { NavigationServices} from '../../../services';
import { Touchable } from '../../../components';
import { colors } from '../../../styles';

const isAndroid = Platform.OS === 'android';

function LoginScreen({
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
                            touched.email && errors.email && s.errorBorder,
                            isFocus.email && s.inputFocus, 
                            
                        ]}                                
                        onFocus={() => handleFocus('email')}
                    />
                </View>    
                <View style={s.passwordContainer}>
                    <Text style={s.passwordLabel}>Password</Text>
                    <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        style={[
                            s.passwordInput, 
                            touched.password && errors.password && s.errorBorder,
                            isFocus.password && s.inputFocus, 
                            
                        ]}                                
                        onFocus={() => handleFocus('password')}
                    />
                </View>      
                <View style={s.forgotContainer}>                            
                    <Text style={s.forgotText}>Forgot password?</Text>
                    {touched.password && errors.password ? <Text style={s.errorText}>Wrong password</Text> : null}
                </View>
            </View> 
            <View style={s.bottomContainer}>
                <View style={s.textBottomContainer}>
                    <Text style={s.textBottom}>
                        Don’t have an account?
                    </Text>
                    <Touchable 
                        onPress={() => navigation.navigate({routeName: screen.Register})}
                        useOpacityAndroid
                    >
                        <Text style={s.textBottomRegister}>
                            REGISTER
                        </Text>
                    </Touchable>
                </View>
                <Touchable
                    onPress={handleSubmit}
                    style={[s.loginButton, s.alignCenter]}
                    useOpacityAndroid
                    disabled={isLoading ? true : false}
                >
                    {
                        isLoading 
                            ? <ActivityIndicator 
                                size="small" 
                                style={s.loginText} 
                                color={colors.white} 
                            />
                            : (<Text style={s.loginText}>
                                Login
                            </Text>)
                    }
                </Touchable>                 
            </View>   
        </KeyboardAvoidingView>        
    )
};

LoginScreen.navigationOptions = () => ({
    title: 'Login',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
})

LoginScreen.propTypes = {
    onLogin: T.func,
    email: T.string,
    onChangeEmail: T.func,
};



export default LoginScreen;