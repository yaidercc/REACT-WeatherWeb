import "./ListCities.css";
export const ListCities=({addCity ,cities})=>{
    console.log(cities);
    return (
        <ul>
            <li key={1}>Yaider</li>
            <li key={2}>Sebastian</li>
        </ul>
    );
}