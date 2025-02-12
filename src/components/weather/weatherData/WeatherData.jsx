import * as React from "react";
import "./WeatherData.css";
export default function WeatherData({ data }) {
	return (
		<>
			<div className="weather-card">
				<div className="weather-data-header">
					<div className="weather-data-header-locate">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-map-pin w-4 h-4 mx-1 "
						>
							<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>

						<p>{data.location}</p>
					</div>
				</div>
				<div className="weather-data-content">
					<div className="GradesC">
						<div className="temperature">
							<p>{data.currentConditions.temp}°C</p>
						</div>
						<div className="conditions">
							<p>{data.currentConditions.conditions}</p>
						</div>
					</div>
					<div className="general-weather">
						<div className="windspeed">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-wind w-4 h-4 mx-2"
							>
								<path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path>
								<path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path>
								<path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>
							</svg>

							<p className="mb-0">
								Wind Speed: {data.currentConditions.windspeed}{" "}
								km/h
							</p>
						</div>
						<div className="humidity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-droplets w-4 h-4 mx-2"
							>
								<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
								<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
							</svg>
							<p className="mb-0">
								Humidity: {data.currentConditions.humidity}%
							</p>
						</div>
						<div className="precipprob">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 640 512"
								fill="none"
								stroke="currentColor"
								strokeWidth="40"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-4 h-4 mx-2"
							>
								<path d="M537.6 226.6C537.6 134.8 462.7 59.7 370.6 59.7c-63.6 0-118.5 39.6-140.6 95.6-11.4-4.3-23.6-6.5-36.5-6.5-52.9 0-95.7 43-95.7 95.9 0 1 .2 2 .3 2.9-48.1 10.5-84.5 54.2-84.5 105.6C13.6 408.6 65 460 128.7 460H504c75.1 0 136-60.9 136-136 0-66.6-49-121.5-112.4-133.4z"></path>
							</svg>

							<p className="mb-0">
								Precipitation:{" "}
								{data.currentConditions.precipprob}%
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
