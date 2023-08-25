import React from 'react';
import { useFormik } from 'formik';
import validator from 'validator';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  onSubmit = values => {
    console.log(values);
  },
  validate = values =>{
    const { name, email, password, confirmPassword }=values
    let errors = {};

    if(!name){
      errors.name = `Nom d'utilisateur requis`
    }
    if(!email){
      errors.email = `Adresse email requis`
    }else if(validator.isEmail(email)){
      errors.email = `Adresse email n'est pas valide`
    }
    if(!password){
      errors.password = `Mot de passe requis`
    }
    if(!confirmPassword || password ==! confirmPassword){
      errors.confirmPassword = `Vous devez confirmez votre mot de passe`
    }

  }

function Signup() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  const { name, email, password, confirmPassword } = formik.values;
  const { handleChange, handleSubmit } = formik;

  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className='formBoxLeftSignup'></div>
        <div className='formBoxRight'>
          <div className='formContent'>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className='inputBox'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  autoComplete='off'
                  required
                  onChange={handleChange}
                  value={name}
                />
                <label htmlFor='name'>Nom d'utilisateur</label>
              </div>
              <div className='inputBox'>
                <input
                  type='text'
                  id='email'
                  name='email'
                  autoComplete='off'
                  required
                  onChange={handleChange}
                  value={email}
                />
                <label htmlFor='email'>Adresse email</label>
              </div>
              <div className='inputBox'>
                <input
                  type='password'
                  id='password'
                  name='password'
                  autoComplete='off'
                  required
                  onChange={handleChange}
                  value={password}
                />
                <label htmlFor='password'>Mot de passe</label>
              </div>
              <div className='inputBox'>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  autoComplete='off'
                  required
                  onChange={handleChange}
                  value={confirmPassword}
                />
                <label htmlFor='confirmPassword'>
                  Confirmez le mot de passe
                </label>
              </div>
              <button type='submit'>Inscription</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
