import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row',  
        paddingVertical: 8,  
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,               
    },
    ownerText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 18,
        justifyContent: 'center',
    },
    fullName: {
        color: colors.mainText,
        fontSize: 18,
    },
    otherPosts: {
        color: colors.ProductScreen.navigateText,
        fontSize: 18, 
        width: '100%',       
    }
});

export default styles;