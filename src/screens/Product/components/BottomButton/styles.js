import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 58,
    },
    call: {
        backgroundColor: colors.ProductScreen.callButton,
        flex: 1,
    },
    message: {
        flex: 1,
        backgroundColor: colors.ProductScreen.messageButton,
    },
    contentAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        marginLeft: 5,
    },
});

export default styles;