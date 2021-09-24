import React,{useState,useEffect} from "react";
import WeatherCard from "./weatherCard";
import "./style.css";
const Temp = () => {
    const[searchValue,setSearchvalue]=useState("kathmandu");
	const[tempInfo,setTempInfo]=useState("");
	    const getWeatherInfo= async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&
			units=metric&appid=af8423d6bd02bc1402f575a0847aec35`;
           const res=await fetch(url);
           const data=await res.json();
           
		   const {temp,humidity,pressure}=data.main
		   const{main:weathermood}=data.weather[0]
		   const{name}=data;
		   const{speed}=data.wind;
		   const{country,sunset}=data.sys
           console.log(temp)
		   const myNewWeatherInfo={
			   temp,
			   humidity,
			   pressure,
			   weathermood,
			   name,
			   speed,
			   country,sunset
		   }
		   setTempInfo(myNewWeatherInfo);
           
        }catch(error){

        }
        
    }
    useEffect(()=>{getWeatherInfo();},[]);
	return (
		<>
			<div className="wrap">
				<div className="search">
					<input
						type="search"
						placeholder="...SEARCH"
						autoFocus
						id="search"
						className="searchTerm"
                        value={searchValue}
                        onChange={(e)=>setSearchvalue(e.target.value)}
					/>
					<button className="searchButton" type="button"
                    onClick={getWeatherInfo}>
						Search
					</button>
				</div>
			</div>
			<WeatherCard tempInfo={tempInfo}/>

			
		</>
	);
};

export default Temp;
