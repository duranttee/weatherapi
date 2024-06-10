
import { useState } from "react"
import SearchCity from "./components/SearchCity"
import WeatherCard from "./components/WeatherCard"
import './assets/css/index.css'


const App = () => {
  const [cities, setCities] = useState(["Tuxtepec"])
  



  return (
    <div className="container">
    <h1> Weather app </h1>
    <hr />
    <SearchCity cities={cities} setCities={setCities} />
    <hr />
    <div className="row"/>
      <div className="col"/>
        <div className="row"/>
          {
            cities.map((city, index) => (
              <WeatherCard key={index} city={city}/> 
            ))
            
          }    
    </div>
  )
}

export default App
