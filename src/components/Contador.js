import React, {useState, Fragment} from 'react';



const Contador = () => {
    
    let [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1)
        console.log("Me aumentaste")
    }

    return (
        <Fragment>
            <h3> Mi primer numero {numero}</h3>
            <button  onClick={aumentar} >Aumentar</button>
        </Fragment> 
        
    );
}
 
export default Contador;











