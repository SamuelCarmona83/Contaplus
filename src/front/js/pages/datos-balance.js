import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Balance datos.png";
import "../../img/balance.jpg";

export const BalanceDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadBalances();
  },[])


  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance datos.png" alt="Servicios" />
      </div>
      <br/><br/>
      <div>
        <h1>Datos del Balance Personal solicitado:</h1>
        </div>
      <div className="valores d-flex flex-row">
        <br/><br/>
        {store.listaBalances.map((solicitud,index)=>
        <div className="card mx-3" key={index}>
        <div className="card-body">
        <h5 className="card-title">Solicitud N. {index+1}</h5>
        <h5 className="card-title">Hecha por: {solicitud.completeName}</h5>
        <h5 className="card-title">Cédula: {solicitud.cedula}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary">Go somewhere</button>
        </div>
        </div>  
        )  }    
</div>

<br/><br/>


    </div>
  );
};
