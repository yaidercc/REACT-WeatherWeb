import { useEffect, useState } from 'react'
import { getWeatherInfo } from '../helpers/getWeatherInfo';
export const useWeather = ({lat,long})=> {
    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getWeather = async ()=>{
        const data = await getWeatherInfo(lat,long);
        setWeather(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(lat && long){
            getWeather();
        }
    }, [lat,long])

    return {
        weather,
        isLoading
    }
    
}
