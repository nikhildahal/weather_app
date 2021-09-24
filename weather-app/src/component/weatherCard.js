import React from "react";
import { useEffect, useState } from "react";
const WeatherCard = ({ tempInfo }) => {
	const [weatherInfo, setWeatherInfo] = useState("");
	const {
		temp,
		humidity,
		pressure,
		weathermood,
		name,
		speed,
		country,
		sunset,
	} = tempInfo;
	useEffect(() => {
		if (weathermood) {
			switch (weathermood) {
				case "Clouds":
					setWeatherInfo("wi-day-cloudy");
					break;
				case "Haze":
					setWeatherInfo("wi-fog");
					break;
				case "Clear":
					setWeatherInfo("wi-day-sunny");
					break;
				case "Mist":
					setWeatherInfo("wi-dust");
					break;

				default:
					setWeatherInfo("wi-day-sunny");
					break;
			}
		}
	}, [weathermood]);
	let sec = sunset;
	let date = new Date(sec * 1000);
	let timeStr = `${date.getHours()}:${date.getMinutes()}`;
	return (
		<>
			<article className="widget">
				<div className="weatherIcon">
					<i className={`wi ${weatherInfo}`}></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>{temp}&deg;</span>
					</div>
					<div className="description">
						<div className="weatherCondition">{weathermood}</div>
						<div className="place">{name}</div>
					</div>
				</div>

				<div className="date">{new Date().toLocaleString()}</div>
				<div className="extra-temp">
					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-sunset"}></i>
							</p>
							<p className="extra-info-leftside">
								{timeStr} <br /> Sunset
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								{humidity} <br /> Humidity
							</p>
						</div>
					</div>
					<div className="weather-extra-info">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-rain"}></i>
							</p>
							<p className="extra-info-leftside">
								{pressure} <br /> Rain
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-strong-wind"}></i>
							</p>
							<p className="extra-info-leftside">
								{speed} <br /> Wind
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default WeatherCard;
