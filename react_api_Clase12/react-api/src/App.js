

import { Fragment, useState } from 'react';
import './App.css';
import Bebida from './components/Bebida';
import bebida1 from './imagen/bebida1.jpg';
import bebida2 from './imagen/bebida2.jpg';

function App() {
  //creamos un state para las bebidas, arranca vacio
  //las bebidad van a venir en formato json

  const [bebida, setBebida] = useState({})

  //consultar la Api y obtener el resultado
  const consultarApi = async() => {
    //hacemos un try Cacht por si la Api esta caida
    try{
      //Await hace el get y se queda esperando que se establezca la conexión
      //fetch hace efectivamente la invocación
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      
      //ahora hacemos el parseo y lo guardamos en const bebida

      const bebida=await api.json();
      //le especificamos que elemento del json queremos
      setBebida(bebida.drinks[0]);

    } catch(error){
      console.log(error)

    }
  }


  return (
    <Fragment >
      <div style={
        {
          padding:"100px",
          display: "flex",
          flexDirection: "column",
          alignItems:"center"
        }
      }>
        <div className="row">
          <div className="col-lg-4">
            <img src={bebida1}></img>
          </div>
          <div className="col-lg-4">
            <img src={bebida2}></img>
          </div>
          <div className="col-lg-4">
            <img src={bebida1}></img>
          </div>
        </div>
        <br></br>
        <button style={
          {
          background:"white"
          }
        }
          
          className="btn btn-outline-dark"
          onClick={consultarApi}>
          Traer Bebidas
        </button>
        <br></br>
        <Bebida bebidaProp ={bebida}/>

      </div>
    </Fragment>
  );
}

export default App;
