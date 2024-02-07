import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailsStarships = ()=>{
    const { id } = useParams();
    const [starship, setstarship] = useState({});

   useEffect(() => {
        fetch("https://swapi.dev/api/starships/" + id)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setstarship(data.result);
          })
          .catch((error) => console.log(error));
      }, []); 

      
    return (
    <h1 className=""> por fin </h1>
    )
    /* (<>
    <div className="container">
        <div className="row">
            <div className="col">
                <img src="" />
            </div>

            <div className="col">
                <h1>{starship?.properties?.name}</h1>
                <p>{starship?.description}</p>
            </div>
        </div>
    </div>
      
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        
        <tbody>
            <tr>            
                <td>{starship?.properties?.diameter}</td>
                <td>{starship?.properties?.rotation_period}</td>
                <td>{starship?.properties?.orbital_period}</td>
                <td>{starship?.properties?.gravity}</td>
                <td>{starship?.properties?.population}</td>
                <td>{starship?.properties?.climate}</td>
                <td>{starship?.properties?.terrain}</td>
            </tr>
        </tbody>
    </table>
    
    </>) */
}