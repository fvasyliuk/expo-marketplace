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
    headerLeft: {
        marginLeft: 16,
    },
    textVer: {
        color: colors.borderColor,
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 8,
    },
    logoutContainer: {
        backgroundColor: colors.white,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
        marginTop: 16,
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText: {
        color: colors.primary,
        textTransform: 'uppercase',
        marginLeft: 8,
        fontSize: 18,
    },
});

export default styles;