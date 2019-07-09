import * as Yup from 'yup';

const newItemValidationSchema = Yup.object().shape({
    title: Yup.string()              
      .required('Required'),  
    price: Yup.number()
      .required(), 
    location: Yup.string()              
      .required('Required'),       
});

export default newItemValidationSchema;