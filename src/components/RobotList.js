import React, { useState, useEffect } from 'react';
import './RobotList.css';
import DetailRobot from './DetailRobot';

function RobotList() {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/robots')  
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(error => console.error('Error fetching robots:', error));
    }, []);

    const handleRowClick = (robot) => {
        setSelectedRobot(robot);
    };

    return (
        <div className="robot-list-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Modelo</th>
                        <th>Empresa Fabricante</th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map(robot => (
                        <tr key={robot.id} onClick={() => handleRowClick(robot)}>
                            <td>{robot.id}</td>
                            <td>{robot.nombre}</td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedRobot && (
                <div className="robot-details-container">
                    <DetailRobot robot={selectedRobot} />
                </div>
            )}
        </div>
    );
}

export default RobotList;