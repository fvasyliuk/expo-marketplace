import { compose, withHandlers, hoistStatics, withState, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../../modules/auth';
import { NavigationServices } from '../../../services';
import screen from '../../..//navigation/screens';
import RegisterScreenView from './RegisterScreenView';
import { withFormik } from 'formik';
import { registerValidationSchema  } from '../../../validationSchemas';
import * as Yup from 'yup';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.register.isLoading,
    }
};

const mapDispatchToProps = {
    register: authOperations.register,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('isFocus', 'setIsFocus', {}),
    withHandlers({
        handleFocus: (props) => (value) => {            
            props.setIsFocus({[value]: true});
        }
    }),
    withFormik({
        mapPropsToValues: (props) => ({
            email: '',
            fullName: '',
            password: '',
            repeatPassword: '',
        }),
        validationSchema: registerValidationSchema,

        async handleSubmit(values, { props }) {  
            const body = {
                email: values.email,
                fullName: values.fullName,
                password: values.password,
            };
            
            try {
                await props.register(body);       
                NavigationServices.navigateToApp();
            } catch (err) {
                console.log(err);
            }  
        }
    }),    
);

export default hoistStatics(enhancer)(RegisterScreenView);

