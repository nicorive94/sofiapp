import React from 'react'

const style = {width: "18rem", border: "2px solid gray", margin:"10px" }

function Tarjeta({nombre, apellido, dia, hora}) {
    return (
      
                <tr className="table table-striped table-hover" >
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{dia}</td>
                    <td>{hora}</td>
                </tr>
    )
}

export default Tarjeta




