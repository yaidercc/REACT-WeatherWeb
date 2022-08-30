import { useState } from 'react';
import './searcher.css';
const Searcher=({addCity})=>{
    const [city, setCity] = useState("");

    /**
     * Funcion para guardar lo que se este escribiendo en el input en el usestate city
     * @param {*} event change del input
     */
    const onChange=(event)=>{
        setCity(event.target.value);
    }

    /**
     * Funcion para guardar la ciudad en el usestate de waetherWeb
     * @param {*} event submit del formulario
     * @returns 
     */
    const onAddCity=(event)=>{
        event.preventDefault();
        const cityName=city.trim();
        if(city.length==0)return;
        addCity(cityName);
        setCity("");
    }

    return(
        <>
            <h1>¿Como esta el clima?</h1>
            <form onSubmit={onAddCity}>
                <input 
                    type="search" 
                    placeholder="Ej: Medellin, New york"
                    onChange={onChange}
                    value={city}
                    />
            </form>
        </>
    );
}

export default Searcher;