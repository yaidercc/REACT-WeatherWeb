import { useState } from "react";
import History from "./components/History/History";
import Searcher from "./components/Searcher/Searcher";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

const WeatherWeb = () => {
    const [cities, setCities] = useState(["Bogota", "Medellin"]);
    const [city, setCity] = useState("Bogota");

    /**
     * Funcion para guardar ciudad en el usestate cities, y buscar la info del clima de esa ciudad
     * @param {*} name nombre de la ciudad
     * @returns 
     */
    const addCity = (name) => {
        name = firstCapitalize(name);
        if (cities.includes(name)) return;
        setCities([name, ...cities]);
        setCity(name);
    };

    /**
     * Funcion para buscar la informacion del clima de una ciudad que ya estaba en el historial
     * @param {*} name nombre de la ciudad
     */
    const searchCityHistory=(name)=>{
        setCity(name);
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

    return (
        <>
            <div className="container-searcher">
                <div className="content-searcher">
                    <Searcher addCity={addCity} />
                    <History cities={cities} searchAgain={searchCityHistory} />
                </div>
            </div>
            <div className="container-weatherInfo">
                <WeatherInfo/>
            </div>
        </>
    );
};

export default WeatherWeb;
