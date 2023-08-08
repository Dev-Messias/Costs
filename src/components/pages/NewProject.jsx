import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';

function NewProject(){

    //redirecionar as paginas
    const history = useNavigate()

    function createPost(project){
      //inicializando servicos do sistema
      project.cost = 0;
      project.services = [];

      //rota do backend 
      fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        //passando os dados com string para o servidor
        body: JSON.stringify(project)
      })
        .then((resp) => resp.json())
        .then((data) => {
         // console.log(data);
          //redirect
          history('/projects',  {message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container} >
          <h1>Criar projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject;