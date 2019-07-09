import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { OwnerInfo, BottomButton } from './components';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';
import { Touchable } from '../../components';

function ProductScreen({
    product,
    numberOfLines,
    owner,
    handleNavigateProfile,
    navigateToProfile,
    onCall,
    onMessage,
}) {
    if (!owner) {
        return <ActivityIndicator size="large" />
    }
    
    return (
        <View style={s.wraper}>
            <ScrollView style={s.container}> 
                <View style={s.top}>
                    <Image 
                        source={{uri: product.photos[0]}}
                        style={{width: '100%', height: 456}} 
                    />
                    <View style={s.imageTextContainer}>
                        <View style={s.textImage}>
                            <Text style={s.textImageTitle}>
                                {product.title}
                            </Text>
                            <Text style={s.textImageTitle}>
                                ${product.price}
                            </Text>
                        </View>
                        <View style={s.textImage}>
                            <Text style={s.textImageBottom}>
                                {product.createdAt}
                            </Text>
                            <View style={s.imageLocationContainer}>
                                <MaterialIcons name="location-on" size={16} color={colors.borderColor}/>
                                <Text style={s.textImageBottom}>
                                    {product.location}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={s.bottom}> 
                    <View style={s.productDescription}>
                        { product.description 
                            ? <Text numberOfLines={numberOfLines}>
                                {product.description}
                            </Text> 
                            : null
                        }  
                    </View>                                  
                    <View style={s.userInfo}>
                        <OwnerInfo 
                            owner={owner}
                            handleNavigate={handleNavigateProfile}
                        />
                    </View>
                </View>            
            </ScrollView>
            {!navigateToProfile
                ? (<BottomButton
                    onCall={onCall}
                    onMessage={onMessage} 
                />)
                : null
            }
        </View>
    )
};

ProductScreen.navigationOptions = ({ navigation }) => {
    const params = navigation.state.params
    let onShare = () => {};
    if (params && params.onShare) {
        onShare = params.onShare;
    };
    
    return {
        headerTransparent: s.header,
        headerTintColor: colors.white,
        headerRight: (
            <Touchable 
                style={s.headerRight}
                onPress={onShare}
            >
                <Ionicons 
                    name="ios-share-alt" 
                    size={32} 
                    color={colors.white}                
                />
            </Touchable>
        ),
    }    
};

export default ProductScreen;