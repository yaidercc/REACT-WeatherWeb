export const getCityInfo = async(city) => {
    const dataApiMapBox={
        token: import.meta.env.VITE_MAP_BOX_KEY,
        urlApi: function(){
            return `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${this.token}`
        }
    }
    // Buscar cordenadas de la ciudad

    const respMap = await fetch(dataApiMapBox.urlApi());
    const { features } = await respMap.json();

    return{
        features
    }
}