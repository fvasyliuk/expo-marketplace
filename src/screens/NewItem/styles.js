import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: { 
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

        borderBottomWidth: StyleSheet.hairlineWidth,
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
    titleText: {
        color: colors.newItemScreen.title,
        textTransform: 'uppercase',
        fontWeight: '400',
        marginHorizontal: 16,
        marginTop: 16,
        
    },
    inputTitle: {
        marginTop: 16,        
        backgroundColor: colors.white,
        paddingHorizontal: 16,        
        height: 48,
        borderRadius: 5,
        marginHorizontal: 16,
    },
    inputDescription: {
        marginTop: 16,        
        backgroundColor: colors.white,
        height: 136,
        paddingHorizontal: 16,
        borderRadius: 5,
        padding: 16,
        marginHorizontal: 16,
    },
    addPhotos: {
        borderWidth: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: colors.white,
        height: 64,
        borderColor: colors.newItemScreen.borderColor,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,

    },
    photo: {
        width: 48,
        height: 48,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
        marginLeft: 2,
    },
    priceContainer: {
        marginTop: 16,
        backgroundColor: colors.white,
    },
    inputPrice: { 
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        height: 48,
        borderRadius: 5,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    errorBorder: {
        borderColor: colors.errorBorder,
        borderWidth: 2,
    },
    inputBorder: {
        borderColor: colors.newItemScreen.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
    },
});

export default styles;