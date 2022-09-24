import "./history.css";
const History = ({ cities,searchAgain }) => {
    return (
        <div className="container-historial">
            <p>Busquedas recientes</p>
            <div className="cards-historial">
                {cities.map((city, i) => {
                    return (
                        <div className="card-historial" key={city} onClick={()=>searchAgain(city)}>
                            <p>{city}</p>
                            <p>🔎</p>
                        </div>
                    );
                })}
            </div>
        </div>
        

    );
};
export default History;
