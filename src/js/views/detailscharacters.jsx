import React, { useContext, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsCharacters = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const index = params.id;

    return (
        <div className="card text-light bg-dark m-3" style={{ width: "540px;" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{store.characters[index-1].name}</h4>
                        <p className="card-text"><b>Height: </b>{store.characters[index-1].height}</p>
                        <p className="card-text"><b>Mass: </b>{store.characters[index-1].mass}</p>
                        <p className="card-text"><b>Hair: </b>{store.characters[index-1].hair_color}</p>
                        <p className="card-text"><b>Skin: </b>{store.characters[index-1].skin_color}</p>
                        <p className="card-text"><b>Eyes: </b>{store.characters[index-1].eye_color}</p>
                        <p className="card-text"><b>Birthday: </b>{store.characters[index-1].birth_year}</p>
                        <p className="card-text"><b>Gender: </b>{store.characters[index-1].gender}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}