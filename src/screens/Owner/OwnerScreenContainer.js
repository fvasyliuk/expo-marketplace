import OwnerScreen from './OwnerScreenView';
import { compose, hoistStatics, lifecycle, withHandlers } from 'recompose';
import { connect} from 'react-redux';
import { productsSelectors, productsOperations } from '../../modules/products';


function mapStateToProps(state, { navigation }) {
    const ownerId = navigation.state.params.id;
    return {
        ownerId,
        productsList: productsSelectors.getUserProducts(state, ownerId),        
        owner: productsSelectors.getUser(state, ownerId),
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
                this.props.fetchUserProducts(this.props.ownerId);
            } 
            if (!this.props.owner) {
                this.props.fetchUser(this.props.ownerId);
            }
                

            // this.props.navigation.setParams({
            //     owner: this.props.owner, 
            // })            
        }, 
    }),
);

export default hoistStatics(enhancer)(OwnerScreen);