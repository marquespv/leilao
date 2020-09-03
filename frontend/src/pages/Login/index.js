import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Login(){

return (
  <div>
    
    <div class="login-page">
      <h1>Leilão Virtual</h1> 
      <div class="form">
        
        <form class="login-form">
          <input type="text" placeholder="Usuário"/>
          <input type="password" placeholder="Senha"/>
          <button>login</button>
          <p class="message">Não tem conta?  
           <Link to="/register"> Criar uma conta</Link>
          </p>
        </form>

      </div>
    </div>
  </div>
);
}
