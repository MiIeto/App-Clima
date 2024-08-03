import { Weather } from '../../hooks/useWeather';

type WeatherDetailProps = {
	weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
	return (
		<div>
			<h2>{weather.name}</h2>
		</div>
	);
}
