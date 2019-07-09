import { StyleSheet } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    border: {
        borderColor: colors.newItemScreen.borderColor,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    alignButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        borderColor: colors.newItemScreen.borderColor,
        borderWidth: StyleSheet.hairlineWidth,        
        height: 30,
        flex: 1,
    },
    price: {          
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,        
    },
    free: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    activeButton: {
        backgroundColor: colors.primary,
    },    
    unactiveButton: {
        backgroundColor: colors.white,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.newItemScreen.borderColor,
    },
    activeText: {
        color: colors.white,
    },
    unactiveText: {
        color: colors.primary,
    },
})

export default styles;