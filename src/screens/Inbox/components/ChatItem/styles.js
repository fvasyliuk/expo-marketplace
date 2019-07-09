import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';


const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        padding: 8, 
        backgroundColor: colors.white,         
    },
    right: {
        marginLeft: 12,
        flex: 1,
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
    PrefixlastMessage: {
        color: colors.mainText,
        fontSize: 16,
        fontWeight: '500',
    }
});

export default styles;