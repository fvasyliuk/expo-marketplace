import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { productsOperations, productsSelectors } from '../../modules/products';
import ProductItemView from './ProductItemView';
import { NavigationServices } from '../../services';


const mapStateToProps = (state, props) => {    
    
    return {
        isLoading: state.products.saved.isLoading,
        item: productsSelectors.getProduct(state, props.itemId)
    };
}

const mapDispatchToProps ={
    save: productsOperations.saveProduct,
    unsave: productsOperations.unsaveProduct,
}

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        handleLike: (props) => () => { 
            console.log('like', props.item.id)        
            if(props.item.saved === true) {
                props.unsave(props.item.id);
            } else {
                props.save(props.item.id);
            }            
        },
        onPressItem: (props) => () => {
            NavigationServices.navigateToProduct(props.item.id);
        },
    })
);

export default enhancer(ProductItemView);