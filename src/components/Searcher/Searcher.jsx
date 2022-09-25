import { useState } from 'react';
import {useCity} from '../../hooks/useCity.js';
import {ListCities} from '../ListCities/ListCities'
import './searcher.css';
const Searcher=({addCity,addCoordenates})=>{
    const [city, setCity] = useState("");
    const {cities} = useCity(city);
    const [state,setState] = useState(false);

    /**
     * Funcion para guardar lo que se este escribiendo en el input en el usestate city
     * @param {*} event change del input
     */
    const onChange=(event)=>{
        setCity(event.target.value);
        setState(true);
    }


    return(
        <>
            <h1>¿Como esta el clima?</h1>
            <div>
                <input 
                    type="search" 
                    placeholder="Ingresa una ciudad."
                    onChange={onChange}
                    value={city}
                    />
                {state 
                    && <ListCities
                            setState={setState}
                            city={city}
                            setCity={setCity}
                            addCity={addCity} 
                            cities={cities.features} 
                            addCoordenates={addCoordenates}
                            />}
            </div>
        </>
    );
}

export default Searcher;