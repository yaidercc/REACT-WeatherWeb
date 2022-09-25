export const getWeatherInfo=async(lat,long)=>{

    const urlImg="https://openweathermap.org/img/wn/";

    const dataApiWeather={
        token: "6f655c7955128ac692664687aa4821e2",
        units: 'metric',
        lang: 'es',
        urlApi: function(lat,long){
            return `https://api.openweathermap.org/data/2.5/weather?appid=${this.token}&lat=${lat}&lon=${long}&units=${this.units}&lang=${this.lang}`
        }
    }

    // Buscar clima de la ciudad

    const respWeather = await fetch(dataApiWeather.urlApi(lat,long));
    const { weather,main } = await respWeather.json();
    console.log(weather,main);
    return {
        desc: weather[0].description,
        min:Math.trunc(main.temp_min),
        max: Math.trunc(main.temp_max),
        temp: Math.trunc(main.temp),
        icon:`${urlImg}/${weather[0].icon}@2x.png`
    }
}