import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',      
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    header: {
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),
        borderColor: colors.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTitle: {
        fontWeight: '300',
    },
    inputContainer: {
        height: 75,
        width: '100%',
    },
    botoomWraper: {       
        width: '100%',        
        height: 75,        
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%', 
        padding: 8,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between', 
        alignItems: 'center',     
    },
    textBottomContainer: {
       flexDirection: 'row',
    },
    textBottom: {
        marginRight: 4,
        color: colors.borderColor,
    },
    textBottomRegister: {
        textTransform: 'uppercase',
        color: colors.primary,
        fontWeight: '500',
    },
    loginButton: {        
        borderRadius: 20,
        backgroundColor: colors.primary, 
        paddingHorizontal: 16,
        paddingVertical: 8,        
    },
    loginText: {
        color: colors.white,
        fontWeight: '500',
        textTransform: 'uppercase', 
        width: 42,       
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailInput: {
        width: '100%',
        borderColor: colors.borderColor,
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    emailContainer: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    emailLabel: {
        color: colors.primary,
        marginTop: 8,
        fontWeight: '500',
    },
    passwordInput: {
        width: '100%',
        borderColor: colors.borderColor,
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    passwordContainer: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    passwordLabel: {
        color: colors.primary,
        marginTop: 16,
        fontWeight: '500',
    },    
    forgotContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    forgotText: {
        color: colors.primary,
    },
    inputFocus: {
        borderColor: colors.primary,
        borderWidth: 1,
    },
    errorBorder: {
        borderColor: colors.loginScreen.errorBorder,
        borderWidth: 1,
    },
    errorText: {
        color: colors.loginScreen.errorText,
    }
});

export default styles;