import { useState } from 'react';
import History from '../History/History';
import './searcher.css'
const Searcher=({addCity})=>{
    const [city, setCity] = useState("");

    const onChange=(event)=>{
        setCity(event.target.value);
    }

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