import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2, FiEdit} from 'react-icons/fi';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <span>Bem vindo.</span>
                <Link classname="button" to="auction/new"> Cadastrar novo leilão</Link>
                <button id="btLogout" type="button">
                        <FiPower Size={20} color="black" />
                </button>
            </header>

            <h1>Leilões Cadastrados</h1>

            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    
                    <button id="btEdit" type="button" >
                        <FiEdit Size={20} color="black"/>
                    </button>

                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button id="btDelete" type="button">
                        <FiTrash2 Size={20} color="black" />
                    </button>

                </li>
            </ul>
 
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
            <ul>
                <li>
                    <strong>Nome do Leilão: </strong>
                    <p>Descrição</p>

                    <strong>Valor Inicial: </strong>
                    <p>RS 120,00</p>

                    <strong>Item usado: </strong>
                    <p>Sim</p>

                    <strong>Data de Abertura: </strong>
                    <p>20/12/2020</p>

                    <strong>Finalização </strong>
                    <p>20/12/2020</p>


                    <strong>Responsável: </strong>
                    <p>Sim</p>

                    <button type="button">
                        <FiTrash2 Size={20} color="#a8a8b3" />
                    </button>

                </li>
            </ul>
 
 
        </div>
        );

}