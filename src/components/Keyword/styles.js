import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: colors.backgroundColor, 
    },
    itemContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemTitle: {
        color: colors.mainText,
    },
    separatorContainer: {
        backgroundColor: colors.white,         
    },
    separator: {
        marginHorizontal: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,        
    },
});

export default styles;