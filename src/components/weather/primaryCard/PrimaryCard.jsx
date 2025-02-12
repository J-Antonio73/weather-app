import { useEffect, useState } from "react";
import { getWeatherData } from "../../../services/WeatherData";
import { getCurrentLocation } from "../../../lib/getCurrentLocation";
import "./PrimaryCard.css";
export default function PrimaryCard({ setData, setDataError }) {
	const [city, setCity] = useState("");

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const handleClickSearch = () => {
		getWeatherData(city)
			.then((data) => {
				setData(data);
				setDataError(false);
			})
			.catch((error) => {
				setData(null);
				setDataError(true);
			});
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			getWeatherData(city)
				.then((data) => {
					setData(data);
					setDataError(false);
				})
				.catch((error) => {
					setData(null);
					setDataError(true);
				});
		}
	};

	return (
		<>
			<div className="weather-card">
				<div className="weather-primary-header">
					<div className="weather-primary-header-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="52"
							height="52"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
						</svg>
					</div>
					<div>
						<h1> Weather Forecast </h1>
					</div>
				</div>
				<div className="weather-location-content">
					<div className="location-text">
						<p className="text-center">
							Enter your city to get the weather.
						</p>
					</div>

					<div className="location-input-container input-group mb-3">
						<span
							className="input-group-text bg-dark text-white border-0 search-pointer"
							id="basic-addon1"
							onClick={handleClickSearch}
						>
							<i className="fa-solid fa-magnifying-glass text-white"></i>
						</span>
						<input
							type="text"
							className="form-control bg-dark text-white border-0 shadow-none"
							placeholder="Enter your city."
							aria-label="city"
							aria-describedby="basic-addon1"
							id="city"
							onChange={handleCityChange}
							onKeyDown={handleKeyDown}
						/>
					</div>

					<div className="location-btn-container">
						<button
							className="btn btn-dark"
							type="button"
							onClick={() => {
								getCurrentLocation(
									getWeatherData,
									setData,
									setDataError
								);
							}}
						>
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
								className="lucide lucide-map-pin w-4 h-4"
							>
								<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>{" "}
							Use my current location.
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
