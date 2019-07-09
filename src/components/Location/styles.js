import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: colors.white,        
        paddingHorizontal: 16,
        justifyContent: 'center',
        marginVertical: 16,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },    
    left: {
        flexDirection: 'row',
    },
    locationText: {
        fontSize: 16,
        color: colors.primary,
    },
    
});

export default styles;