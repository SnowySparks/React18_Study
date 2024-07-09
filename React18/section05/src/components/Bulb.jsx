import { useState } from "react";
const Bulb = () => {
    const [light, setLight] = useState("OFF");
    console.log(light)
    return (
      <div> 
        {light === "ON" ? (<h1 style={{backgroundColor : "orange"}}>ON</h1>) : 
        (<h1 style={{backgroundColor : "grey"}}>OFF</h1>)
        }
        <button onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF") }}>
        {light === "ON" ? "끄기" : "키기"}
        </button>
      </div>
    )
  } 
export default Bulb