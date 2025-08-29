import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Nagpur",
        feelslike: 24.84,
        temp: 25.85,
        tempMin: 25.65,
        tempMax: 25.65,
        humidity: 45,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}