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
        borderColor: colors.borderColor,
    },
    headerTitle: {
        fontWeight: '300',
    },
});

export default styles;