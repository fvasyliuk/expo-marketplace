import ProductScreen from './ProductScreenView';
import { compose, hoistStatics, withState, lifecycle, withHandlers, withProps } from 'recompose';
import { connect} from 'react-redux';
import { productsSelectors, productsOperations } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';
import { NavigationServices } from '../../services';
import { Share, Linking } from 'react-native';



function mapStateToProps(state, { navigation }) {    
    const productId = navigation.state.params.id;
    
    return {
        productId,
        product: productsSelectors.getProduct(state, productId),
        owner: productsSelectors.getProductOwner(state, productId),
        viewer: viewerSelectors.getUser(state),
    };
};

const mapDispatchToProps = {
    fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => {
        if (
            props.viewer &&
            props.owner &&
            props.viewer.id === props.owner.id
        ) {
            return { navigateToProfile: true };
        }
    }),
    withState('numberOfLines', 'setNumberOfLines', 2),
    withHandlers({
        onMessage: (props) => () => {
            if (props.product && props.product.chatId) {
                return NavigationServices.navigateToChat(props.product.chatId);
            } else {
                NavigationServices.navigateToCreateChat({
                    productId:props.productId,
                    userId: props.owner.id,
                })
            }
        },
        onCall: (props) => () => {

        },
        onShare: (props) => () => {
            // Linking.canOpenURL(url)
            // .then((supported) => {
            //     if (!supported) {
            //     console.log("Can't handle url: " + url);
            //     } else {
            //     return Linking.openURL(url);
            //     }
            // })
            // .catch((err) => console.error('An error occurred', err));
            Share.share({
                message: 'props.product.title', 
                url: 'https://google.com',
                title: props.product.title,         
            });
        },
        handleNavigateProfile: (props) => () => {
            if (props.navigateToProfile) {
                return NavigationServices.navigateToProfile();
            };

            if (props.owner) {                
                return NavigationServices.navigateToOwner(props.owner.id);                
            };
            
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.owner || !this.props.product) {
                this.props.fetchProduct(this.props.productId);
            };
            this.props.navigation.setParams({onShare: this.props.onShare})
            
        }
    }),
);

export default hoistStatics(enhancer)(ProductScreen);