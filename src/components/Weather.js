import { useEffect, useState } from 'react';
import { WeatherDay } from '../WeatherDay/WeatherDay';

const Weather = () => {

  const locationKey = '36748_PC';
  const apiKey = 'zNVnK99AA4zBhATn1GT4o3W2ydVczyoG';

  const [weatherInfo, setWeatherInfo] = useState();

  const padNum = (num) => {
    const stringNum = num + '';
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return '0' + stringNum;
    } else {
        return stringNum;
    }
  };


  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setWeatherInfo(res.DailyForecasts
        .map(df => {
          return {
            date: df.Date.substring(10, 5),
            min: df.Temperature.Minimum.Value,
            max: df.Temperature.Maximum.Value,
            weatherType: df.Day.IconPhrase,
            weatherKey: padNum(df.Day.Icon),
          }
        }))
      });
  }, []);

  return (
    <div className="main-weather">
      {!!weatherInfo && weatherInfo.map((i, index) => (
        <div className="weather-day" key={index}>
          <WeatherDay 
            date={i.date}
            min={i.min} 
            max={i.max} 
            weatherType={i.weatherType} 
            weatherKey={i.weatherKey} />
        </div>
      ))}
    </div>
  );
}

export default Weather;