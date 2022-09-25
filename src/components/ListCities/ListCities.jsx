import "./ListCities.css";
export const ListCities=({setState,addCity,setCity,cities,addCoordenates})=>{
    const cityCoordenate=(lat,long,city)=>{
        addCoordenates(lat,long,city);
        addCity(lat,long,city);
        setCity("");
        setState(false)
    }
    return (
        <ul className="listCities">
            {cities?.map((city,i)=><li key={i} onClick={()=>cityCoordenate(city.center[1],city.center[0],city.place_name)}>{city.place_name}</li>)}
        </ul>
    );
}