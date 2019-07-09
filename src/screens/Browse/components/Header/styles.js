import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../../../styles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: colors.backgroundColor, 
    },
    header: {
        height: 84,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 8,
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

        borderBottomWidth: StyleSheet.hairlineWidth,   
        borderColor: colors.borderColor,     
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: '300',
    },
    headerRight: {
        marginHorizontal: 16,
    },
    headerRightText: {
        fontSize: 18,
        color: colors.primary,
    },
});

export default styles;