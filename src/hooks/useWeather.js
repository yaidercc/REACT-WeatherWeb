import { useEffect, useState } from 'react'
import { getCityInfo } from '../helpers/getCityInfo';
export const useWeather = (city)=> {
    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getWeather = async ()=>{
        const data = await getCityInfo(city);
        setWeather(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(city){
            getWeather();
        }
    }, [city])

    return {
        weather,
        isLoading
    }
    
}
