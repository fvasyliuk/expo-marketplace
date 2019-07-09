import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';


const styles = StyleSheet.create({
    container: { 
             
    },
    right: {
        marginLeft: 12,
    },
    title: {
        color: colors.mainText,
        fontSize: 18,
        fontWeight: '400',
    },
    name: {
        color: colors.primary,
        fontSize: 16,
    },
    lastMessage: {
        color: colors.mainText,
        fontSize: 16,
    },
    separatorContainer: {
        backgroundColor: colors.white,         
    },
    separator: {
        marginLeft: 82,
        borderWidth: 1,
        borderColor: colors.borderColor,        
    },
});

export default styles;