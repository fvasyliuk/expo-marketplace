import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: colors.white,
        borderColor: colors.newItemScreen.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },    
    text: {
        fontSize: 16,   
        color: colors.mainText,
    },
    
});

export default styles;