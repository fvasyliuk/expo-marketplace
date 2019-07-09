import { compose, lifecycle, withHandlers, hoistStatics, withState } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import LocationScreen from './LocationScreenView';
import { NavigationServices } from '../../services';


const enhancer = compose(
    withState('value', 'setValue', ''),
    withHandlers({
        onChange: (props) => (value) => {
            props.setValue(value);
        },

        handleSend: (props) => () => {
            const { onChangeText } = props.navigation.state.params;
            onChangeText(props.value);
            NavigationServices.goBack();
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.setValue(this.props.navigation.state.params.valueLocation)
        }
    }),
);

export default hoistStatics(enhancer)(LocationScreen);