import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()              
    .required('Required')
    .email(),
  password: Yup.string()
    .min(8, 'Too Short!')                
    .required('Required'),
});

export default loginValidationSchema;