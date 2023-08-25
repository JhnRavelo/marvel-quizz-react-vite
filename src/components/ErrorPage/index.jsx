import React from 'react';
import superman from '../../images/superman.png';

const textStyle = {
  textAlign: 'center',
  color: 'red',
  marginTop: '50px',
};

const imgStyle = {
  display: 'block',
  margin: '40px auto',
};

function ErrorPage() {
  return (
    <div className='quiz-bg'>
      <div className='container'>
        <h1 style={textStyle}>Désolé, cette page n'existe pas!</h1>
        <img style={imgStyle} src={superman} alt='Superman' />
      </div>
    </div>
  );
}

export default ErrorPage;
