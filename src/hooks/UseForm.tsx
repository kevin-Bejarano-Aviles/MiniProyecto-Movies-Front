import { useState } from 'react';


/* crear el use Form como un hook generico, osea no importa lo que reciba, el tipo interno va ser igual al tipo que reciva el la funcion */
export const UseForm = <T extends Object>(formulario:T) => {
    const [state, setState] = useState(formulario)//no le pasamos nada al state para que sea flexible
    
    const OnChance = (value:string,campo:keyof T)=>{/* para validar el codigo a la hora de escribir */
      setState({
        ...state, //destructuracion
        [campo]:value /* computar el valor  */
      })
    }          
    return{
        ...state,
        OnChance,
        formulario:state
    }
}
