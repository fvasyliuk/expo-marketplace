import React from 'react';
import { compose, hoistStatics, withHandlers, withProps, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import FiltersScreenView from './FiltersScreenView';
import { productsOperations } from '../../modules/products';
import { withFormik } from 'formik';
import { filtersValidationSchema } from '../../validationSchemas';
import { NavigationServices } from '../../services';


function mapStateToProps(state) {
    return {
        isLoading: state.products.latest.isLoading,
    };
}

const mapDispatchToProps = {
    search: productsOperations.searchProducts,
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => {
        brawseFormikProps = props.navigation.state.params;
        return {
            brawseHandleChange: brawseFormikProps.handleChange,
            brawseValues: brawseFormikProps.values,
            brawseHandleSubmit: brawseFormikProps.handleSubmit,
        };
    }),
    withState('editablePrice', 'setEditablePrice', true),
    withFormik({
        mapPropsToValues: ({ brawseValues }) => ({
            keywords: brawseValues.keywords,
            priceFrom: brawseValues.priceFrom,
            priceTo: brawseValues.priceTo, 
            location: brawseValues.location,
        }),
        validationSchema: filtersValidationSchema,

        async handleSubmit(values, {props : { search, brawseHandleChange }}) {                   
            const body = {
                priceFrom: values.priceFrom,
                priceTo: values.priceTo, 
            };
            
            if ( values.location ) {
                body.location = values.location
            }            
                
            try {                
                Object.keys(body).forEach((key) => {
                    brawseHandleChange(key)(body[key]);
                }) 
                await search(body);
                NavigationServices.navigateToBrowse()
            } catch (err) {                
                console.log(err);
            }  
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.navigation.setParams({onSubmit: this.props.handleSubmit})
        },
    }),
);

export default hoistStatics(enhance)(FiltersScreenView);