import { ErrorMessage, Formik, Form, Field } from 'formik';
// import validator from 'validator';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  onSubmit = (values) => {
    console.log(values);
  },

  validateSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid Email!'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  }),
  errorSyle = {
    color: 'red',
    // textAlign: 'center',
    width: '100%',
    paddingBottom: '10px',
    // border: '1px solid white',
  };
function Signup() {


  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className='formBoxLeftSignup'></div>
        <div className='formBoxRight'>
          <div className='formContent'>
            <h2>Inscription</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className='inputBox'>
                  <Field
                    type='text'
                    id='name'
                    name='name'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='name'>Nom d'utilisateur</label>
                  <ErrorMessage name='name' component='p' style={errorSyle} />
                </div>
                <div className='inputBox'>
                  <Field
                    type='text'
                    id='email'
                    name='email'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='email'>Adresse email</label>
                  <ErrorMessage name='email' component='p' style={errorSyle} />
                </div>
                <div className='inputBox'>
                  <Field
                    type='password'
                    id='password'
                    name='password'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='password'>Mot de passe</label>
                  <ErrorMessage
                    name='password'
                    component='p'
                    style={errorSyle}
                  />
                </div>
                <div className='inputBox'>
                  <Field
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='confirmPassword'>
                    Confirmez le mot de passe
                  </label>
                  <ErrorMessage
                    name='confirmPassword'
                    component='p'
                    style={errorSyle}
                  />
                </div>
                <button type='submit'>Inscription</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
