import "./WeatherInfo.css";
const WeatherInfo=()=>{
    return(
        <div className="card-WeatherInfo">
            <p className="cityname">Medellin</p>
            <img src="src/assets/niebla.png" alt="Imagen de niebla" />
            <h1>25°</h1>
            <p>Muy nuboso</p>
            <p className="minAndMax">Min: <span>12°</span>  |  Max: <span>23°</span></p>
        </div>
    );
}

export default WeatherInfo;