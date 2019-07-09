import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: { 
        flex:1,
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundColor,
                
    },
    contentContainerStyle:{
        flex:1,
        justifyContent: 'space-between',
    },
    containerOption: {
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
    },
    headerTitle: {
        fontWeight: '300',
    },
    headerRightContainer: {
        marginRight: 16,
    },
    headerRight: {
        marginRight: 16,
        fontWeight: '300',
        fontSize: 18,
        color: colors.primary,
    },
    headerLeft: {
        marginLeft: 16,
    },
    label: {
        color: colors.newItemScreen.title,
        textTransform: 'uppercase',
        fontWeight: '400',
        marginHorizontal: 16,
        marginTop: 32,
    },  
    priceContainer: {        
        backgroundColor: colors.white,
    },
    priceInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 16,
    },
    inputPrice: { 
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        height: 48,
        borderRadius: 5, 
        width: '48%',       
    },
    errorBorder: {
        borderColor: colors.errorBorder,
        borderWidth: 2,
    },
    inputBorder: {
        borderColor: colors.newItemScreen.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
    },
    submitButton: {
        height: 48,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonContainerStyle: {
        height: 48,
        backgroundColor: colors.primary,
    },
    submitText: {
        color: colors.white,
    },
});

export default styles;