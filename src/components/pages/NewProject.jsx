import React from 'react';
import styles from './NewProject.module.css'
import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm';

function NewProject(){
    const history = useHistory();

    function createPost(project){
      
    }

    return(
        <div className={styles.newproject_container} >
          <h1>Criar projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <ProjectForm btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject;