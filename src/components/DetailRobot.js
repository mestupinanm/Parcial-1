import React, { useState, useEffect } from 'react';
import './DetailRobot.css';
import {FormattedMessage} from 'react-intl' ;

const DetailRobot = ({ robot }) => {
    const [imagen, setImagen] = useState("");

    const adjustImageUrl = (url) => {
        return url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
    };

    useEffect(() => {
        if (robot.imagen) {
            const newImageUrl = robot.imagen.includes("github.com")
                ? adjustImageUrl(robot.imagen)
                : robot.imagen;
            setImagen(newImageUrl);
        }
    }, [robot.imagen]);

    const handleImageError = () => {
        setImagen(""); 
    };

    return (
        <div className="robot-detail-card">
            <h3 className="robot-name">{robot.nombre}</h3>
            {imagen ? (
                <img
                    src={imagen}
                    className="robot-image"
                    alt={robot.nombre}
                    onError={handleImageError}
                />
            ) : (
                <p>No hay imagen disponible</p>
            )}
            <p className="robot-detail"><strong><FormattedMessage id="➔ Año de Fabricación:"/></strong> {robot.añoFabricacion}</p>
            <p className="robot-detail"><strong><FormattedMessage id="➔ Capacidad de Procesamiento:"/></strong> {robot.capacidadProcesamiento}</p>
            <p className="robot-detail"><strong><FormattedMessage id="➔ Humor:"/></strong> {robot.humor}</p>
        </div>
    );
}

export default DetailRobot;