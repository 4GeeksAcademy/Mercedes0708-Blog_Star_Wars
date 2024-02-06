import React, {useContext} from "react";
import { Card } from "../component/cards.jsx";
import { Context } from "../store/appContext.js";


export const Planets = ()=>{

    const {store} = useContext(Context);
    return (
        <div className="container">
        <h1>Planets</h1>
            <div className="row">
            {store.planets.map((elm, index)=>{
                return <Card key={index} title={elm.name} id={index + 1} path={"/detailsplanets/" + index + 1} urlImg={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}/>
               
            })}
            </div>
        </div>
    )
}
export default Planets; 
