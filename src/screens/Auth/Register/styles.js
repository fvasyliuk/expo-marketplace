import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',      
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    header: {
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

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
    registerButton: {        
        borderRadius: 20,
        backgroundColor: colors.primary, 
        paddingHorizontal: 16,
        paddingVertical: 8,        
    },
    registerText: {
        color: colors.white,
        fontWeight: '500',
        textTransform: 'uppercase', 
        width: 68,       
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
    inputFocus: {
        borderColor: colors.primary,
        borderWidth: 2,
    },
    errorBorder: {
        borderColor: colors.loginScreen.errorBorder,
        borderWidth: 2,
    },
    errorText: {
        color: colors.loginScreen.errorText,
        marginHorizontal: 16,
    }
});

export default styles;