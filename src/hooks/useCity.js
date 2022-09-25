import { useEffect, useState } from 'react'
import { getCityInfo } from '../helpers/getCityInfo';
export const useCity = (city)=> {
    const [cities, setCities] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getCities = async ()=>{
        const data = await getCityInfo(city);
        setCities(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(city){
            getCities();
        }
    }, [city])

    return {
        cities,
        isLoading
    }
    
}
