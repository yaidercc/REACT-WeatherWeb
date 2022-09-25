import "./history.css";
const History = ({ cities,searchAgain }) => {
    return (
        <div className="container-historial">
            <p>Busquedas recientes</p>
            <div className="cards-historial">
                {cities.map((item, i) => {
                    return (
                        <div className="card-historial" key={i} onClick={()=>searchAgain(item.lat,item.long,item.city)}>
                            <p className="nameCity">{item.city}</p>
                            <p>🔎</p>
                        </div>
                    );
                })}
            </div>
        </div>
        

    );
};
export default History;
