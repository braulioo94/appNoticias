import React,{Fragment,useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoNoticias from './componentes/ListadoNoticias';


function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('') ;
  const [noticias, guardarNoticias] = useState([])


  useEffect(() => {
      const consultarAPI = async () => {
        const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=2d9feb22c64f40d3803d921874945a31`

        const respuesta = await fetch(url) ;

        const noticias = await respuesta.json()

        guardarNoticias(noticias.articles)

      }
      consultarAPI() ;
  }, [categoria]) ;

  return (
    <div className='root'>
      <Fragment>
        <Header 
          titulo='Buscador de noticias' 
        />
        <div className='container white'>
          <Formulario guardarCategoria={guardarCategoria}/>

        </div>

        <ListadoNoticias 
          noticias={noticias}
        />

      </Fragment>
    </div>
  );  
}

export default App;
