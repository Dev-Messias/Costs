import React from 'react';
import styles from './Home.module.css';

//imagem
import savings from '../../assets/img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home(){
    return(
        <section className={styles.home_container} >
          <h1>
            Bem-Vindo ao <span>Costs</span>
          </h1>
          <p>Comece a gerenciar os seus projetos agora mesmo!</p>
          <LinkButton to="/newproject" text="Criar Projeto" />
          <img src={savings} alt="Costs" />
        </section>
    );
}

export default Home;