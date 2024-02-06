import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Importa el contexto

export const Navbar = () => {
    const { store, actions } = useContext(Context); // Usa el hook useContext para acceder al contexto

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <Link id="banner" to="/">
                    <a className="navbar-brand" href="#">
                        <img src="https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Logo Star Wars" width="80px" style={{ marginLeft: '20px' }} />
                    </a>
                </Link>
                <div className="ml-auto" id="navbarNavDropdown">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">
                                <a className="nav-link active" aria-current="page" href="#">Characters</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">
                                <a className="nav-link" href="#">Planets</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships">
                                <a className="nav-link" href="#">Starships</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu">
                                {store.favorites.map((value, index) => {
                                    return (
                                        <li key={index} className="dropdown-item">
                                            {value.name}
                                            <button // Utiliza un botón regular en lugar de un enlace
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    actions.deleteFav(value.id);
                                                }}
                                            >
                                             <i className="fas fa-trash"></i>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
