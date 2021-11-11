import React from 'react';
import './main.css';

const Cotizacion = ({cotizacion}) => {
    return ( 
        //<div hidden={cotizacion.value_buy == undefined}
        <div className="cuadroCotizacion">
            <p className="textoCotizacion">
                Compra: $ {cotizacion.value_buy} 
                <br></br>
                Venta: $ {cotizacion.value_sell} 
            </p>
        </div>
    );
}
 
export default Cotizacion;