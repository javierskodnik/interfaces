import Footer from "./components/Footer";
import {useState } from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";
import Pagination from "./components/Pagination";
import InfoNBA from './components/InfoNBA';
import './components/main.css';
import './components/InfoNBA.css';



function App() {
  
  //listado de productos con un state
  //primero va la variable que yo voy a tocar, y luego de la "," va la función
  //que se encarga de modificar el estado inicial

  const [productos, guardarProductos] = useState ([
  
    {id:1, articulo: "Zapatillas Para Tenis", moneda: "$", precio: 8000},
    {id:2, articulo: "Camiseta Termica", moneda: "$", precio: 2000},
    {id:3, articulo: "Palo de Hockey", moneda: "$",  precio: 4500},
    {id:4, articulo: "Botines Fútbol 5", moneda: "$", precio: 10000},
    {id:5, articulo: "Calza", moneda: "$", precio: 2500},

  ]);

  //State para traer la info de NBA

  const [infoNBA, setInfoNBA] = useState({})
  const [nbaList, setNbaList] = useState({}) //estamos guardando la lista entera
  let listPosition = 0


  //state para consultar la api y obtener el resultado
  //const [api, consultarApi] = useState({})

  //consultar la Api y obtener el resultado
  const consultarApi = async() => {
    //hacemos un try Cacht por si la Api esta caida
    try{
      //Await hace el get y se queda esperando que se establezca la conexión
      //fetch hace efectivamente la invocación
      const api = await fetch('https://www.balldontlie.io/api/v1/games');
      
      //ahora hacemos el parseo y lo guardamos en const infoNBA

      const infoNBA = await api.json();
      setNbaList(infoNBA.data); //guardamos la lista
      //le especificamos que elemento del json queremos
      setInfoNBA(infoNBA.data[0]);
    
      
      setInterval(function(){ 
        let newPosition = listPosition + 1;
        if (newPosition > infoNBA.data.length){
          newPosition = 0
        }
        console.log(newPosition)
        setInfoNBA(infoNBA.data[newPosition]); 
        listPosition = newPosition;

      }, 3000);

    } catch(error){
      console.log(error)

    }
  }
   
  //State para changuito

  const [changuito, agregarProducto] = useState ([]);

  return (
    <Fragment className="App">
      <Header/>
        <div className="colorFondo">
          <br></br>
            <h3 className="display-4 fst-italic titulo" >Indumentaria Deportiva - Venta Online</h3>
          <br></br>
          
          {productos.map(producto =>
            (
              <Producto 
                //para que cada producto sea único, se le asigna una key. Es el id del producto
                key = {producto.id}
                producto = {producto}

                // vamos a pasar la lista de productos para poder hacer "seleccionar productos"
                productos = {productos}
                changuito = {changuito}
                agregarProducto = {agregarProducto}
              />
            )
          )
          }
          <br></br>
          <button className= "buttonInfoNBA"   onClick={consultarApi}>
            TraerNba
          </button>
          <InfoNBA  infoNbaProp ={infoNBA}/>
          <br></br>
          <Pagination/>
        </div>  

      <Changuito
        changuito={changuito}
        agregarProducto = {agregarProducto}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
