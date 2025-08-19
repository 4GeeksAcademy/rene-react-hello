import React, { useState } from "react";


const TrafficLight = () => {
        const [color,setColor] = useState('green');
            return(
                <>
                
               <div className = "TrafficLight">
                    <div className = "TrafficLight-Brother"> </div>
                    <div className = "TrafficLight-Uncle">
                        <div onClick={()=>setColor("green")} className = {"green light" + (color === "green"? " active" : " ")}> </div>
                        <div onClick={()=>setColor("yellow")} className = {"yellow light" + (color === "yellow"? " active" : " ")}> </div>
                        <div onClick={()=>setColor("red")} className = {"red light" + (color === "red"? " active" : " ")}> </div>
                    </div>






               </div>
                
                
                
                </>
            )


};
export default TrafficLight;