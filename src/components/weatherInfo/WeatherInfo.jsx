import {useWeather} from "../../hooks/useWeather.js"
import "./WeatherInfo.css";
const WeatherInfo=({city})=>{
    const {weather,isLoading}=useWeather(city);
    const {min,max,desc,temp}=weather;
    console.log(isLoading);
    return(
        <>
        { !isLoading ?
            (
                <div className="container-weatherInfo">
                    <div className="card-WeatherInfo">
                        <p className="cityname">{city}</p>
                        <img src="src/assets/niebla.png" alt="Imagen de niebla" />
                        <h1>{temp}°</h1>
                        <p className="climate">{desc}</p>
                        <p className="minAndMax">Min: <span>{min}°</span>  |  Max: <span>{max}°</span></p>
                    </div>
                </div>
            )
            :
            (
                <div className="container-weatherInfo not-found">
                    <div className="card-WeatherInfo">
                        <img src="src/assets/icon-weather.png" alt="Imagen de niebla" />
                        <p >Ingresa una ciudad</p>
                    </div>
                </div>
                )
        }
        </>
    );
}

export default WeatherInfo;