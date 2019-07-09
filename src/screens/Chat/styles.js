import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: colors.backgroundColor, 
    },
    header: {
        marginTop: 14,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
    },
    headerBackButton: {
        marginHorizontal: 16,
    },
    headerUserName: {
        marginLeft: 8,
        fontSize: 20,
        color: colors.primary,
    },
    headerTitle: {
        fontWeight: '300',
    },
    bottomContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 8,
        borderColor: colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth, 
        alignItems: 'flex-end',       
    },
    input: {
        paddingHorizontal: 8,
        borderColor: colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        backgroundColor: colors.backgroundColor,  
        fontSize: 20, 
        flex: 1,  
        color: colors.mainText,   
    },
    sendButton: {
        marginLeft: 18,
        marginRight: 10,
        marginBottom: 5,
    },
    disabledButton: {
        opacity: 0.5,
    },
    userContainer: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
    },
    userName: {
        flex: 1,
        marginHorizontal: 8,
        color: colors.mainText,
        fontSize: 18,
    },
    userArrow: {
        marginHorizontal: 8,
    },
});

export default styles;