import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: colors.white,
        borderColor: colors.newItemScreen.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 16,
        justifyContent: 'center',
        marginVertical: 16,
    },
    button: {      
        
        
    },    
    box: {
        width: 48,
        height: 48,
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    
});

export default styles;