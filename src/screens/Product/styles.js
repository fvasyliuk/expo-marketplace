import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../styles';

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
    },
    container: { 
        flex: 1,
        backgroundColor: colors.backgroundColor,        
    },
    header: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
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
    headerRight: {
        marginRight: 16,
    },
    bottom: {
        paddingHorizontal: 16,
        backgroundColor: colors.white,
    },
    productDescription: {
        paddingVertical: 8,
    },
    userInfo: {   
        
        
    },
    top: {
        position: "relative", 
        height: 456,
    },
    imageTextContainer: {
        width: '100%',
        bottom: 20,
        paddingHorizontal: 16,
        position: "absolute",
    },
    textImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    textImageTitle: {
        color: colors.white,
        fontSize: 18,   
        fontWeight: '500',     
    },
    textImageBottom: {
        color: colors.borderColor,
        fontSize: 18,
    },
    imageLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;