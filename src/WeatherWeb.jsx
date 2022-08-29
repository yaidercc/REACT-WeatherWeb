import { useState } from "react";
import History from "./components/History/History";
import Searcher from "./components/Searcher/Searcher";

const WeatherWeb = () => {
    const [cities, setCities] = useState(["Bogota", "Medellin"]);

    const addCity = (name) => {
        name = firstCapitalize(name);
        if (cities.includes(name)) return;
        setCities([name, ...cities]);
    };

    const firstCapitalize = (word = "") => {
        // Separa el string por espacios y pone cada primer letra en mayuscula
        const newWord = word.split(" ").map((el) => {
            return el.charAt(0).toUpperCase() + el.slice(1);
        })
        .join(" ");
        return newWord;
    };

    return (
        <>
        <div className="container-searcher">

            <div className="content-searcher">
                <Searcher addCity={addCity} />
                
                <div className="container-historial">
                    <p>Busquedas recientes</p>
                    <div className="cards-historial">
                    {cities.map((city) => {
                        return <History key={city} name={city} />;
                    })}
                    </div>

                </div>

            </div>
        </div>
        </>
    );
};

export default WeatherWeb;
