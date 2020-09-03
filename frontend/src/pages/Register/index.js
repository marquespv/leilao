import React, {useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import api from '../../services/api';

export default function Register(){
    const [nome, setName] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
 
    function handleRegister(e){

        e.preventDefault();
    }

    return  (
        <div class="register-container">
          
            <section>
                <h1>Cadastro de Usuários</h1>
            </section>

            
            <form class="register-form" onSubmit={handleRegister}>
               
                <input type="text" placeholder="Nome Completo" 
                value={nome}
                onChange={e => setName(e.target.value)}
                style={{ width:300}} />
               
                <input type="text" placeholder="Login"
                 value={login}
                 onChange={e => setLogin(e.target.value)}
                />
               
                <input type="password" placeholder="Senha"
                 value={senha}
                 onChange={e => setSenha(e.target.value)}
                />
               

                <br></br>
               
                <button type="submit">Cadastrar</button>
               
                <p class="message">Já cadastrado?  
                    <Link to="/"> Faça Login </Link> 
                </p>
            </form>

        </div>
    );

}