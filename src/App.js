import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import api from './helpers/Api'

import Header from './components/Header';

import Home from './view/Home';
import Login from './view/Login';
import Cadastro from './view/Cadastro';
import Detalhe from './view/Detalhe';

function App() {

    const [authUser, setAuth] = useState(false);
    const [movieId, setMovieId] = useState('');
    const [serieId, setSerieId] = useState('');
    const [typeStream, setTypeStream] = useState('');
    

    function cadastrar(nome, email, senha){
      const data = {
        nome: nome,
        email: email,
        senha: senha
      }

      api().get('/sanctum/csrf-cookie').then(() => {
          api().post('/api/cadastrar', data).then(response => {
              if (response.data.error) {
                  console.log(response.data.error)
                  return false;
              } else {
                  setAuth(true);
                  return authUser;
              }
          })
      })
  }


    function login(email, senha){
        const data = {
            email: email,
            senha: senha
        }

        api().get('/sanctum/csrf-cookie').then(() => {
            api().post('/api/teste', data).then(response => {
                if (response.data.error) {
                    console.log(response.data.error)
                    return false;
                } else {
                    setAuth(true);
                    return authUser;
                }
            })
        })
    }

    function logout(){
      setAuth(false);
    }

    function selecionaFilme(id){
      setMovieId(id);
      setTypeStream('MOVIE');
    }

    function selecionaSerie(id){
      setSerieId(id);
      setTypeStream('SERIE');
    }




  return (
    <BrowserRouter>
      <Header authUser={authUser} logout={logout} authUser={authUser}/>
      <Routes>
          <Route exact path='/home' element={<Home movie={selecionaFilme} serie={selecionaSerie}/>} />
          <Route path='/login' element={<Login login={login}/>} />
          <Route path='/cadastro' element={<Cadastro cadastrar={cadastrar}/>} />
          <Route path='/detalhe' element={<Detalhe movieId={movieId} serieId={serieId} type={typeStream} />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
