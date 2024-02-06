import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Card = ({title, path, description, id, urlImg})=>{
  const {actions} = useContext(Context)

  const handleOnError = (event)=> {
    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
  }

  return <div className="card" style={{width: "18rem"}}>
  <img src={urlImg} onError={handleOnError} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="row">
      <div className="col-8">
        <Link to={path}>
          <a href="#" className="btn btn-primary">Go details</a>
        </Link>
      </div>
      <div className="col-4">
        <button className="btn btn-warning" onClick={()=>{
          actions.addFav(title, id)
          }}>🧡</button>
      </div>
      
      
    </div>
    
  </div>
</div>
}