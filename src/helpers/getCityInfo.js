export const getCityInfo = async(city) => {

    const urlImg="https://openweathermap.org/img/wn/";

    const dataApiMapBox={
        token: "pk.eyJ1IjoieWFpZGVyY2MiLCJhIjoiY2w4ZWY0NGY4MDJxbDN1dDVzM2drcTczeSJ9.SG_7alV0yVYLTG98KDNnhQ",
        urlApi: function(){
            return `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${this.token}`
        }
    }

    const dataApiWeather={
        token: "6f655c7955128ac692664687aa4821e2",
        units: 'metric',
        lang: 'es',
        urlApi: function(lat,long){
            return `https://api.openweathermap.org/data/2.5/weather?appid=${this.token}&lat=${lat}&lon=${long}&units=${this.units}&lang=${this.lang}`
        }
    }

    // Buscar cordenadas de la ciudad

    const respMap = await fetch(dataApiMapBox.urlApi());
    const { features } = await respMap.json();

    const infoCoordinates={
        long:features[0].center[0],
        lat:features[0].center[1],
    }

    // Buscar clima de la ciudad

    const respWeather = await fetch(dataApiWeather.urlApi(infoCoordinates.lat,infoCoordinates.long));
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