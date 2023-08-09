import React from 'react';

import styles from './Loading.module.css';

import loading from '../../assets/img/loading.svg'

function Loading (){
    return(
        <div className={styles.loader_container} >
            <img className={styles.loader}  src={loading} alt="loading" />
        </div>
    )
}

export default Loading;