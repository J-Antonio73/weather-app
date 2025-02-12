const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
const BASE_URL =
	"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const getWeatherData = async (location) => {
	try {
		if (!location) {
			throw new Error("Location is required");
		}

		const response = await fetch(
			`${BASE_URL}/${encodeURIComponent(
				location
			)}?unitGroup=metric&key=${API_KEY}&contentType=json`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await response.json();
		return {
			currentConditions: {
				temp: data.currentConditions.temp,
				windspeed: data.currentConditions.windspeed,
				precipprob: data.currentConditions.precipprob,
				conditions: data.currentConditions.conditions,
				datetime: data.currentConditions.datetime,
				humidity: data.currentConditions.humidity,
				icon: data.currentConditions.icon,
			},
			hours: data.days[0].hours.map((hour) => ({
				datetime: hour.datetime,
				temp: hour.temp,
				conditions: hour.conditions,
				icon: hour.icon,
			})),
			location: data.resolvedAddress,
		};
	} catch (error) {
		throw error;
	}
};
