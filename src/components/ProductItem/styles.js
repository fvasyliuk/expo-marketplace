import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    containerWraper: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.white,
    },
    container: {    
        width: '100%',        
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
        borderRadius: 5,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%', 
        height: 196, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5,  
    },
    bottomContainer: {
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    title: {
        fontSize: 14,
        color: colors.mainText,        
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 3, 
             
    },
    price: {
        color: colors.mainText,
        fontWeight: '600',
    },
});

export default styles;