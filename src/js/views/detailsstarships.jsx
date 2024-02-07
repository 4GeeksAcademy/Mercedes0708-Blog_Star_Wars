import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsStarships = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const index = params.id;
    
    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/starships/${index}.jpg`}  className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.starships[index-1].name}</h4>
                        <p className="card-text"><b>Model: </b>{store.starships[index-1].model}</p>
                        <p className="card-text"><b>Manufacturer: </b>{store.starships[index-1].manufacturer}</p>
                        <p className="card-text"><b>Cost: </b>{store.starships[index-1].cost_in_credits}</p>
                        <p className="card-text"><b>Class: </b>{store.starships[index-1].starship_class}</p>
                        <p className="card-text"><b>Length: </b>{store.starships[index-1].length}</p>
                        <p className="card-text"><b>Speed: </b>{store.starships[index-1].max_atmosphering_speed}</p>
                        <p className="card-text"><b>Crew: </b>{store.starships[index-1].crew}</p>
                        <p className="card-text"><b>Passengers: </b>{store.starships[index-1].passengers}</p>
                        <p className="card-text"><b>Cargo: </b>{store.starships[index-1].cargo_capacity}</p>
                        <p className="card-text"><b>Consumables: </b>{store.starships[index-1].consumables}</p>
                        <p className="card-text"><b>Hyperdrive: </b>{store.starships[index-1].hyperdrive_rating}</p>
                        <p className="card-text"><b>MGLT: </b>{store.starships[index-1].MGLT}</p>
                        <p className="card-text"><b>Startship: </b>{store.starships[index-1].starship_class}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}