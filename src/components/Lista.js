import React from 'react'
import Tarjeta from "./Tarjeta"


function Lista({lista}) {
    console.log("compoente lista:")
    console.log(lista)

    return(
        <div >
            <table className="table table-striped table-hover">
                <tr>     
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dia</th>
                    <th scope="col">Horario</th>               
                </tr>
                {lista.map(p => <Tarjeta nombre={p.nombre} apellido={p.apellido} dia={p.dia} hora={p.hora}/>)}  
            </table>
                     
        </div>        
    )}

export default Lista


