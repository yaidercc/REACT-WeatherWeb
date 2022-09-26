import { useState } from "react";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import Searcher from "./components/Searcher/Searcher";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

const WeatherWeb = () => {
    const [cities, setCities] = useState([]);
    const [coordenates, setCoordenates] = useState({lat:null,long:null,city:null});

    /**
     * Funcion para guardar ciudad en el usestate cities, y buscar la info del clima de esa ciudad
     * @param {*} lat latitud de la ciudad
     * @param {*} long longitud de la ciudad
     * @param {*} city nombre de la ciudad
     * @returns 
     */
    const addCity = (lat,long,city) => {

        city = firstCapitalize(city);
        setCoordenates({lat,long,city});
        if (city && cities.some(item=>item.city===city)) return;
        setCities([{lat,long,city}, ...cities]);
    }

    /**
     * Funcion para poner la primera letra de una palabra en mayuscula
     * @param {*} word 
     * @returns 
     */
    const firstCapitalize = (word = "") => {
        // Separa el string por espacios y pone cada primer letra en mayuscula
        const newWord = word.split(" ").map((el) => {
            return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(" ");
        return newWord;
    };

    /**
     * Funcion que recibe las coordenadas y nombre de una ciudad y la añade al hook coordenates
     * @param {*} lat latitud 
     * @param {*} long longitud
     * @param {*} city nombre de la ciudad
     */
    const addCoordenates=(lat,long,city)=>{
        setCoordenates({lat,long,city});
    }

    return (
        <>
            <div className="container">
                <div className="container-searcher">
                    <div className="content-searcher">
                        <Searcher addCoordenates={addCoordenates} addCity={addCity}/>
                        <History cities={cities} searchAgain={addCity} />
                    </div>
                </div>
                <WeatherInfo coordenates={coordenates}/>
                
            </div>
            <Footer/>
        </>
        );
};

export default WeatherWeb;
