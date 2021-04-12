import React from 'react'
import styles from './formulario.module.css' ;
import useSelect from '../hooks/useSelect' ;

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocio'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deporte'},
        {value:'technology', label:'Tecnología'}
    ]


     //Utilizar custom hook
     const [categoria, SelectNoticias] = useSelect('general', OPCIONES) ;

     //SUBMIT AL FOMR, PASAR CATEGORIA A APP.JS
     const buscarNoticia= e =>{
         e.preventDefault() ;

         guardarCategoria(categoria)
     }


    return ( 
        <div className={`${styles.buscador} row`}>
            <div className=' col s12 m8 offset-m2'>
                <form 
                    onSubmit={buscarNoticia} 
                >
                    <h2 className={styles.heading}>Encuentra noticias por Categoría</h2>

                    <SelectNoticias /> 

                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                    

                </form>
            </div>

        </div>
    );
}

export default Formulario;