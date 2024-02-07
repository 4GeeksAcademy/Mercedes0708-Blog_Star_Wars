import React, {useContext} from "react";
import { Card } from "../component/cards.jsx";
import { Context } from "../store/appContext.js";


export const Starships = ()=>{

    const {store} = useContext(Context);
    return( 
        <div className="container">
        <h1>Starships</h1>
            <div className="row">
            {store.starships.map((elm, index)=>{
                return <Card key= {index} title={elm.name} id={index+1} path={`/detailsstarships/${index +1}`} urlImg= {`https://starwars-visualguide.com/assets/img/starships/${index+1}.jpg`}/>
            })}
                
            </div>
        </div>
    )
}
export default Starships;