import ProfileScreen from './ProfileScreenView';
import { compose, hoistStatics, lifecycle, withHandlers } from 'recompose';
import { connect} from 'react-redux';
import { productsSelectors, productsOperations } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';


function mapStateToProps(state) {
    
    return {
        productsList: productsSelectors.getUserProducts(state, state.viewer.user.id),        
        viewer: viewerSelectors.getUser(state),
        isLoading: state.products.usersProducts.isLoading,
    };
};

const mapDispatchToProps = {
    fetchUserProducts: productsOperations.fetchUserProducts,
    fetchUser: productsOperations.fetchUser,

};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        openProduct: (props) => (id) => {
            NavigationServices.navigateToProduct(id);
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.productsList) {
                this.props.fetchUserProducts(this.props.viewer.id);
            }                 
            this.props.navigation.setParams({
                viewer: this.props.viewer,                 
            })            
        }, 
    }),
);

export default hoistStatics(enhancer)(ProfileScreen);