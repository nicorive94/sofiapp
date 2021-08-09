import React, {useState, Fragment}from 'react'
import Lista from "./Lista"


// let lista = []

function Formulario({agregar}) {

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

    // const enviarDatos = (e) =>{
    //     e.preventDefault();
    //     if(datos.nombre !== "" && datos.apellido !== ""){
    //         lista.push({nombre: datos.nombre, apellido: datos.apellido});
    //         console.log(lista);
    //     }
    //     else alert("complete los campos")
    // }


    return (
        <Fragment>
            <h1>Formulario</h1>
            <form  
            className="row col-md-3"
            onSubmit={(e) =>{e.preventDefault(); 
                            agregar(datos.nombre, datos.apellido, datos.dia, datos.hora)}
                    }>
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
                        <option>Miercoles</option> 
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
                <button className="btn btn-primary" type="submit">Enviar</button>
                </div>           
            </form>
            
        </Fragment>
        
    )
}

export default Formulario
