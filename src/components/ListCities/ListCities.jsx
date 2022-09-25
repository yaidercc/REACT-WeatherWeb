import "./ListCities.css";
export const ListCities=({setShowList,addCity,setCity,cities,addCoordenates})=>{
    /**
     * Funcion que sirve para añadir las coordenadas de la ciudad seleccionada entre la lista que devuelve la api
     * @param {*} lat latitud 
     * @param {*} long longitud
     * @param {*} city nombre de  la ciudad
     */
    const cityCoordenate=(lat,long,city)=>{
        addCoordenates(lat,long,city);
        addCity(lat,long,city);
        setCity("");
        setShowList(false);
    }
    return (
        <ul className="listCities scroll">
            {cities?.map((city,i)=><li key={i} onClick={()=>cityCoordenate(city.center[1],city.center[0],city.place_name)}>{city.place_name}</li>)}
        </ul>
    );
}