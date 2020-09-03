import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

export default function NewAuction(){
    return (
       
            <div class="auction-container">
                    <section>
                        <h1>Cadastro de Leilão</h1>
                    </section>
    
                    
                    <form class="auction-form">
                        <input placeholder="Nome do Leilão" style={{ width:300}} />
                        <input placeholder="Valor Inicial"/>
                        <input placeholder="Item Usado"/>
                        <input placeholder="Data de Abertura"/>
                        <input placeholder="Finalização"/>
                        <input placeholder="Responsável"/>
                        <button type="submit">Cadastrar</button>                                                                     
                        
                    </form>

            </div>
        );
}