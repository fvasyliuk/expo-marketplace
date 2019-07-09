import * as Yup from 'yup';

const filtersValidationSchema = Yup.object().shape({  
  keywords: Yup.string(),
  priceFrom: Yup.number()
    .required(), 
  priceTo: Yup.number()
    .required(),
  location: Yup.string()              
    .required('Required'),       
});

export default filtersValidationSchema;