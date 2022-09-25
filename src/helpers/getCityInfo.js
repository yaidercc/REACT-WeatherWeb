export const getCityInfo = async(city) => {

    const dataApiMapBox={
        token: "pk.eyJ1IjoieWFpZGVyY2MiLCJhIjoiY2w4ZWY0NGY4MDJxbDN1dDVzM2drcTczeSJ9.SG_7alV0yVYLTG98KDNnhQ",
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