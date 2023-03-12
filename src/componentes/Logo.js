import React from "react";
import logoFreeCodeCamp from "../img/fcc_primary_large.jpg"
import "../hojas-de-estilos/Logo.css"
function Logo ({logo}) {
    return (
        <div className="freecodecamp-logo-contenedor">
            <img className="freecodecamp-logo" src={logoFreeCodeCamp} alt="Logo de freeCodeCamp"/>
        </div>
    )
}

export default Logo
