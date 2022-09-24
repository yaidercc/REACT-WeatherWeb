import { useState } from "react";
import History from "./components/History/History";
import Searcher from "./components/Searcher/Searcher";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

const WeatherWeb = () => {
    const [cities, setCities] = useState(["Bogota"]);
    const [city, setCity] = useState("");

    /**
     * Funcion para guardar ciudad en el usestate cities, y buscar la info del clima de esa ciudad
     * @param {*} name nombre de la ciudad
     * @returns 
     */
    const addCity = (name) => {
        name = firstCapitalize(name);
        setCity(name);
        if (cities.includes(name)) return;
        setCities([name, ...cities]);
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
        <div className="container">
            <div className="container-searcher">
                <div className="content-searcher">
                    <Searcher addCity={addCity} />
                    <History cities={cities} searchAgain={addCity} />
                </div>
            </div>
            {/* <div className="container-weatherInfo"> */}
                <WeatherInfo city={city}/>
            {/* </div> */}
        </div>
    );
};

export default WeatherWeb;
