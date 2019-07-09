import React from 'react';
import { compose, hoistStatics, withHandlers, withProps, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import NewItemScreenView from './NewItemScreenView';
import { productsOperations } from '../../modules/products';
import { withFormik } from 'formik';
import { NavigationServices } from '../../services';
import { newItemValidationSchema } from '../../validationSchemas';


function mapStateToProps(state) {
    return {
        imagesList: state.products.images.items,
        isLoadingImage: state.products.images.isLoading,
        photos: state.products.images.items,
    };
}

const mapDispatchToProps = {
    addProduct: productsOperations.addProduct,
    uploadImage: productsOperations.uploadImage,
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => ({
        actionSheet: React.createRef(),
    })),
    withState('editablePrice', 'setEditablePrice', true),
    withHandlers({
        showModal: (props) => () => {
            props.actionSheet.current.show();
        },
        onOpenCamera: (props) => async () => {
            try {
                const res = await ImagePicker.launchCameraAsync();               
                if (res.cancelled) {
                    return;
                }
                props.uploadImage(res);
            } catch (err) {
                console.log(err);
            }
        },
        onOpenGallery: (props) => async () => {
            try {
                const res = await ImagePicker.launchImageLibraryAsync();                
                if (res.cancelled) {
                    return;
                }           
                props.uploadImage(res);     
            } catch (err) {
                console.log(err);
            }
        },        
    }),
    withHandlers({
        onPressModal: (props) => (index) => {
            switch (index) {
                case 0: {
                    props.onOpenCamera();
                    break;
                }
                case 1: {
                    props.onOpenGallery();
                    break;
                }
                default: {
                    break;
                }
            }
        },
    }),
    withFormik({
        mapPropsToValues: (props) => ({
            title: '',
            description: '',
            price: '',
            location: '',
        }),
        validationSchema: newItemValidationSchema,

        async handleSubmit(values, {props : {addProduct, imagesList}}) {                   
            const body ={
                title: values.title,
                location: values.location,
                photos: imagesList,
                price: values.price,
            };
            
            if ( values.description ) {
                body.description = values.description
            }            
               
            try {
                const linkID = await addProduct(body);                
                NavigationServices.navigateToProduct(linkID)
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

export default hoistStatics(enhance)(NewItemScreenView);