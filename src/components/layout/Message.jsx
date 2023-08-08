import React, {useState, useEffect} from 'react'
import styles from './Message.module.css';

function Message({type, msg}){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // verifica se não possue msg se não set false
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true);

        //apos 3segundos a visibilidade será false
        const timer = setTimeout(()=> {
            setVisible(false)
        }, 3000)

        //finaliza o timer
        return () => clearTimeout(timer);

    }, [msg])


    return(
        <>
            {visible &&(
                <div className={`${styles.message} ${styles[type]}`} >{msg}</div>
            )}
        </>
    )
}

export default Message;