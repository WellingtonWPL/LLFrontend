import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import api from './helpers/Api'

import Header from './components/Header';

import Home from './view/Home';
import Login from './view/Login';
import Cadastro from './view/Cadastro';
import Detalhe from './view/Detalhe';

function App() {

    const [movies, setMovies] = useState('');
    const [series, setSeries] = useState('');

        
  return (
    <BrowserRouter>
      <Header setMovies={setMovies} setSeries={setSeries} />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home movies={movies} series={series}/>} /> 
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/detalhe' element={<Detalhe/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
