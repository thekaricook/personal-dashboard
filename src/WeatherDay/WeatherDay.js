export const WeatherDay = ({ date, max, min, weatherType, weatherKey }) => {
    return(
        <div>
            <div className="weather-date">{date}</div>
            <div className="weather-img">
                <img 
                alt={weatherType}
                src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
                className="weather-icon"
                />
            </div>
            
            <div className="weather-max">{max}&deg;</div><div className="weather-min">&nbsp;/&nbsp;{min}&deg;</div>
            <div className="weather-type">{weatherType}</div>
        </div>
    );
};