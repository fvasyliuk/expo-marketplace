import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';


const styles = StyleSheet.create({
    wraperUser: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    wraperViewer: {
        flexDirection: 'row-reverse',
        marginBottom: 8,
    },
    container: { 
        borderRadius: 10,
        padding: 8,             
    },
    viewerMessage: {
        marginRight: 8,
        marginLeft: 38,
        backgroundColor: colors.primary,       
    },
    userMessage: {
        marginRight: 38,
        marginLeft: 8,
        backgroundColor: colors.white,
        borderColor: colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
    },
    viewerMessageText: {        
        color: colors.white,
        fontSize: 20,
    },
    userMessageText: {        
        color: colors.mainText,
        fontSize: 20,
    },
});

export default styles;