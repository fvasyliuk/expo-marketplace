import * as Yup from 'yup';

const registerValidationSchema = Yup.object().shape({
  email: Yup.string()              
    .required('Required')
    .email(),
  fullName: Yup.string()              
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')                
    .required('Required'),
  repeatPassword: Yup.string() 
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default registerValidationSchema;