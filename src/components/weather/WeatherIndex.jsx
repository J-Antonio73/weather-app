import React, { useState, useEffect } from "react";
import PrimaryCard from "./primaryCard/PrimaryCard";
import WeatherData from "./weatherData/WeatherData";
import ErrorData from "./errorData/ErrorData";
import LoadingCard from "./loading/LoadingCard";
import DayData from "./dayData/DayData";
import { getWeatherData } from "../../services/WeatherData";
import { getCurrentLocation } from "../../lib/getCurrentLocation";
import {} from "react";
import "./WeatherIndex.css";
export default function WeatherIndex() {
	const [data, setData] = useState(null);
	const [dataError, setDataError] = useState(null);
	useEffect(() => {
		getCurrentLocation(getWeatherData, setData, setDataError);
	}, []);
	return (
		<>
			<PrimaryCard setData={setData} setDataError={setDataError} />
			{data ? (
				<>
					<WeatherData data={data} />
					<DayData data={data} />
				</>
			) : dataError ? (
				<ErrorData />
			) : (
				<LoadingCard />
			)}
		</>
	);
}
