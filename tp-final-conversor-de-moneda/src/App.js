import { Fragment, useState } from 'react';
import './App.css';
import Cotizacion from './components/Cotizacion';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './components/main.css';


function App() {
  
  const [cotizacion, setCotizacion] = useState({})
  
  const consultarApi = async() => {
    //hacemos un try Cacht por si la Api esta caida
    try{
      //fetch hace efectivamente la invocación
      const api = await fetch('https://api.bluelytics.com.ar/v2/latest');
      const cotizacion=await api.json();

      var moneda = document.getElementById("moneda").value;
      var inicial = {
        value_sell: 0.00,
        value_buy: 0.00
        }
      var cotizacionAInformar =  
        moneda == "inicial" ?
        inicial :
        cotizacion[moneda]

      setCotizacion(cotizacionAInformar);

    } catch(error){
      console.log(error)
    }
  }

  return (
    <Fragment >
    <Header/>
    <div className="colorFondo ">
      <br></br>
      <h3 className="display-4 fst-italic titulo" >Cotización de Monedas</h3>
      <br></br>
      <h3>Por Favor, elija una opción para conocer su cotizacion</h3>
      <br></br>
      <select class="form-select" aria-label="Default select example" id="moneda" onChange={consultarApi}>
        <option selected value="inicial">Seleccione la Moneda que quiere Cotizar</option>
        <option value="oficial">Dolar Oficial</option>
        <option value="blue">Dolar Blue</option>
        <option value="oficial_euro">Euro Oficial</option>
        <option value="blue_euro">Euro Blue</option>
      </select>
      <br></br>
      <Cotizacion cotizacion = {cotizacion}/>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
