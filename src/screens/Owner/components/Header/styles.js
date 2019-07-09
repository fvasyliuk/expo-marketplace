import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: colors.backgroundColor, 
    },
    header: {
        height: 140,
                 
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

        borderBottomWidth: StyleSheet.hairlineWidth,        
    },
    headerTitleOwner: {
        alignItems: 'center',
    },
    headerTitleOwnerText: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 18,
    },
    headerTitle: {        
        fontWeight: '300',        
    },
    headerRight: {
        marginRight: 16,
    },
});

export default styles;