import React, {useState} from "react"
import Buscar from "./components/Buscar"
import Nav from "./components/Nav"
import Lista from "./components/Lista"
import Formulario from "./components/Formulario"
import {Route} from 'react-router-dom';


function App() {

  let estadoInicial = [
    {nombre: "juan", apellido: "perez", dia:"Lunes", hora:"10:10"},
    {nombre: "Nicolás", apellido: "Rivero", dia:"Martes", hora:"10:10"},
    {nombre: "Sofia", apellido: "Correa", dia:"Miércoles", hora:"10:10"},
    {nombre: "José", apellido: "Sanchez", dia:"Jueves", hora:"10:10"},
    {nombre: "Jorge", apellido: "Ramirez", dia:"Viernes", hora:"10:10"}
  ]

  var [lista, setLista] = useState(estadoInicial)
  

  var [persona, setPersona] = useState([])
  
  const agregar = (nombre, apellido, dia, hora) =>{
    for(let i=0; i<lista.length; i++){
      if(lista[i].dia == dia && lista[i].hora == hora){
        return(alert("El horario indicado ya está ocupado"))
      }
    } 
      let nuevoPaciente={
        nombre: nombre, 
        apellido: apellido,
        dia: dia,
        hora: hora
      }
      setLista(lista =>[...lista, nuevoPaciente])
      console.log(lista)
    }

  const buscar = (nombre, apellido, dia, hora)=>{
    let dato;
    if(nombre != ""){
        dato = nombre
    }
    if(apellido != ""){
        dato = apellido
    }
    if(dia !== ""){
        dato = dia
    }
    if(hora !== ""){
        dato = hora
    }
    setPersona(persona => persona = [])
    for(let i = 0; i< lista.length; i++){
      for(let p in lista[i]){
        if(dato == lista[i][p]){
          setPersona(persona => [...persona, lista[i]])
        }
      }
    } 
  }
 

  return (
    <div > 
     <Nav/>
      <Route exact path="/">
        <Formulario agregar={agregar}/>
      </Route>     
      <Route path='/lista'>
        <Lista lista={lista}/>
      </Route>
      <Route path='/buscar'>
        <Buscar persona={persona} buscar={buscar} />
      </Route>
    </div>
  );
}

export default App;
