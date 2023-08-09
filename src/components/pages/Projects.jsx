import { useLocation } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading';

function Projects(){

    //salvar projetos
    const [projects, setProjects] = useState([]);

    //loading
    const [removeLoading, setRemoveLoading] = useState(false);
    
    //inicializando a função
    const location = useLocation();
    let message = '';

    //verificando se existe uma msg no location state e atribuindo a variavel
    if(location.state){
        message = location.state.message;
    }


    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 3000)
    },[])

    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
               <h1>Meus Projetos</h1>
               <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type='success' msg={message}  />}
            <Container customClass="start" >
                {projects.length > 0 && projects.map((project) =>(
                    <ProjectCard 
                      id={project.id}
                      name={project.name}
                      budget={project.budget}
                      category={project.category.name} 
                      key={project.id}
                    />
                ))}
                {!removeLoading && <Loading />}
                {//tratando quando não tem projetos cadastrado
                removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!😅</p>
                )
                
                }
            </Container>
        </div>
    )
}

export default Projects;