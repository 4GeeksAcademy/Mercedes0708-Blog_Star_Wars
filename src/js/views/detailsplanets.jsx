import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsPlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const index= params.id;

    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.planets[index-1].name}</h4>
                        <p className="card-text"><b>Rotation: </b>{store.planets[index-1].rotation_period}</p>
                        <p className="card-text"><b>Orbita: </b>{store.planets[index-1].orbital_period}</p>
                        <p className="card-text"><b>Diameter: </b>{store.planets[index-1].diameter}</p>
                        <p className="card-text"><b>Climate: </b>{store.planets[index-1].climate}</p>
                        <p className="card-text"><b>Gravity: </b>{store.planets[index-1].gravity}</p>
                        <p className="card-text"><b>Terrain: </b>{store.planets[index-1].terrain}</p>
                        <p className="card-text"><b>Water Surface: </b>{store.planets[index-1].surface_water}</p>
                        <p className="card-text"><b>Population: </b>{store.planets[index-1].population}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}