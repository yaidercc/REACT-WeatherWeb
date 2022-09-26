import {useWeather} from "../../hooks/useWeather.js"
import "./WeatherInfo.css";
const WeatherInfo=({coordenates})=>{

    const {weather,isLoading}=useWeather(coordenates);
    const {min,max,desc,temp,icon}=weather;

    return(
        <>
        { !isLoading ?
            (
                <div className="container-weatherInfo">
                    <div className="card-WeatherInfo">
                        <p className="cityname">{coordenates.city}</p>
                        <img src={icon} alt="Imagen de niebla" />
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
                        <img src="/assets/icon-weather.png" alt="Imagen de niebla" />
                        <p >Ingresa una ciudad</p>
                    </div>
                </div>
                )
        }
        </>
    );
}

export default WeatherInfo;