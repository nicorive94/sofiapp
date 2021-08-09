import React, {useState, Fragment}from 'react'
import Tarjeta from "./Tarjeta"

function Buscar({buscar,persona}) {

    
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        dia:"",
        hora:"",
        lugar:""
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
        [event.target.name]: event.target.value
        })
    }

    // const [dato, setDato] = useState("")

    // const filtrar = (nombre, apellido, dia, hora) => {
    //     if(nombre != ""){
    //         setDato(dato => dato = nombre)
    //     }
    //     if(apellido != ""){
    //         setDato(dato => dato = apellido)
    //     }
    //     if(dia != ""){
    //         setDato(dato => dato = dia)
    //     }
    //     if(hora != ""){
    //         setDato(dato => dato = hora)
    //     }
    // }

    return (
        <Fragment>
            <h1>Buscador</h1>
            <h3>Complete solo uno de los campos</h3>
            <form  
                className="row col-md-3"
                onSubmit={
                    (e) =>{
                        e.preventDefault(); 
                        buscar(datos.nombre, datos.apellido, datos.dia, datos.hora);
                    }
                }
            >
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                <input 
                    name="nombre" 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleInputChange}/>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
                <input 
                    name="apellido" 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleInputChange}/>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Dia</span>
                <select  
                    name="dia" 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleInputChange}>
                        <option>Seleccione un día</option> 
                        <option>Lunes</option> 
                        <option>Martes</option> 
                        <option>Miércoles</option> 
                        <option>Jueves</option>
                        <option>Viernes</option>  
                </select>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Hora</span>
                <input 
                    name="hora" 
                    type="time" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleInputChange}/>
            </div>
                <div className="col-md-3">
                <button className="btn btn-primary" type="submit">buscar</button>
                </div>           
            </form>
            <table className="table table-striped table-hover">
                <tr>     
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dia</th>
                    <th scope="col">Horario</th>               
                </tr>
                {persona.map(p => <Tarjeta nombre={p.nombre} apellido={p.apellido} dia={p.dia} hora={p.hora}/>)}
            </table>
            
            
        </Fragment>
    )
}

export default Buscar



