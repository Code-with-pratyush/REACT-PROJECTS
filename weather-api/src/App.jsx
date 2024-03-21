import './App.css';
import Temperature from './components/temperature';
import HighLigths from './components/HighLigths';
import { useState,useEffect } from 'react';

function App() {
  const [city,setCity] = useState("Bangalore");
  const [weatherData,setweatherData] = useState(null);
  const apiurl = `https://api.weatherapi.com/v1/current.json?key=ba966dec934d484ca7171037241601&q=${city}&aqi=no`
  
  useEffect(()=>{
    fetch(apiurl)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setweatherData(data);
    })
    .catch((error)=>{
      console.log("Error",error);
      throw error;
    })
  },[city]);
  return (
    <>
    <div className='bg-[#1F213A] h-screen flex justify-center items-start'>
      <div className=' my-40 min-w-60 h-2/5'>
        {
         weatherData && 
         <Temperature 
          setCity={setCity}
          stats = {{
            temp: weatherData.current.temp_c,
            condition:weatherData.current.condition.text,
            isDay:weatherData.current.is_day,
            location:weatherData.location.name,
            localtime:weatherData.location.localtime
         }}
        />
        }
      </div>

      
      <div className='my-40 w-1/3 h-2/5 pt-2 pl-10 grid grid-cols-2 gap-6'>
        <div className='text-slate-200 text-2xl font-semibold col-span-2'>Today's HighLights</div>
        {
          weatherData &&
          (
            <>
              <HighLigths 
               stats = {{
                title: "Wind Status",
                value:weatherData.current.wind_mph,
                unit:"mph",
                direction:weatherData.current.wind_dir
              }}
              />
              <HighLigths 
                stats = {{
                  title: "Humidity",
                  value:weatherData.current.humidity,
                  unit:"%",
                }}
              />
              <HighLigths 
                stats = {{
                  title: "Visiblity",
                  value:weatherData.current.vis_miles,
                  unit:"miles",
                }}
              />
              <HighLigths 
                stats = {{
                  title: "Air Pressure",
                  value:weatherData.current.pressure_mb,
                  unit:"mb",
                }}
              />
              <HighLigths 
               stats = {{
                title: weatherData.location.region,
                value: weatherData.location.country,
              }}
              />
              <HighLigths 
                stats = {{
                  title: "Cloudy",
                  value:weatherData.current.cloud,
                  unit:"%",
                }}
              />
            </>
          )
        }
        
      </div>
    </div>
    </>
  )
}

export default App
