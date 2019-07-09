import { compose, lifecycle, withHandlers, hoistStatics, withProps } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import SearchScreen from './SearchScreenView';
import { NavigationServices } from '../../services';

function mapStateToProps(state) {    
    return {
        list: productsSelectors.getLatest(state),
        isLoading: state.products.latest.isLoading,
        isLoadingMore: state.products.latest.isLoadingMore,
        hasNoMore: state.products.latest.hasNoMore,
    };
};

const mapDispatchToProps = {
    search: productsOperations.searchProducts,
    searchMore: productsOperations.searchProductsMore,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => ({
        query: props.navigation.state.params.query,
    })),
    withHandlers({
        openProduct: (props) => (id) => {
            NavigationServices.navigateToProduct(id);
        },
        fetchSearchItems: (props) => () => {
            props.search(props.query);
        },
        fetchSearchMoreItems: (props) => () => {
            props.searchMore(props.query);
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.list) {
                this.props.search(props.query);
            }            
        },
    }),
);

export default hoistStatics(enhancer)(SearchScreen);