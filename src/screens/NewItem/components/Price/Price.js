import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Touchable } from '../../../../components';
import { compose, withState, withHandlers } from 'recompose';
import s from './styles';

function Price({
    handleFree,
    handlePrice,
    activeItem,
}) {
    return(    
        <View style={s.container}>            
            <Touchable                 
                onPress={handlePrice}
                style={[
                    s.buttonContainer,
                    s.alignButton, 
                    s.price,
                    activeItem.price 
                        ? s.activeButton 
                        : s.unactiveButton
                ]}
                containerStyle={[
                    s.buttonContainer, 
                    s.price,
                    activeItem.price 
                        ? s.activeButton 
                        : s.unactiveButton
                ]}
            >
                <Text style={activeItem.price ? s.activeText : s.unactiveText}>
                    Price
                </Text>
            </Touchable>
        
            <Touchable 
                onPress={handleFree}
                style={[
                    s.buttonContainer, 
                    s.alignButton, 
                    s.free,
                    activeItem.free 
                        ? s.activeButton 
                        : s.unactiveButton
                ]}    
                containerStyle={[
                    s.buttonContainer, 
                    s.free,
                    activeItem.free 
                        ? s.activeButton 
                        : s.unactiveButton
                ]}               
            >
                <Text style={activeItem.free ? s.activeText : s.unactiveText}>
                    Free
                </Text>
            </Touchable>        
        </View>    
    )
}

const enhancer = compose(
    withState('activeItem', 'setActiveItem', {price: true}),
    withHandlers({
        handleFree: (props) => () => {
            props.setActiveItem({ free: true });
            props.handleChange('0')
            props.setEditablePrice(false)
        },
        handlePrice: (props) => () => {
            props.setActiveItem({ price: true });
            props.handleChange()
            props.setEditablePrice(true)
        },
    }),
);

export default enhancer(Price);