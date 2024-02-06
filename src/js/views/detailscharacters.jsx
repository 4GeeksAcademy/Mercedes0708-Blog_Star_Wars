import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const DetailsCharacters = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacter(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src=""
            />
          </div>
          <div className="col">
            <h1>{character?.properties?.name}</h1>
            <p>{character?.description}</p>
          </div>
        </div>
      </div>
      <table className="table my-5 lg">
        <thead>
          <tr>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Hair Color</th>
            <th scope="col">Skin Color</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>{character?.properties?.height}</td>
            <td>{character?.properties?.mass}</td>
            <td>{character?.properties?.hair_color}</td>
            <td>{character?.properties?.skin_color}</td>
            <td>{character?.properties?.eye_color}</td>
            <td>{character?.properties?.birth_year}</td>
            <td>{character?.properties?.gender}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};