export const getCurrentLocation = async (promise, setData, setDataError) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			promise(`${lat},${lon}`)
				.then((data) => {
					setData(data);
					setDataError(false);
				})
				.catch(() => {
					setData(null);
					setDataError(true);
				});
		});
	}
};
