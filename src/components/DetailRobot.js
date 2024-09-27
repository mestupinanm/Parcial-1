import React from 'react';
import '../App.css';

function DetailRobot({ robot }) {
    return (
        <div className="container mt-5">
            <div className="card">
                <img src={`../imagenes/robot${robot.id}.png`} className="card-img-top" alt={robot.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{robot.nombre}</h5>
                    <p className="card-text"><strong>Modelo:</strong> {robot.modelo}</p>
                    <p className="card-text"><strong>Empresa Fabricante:</strong> {robot.empresa}</p>
                    <p className="card-text"><strong>Año de Fabricación:</strong> {robot.anioFabricacion}</p>
                    <p className="card-text"><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
                    <p className="card-text">{robot.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailRobot;