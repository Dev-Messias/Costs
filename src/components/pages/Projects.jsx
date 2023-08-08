import { useLocation } from 'react-router-dom'
import React from 'react';
import Message from '../layout/Message';

function Projects(){

    //inicializando a função
    const location = useLocation();
    let message = '';

    //verificando se existe uma msg no location state e atribuindo a variavel
    if(location.state){
        message = location.state.message;
    }


    console.log("teste =>" + message)

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type='success' msg={message}  />}
        </div>
    )
}

export default Projects;