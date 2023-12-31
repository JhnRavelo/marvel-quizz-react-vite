import React from 'react';
import './../../css/App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../SignUp';
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' Component={Landing} />
          <Route path='/welcome' Component={Welcome} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='*' Component={ErrorPage} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
