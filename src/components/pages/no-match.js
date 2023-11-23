import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return(
        <div>
            <h2>No hemos encontrado la pagina</h2>
            <Link to="/">Volver a pagina de inicio</Link>
        </div>
    );
}