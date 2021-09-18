import React,{useState, useEffect} from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';

const App = () => {
    const [ city, setCity] = useState(null);
    const [ search, setSearch ] = useState("Pokhara"); 

        const FetchData = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=709e4d7659fd74594d3c350d86e0d0e3`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);    
    };

    useEffect(() => {
        FetchData();
    //eslint-disable  next line
    }, [search]);

    return (
        <>
         <div className="weather-app">
            <div className="card">
                <div className="searchCity">
                    <input type="search" className="inputData"
                        onChange = { (event) => { setSearch(event.target.value)}}
                    />
                </div>

                {
                !city ? ( <p>No Data Found!</p> )
                 : (
                     <div>
                         <h2 className="cityName"> {search} </h2>
                
                        <h1>
                            <i className=" icon wi wi-day-sunny"></i>
                        </h1>
                            
                        <h2 className = " exactTemp">{city.temp}&deg;C</h2>

                        <h3 className="temp">
                        <span className=" minTemp">{city.temp_min}&deg;C</span>
                        <span className=" mixTemp">{city.temp_max}&deg;C</span>
                        </h3>
                        <h4 className="weatherStatus"> sunny </h4>
                     </div>
                    )
                };
            </div>
         </div>
        </>
    )
}

export default App;
