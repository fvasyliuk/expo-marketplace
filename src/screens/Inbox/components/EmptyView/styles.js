import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';


const styles = StyleSheet.create({
    container: { 
        flex: 1,    
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },
    text: {
        color: colors.borderColor,
        fontSize: 20,
    },
});

export default styles;