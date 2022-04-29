import React from 'react'
import Main from './components/Main'
import WeatherProvider from './WeatherContext/WeatherContext'

const App = () => {
    return (
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    );
}

export default App