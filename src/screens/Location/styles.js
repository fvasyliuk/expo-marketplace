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
    },
    headerTitle: {
        fontWeight: '300',
    },
    headerRight: {
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        height: 64,
        marginTop: 8,
        marginHorizontal: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 8,
        fontSize: 18,
    },
    inputIcon: {
        marginHorizontal: 5,
    },
});

export default styles;