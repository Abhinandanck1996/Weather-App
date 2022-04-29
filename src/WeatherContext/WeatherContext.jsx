import { createContext ,useState} from "react";


const api = {
  key: "ab451885571441685b8fa8a8b4ad041a",
  base: "https://api.openweathermap.org/data/2.5/",
};
export let WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
      const [query, setQuery] = useState("");
      const [weather, setWeather] = useState({});
  const dateBuilder = d => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
      const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery("");
              console.log(result);
            });
        }
      };
    return (
        <WeatherContext.Provider value={{query,weather,setQuery,search,dateBuilder}}>
{children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;