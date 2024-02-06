import React, {useContext} from "react";
import { Card } from "../component/cards.jsx";
import { Context } from "../store/appContext.js";


export const Characters = ()=>{
    const {store, actions} = useContext(Context);
   
    return (
    <div className="container">
        <h1>Characters</h1>
            <div className="row">
                {store.characters.map((elm, index)=>{
                    return <Card key={index} title={elm.name} id={index +1} path={"/detailscharacters/" + index + 1} urlImg={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}/>
                })} 
            </div>
    </div>
        )
}

export default Characters; 