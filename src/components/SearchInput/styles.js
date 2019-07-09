import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 8,
        height: 44,  
        borderRadius: 5,      
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor, 
        backgroundColor: colors.backgroundColor,
        flexDirection: 'row',
        alignItems: 'center',       
    },
    leftIcon: {
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 5,
        borderRadius: 5,
        fontSize: 16,
    },
});

export default styles;