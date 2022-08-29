
import History from '../History/History';
import './searcher.css'
const Searcher=()=>{
    return(
        <>
            <div className="container-searcher">
                <div className='content-searcher'>
                    <h1>¿Como esta el clima?</h1>
                    <input type="search" placeholder="Ej: Medellin, New york"/>
                    <History/>
                </div>
            </div>
        </>
    );
}

export default Searcher;