import React, { useState } from 'react';
import '../App.css';
import DetailRobot from './DetailRobot';

const robots = [
    { id: 1, nombre: "Pedrito", modelo: "PR-001", empresa: "Robotico Corp" },
    { id: 2, nombre: "IronChef", modelo: "IC-3000", empresa: "RoboCocina Inc." },
    { id: 3, nombre: "Chispita", modelo: "LT-007", empresa: "SparkBots Ltd" },
    { id: 4, nombre: "SrCalcúlin", modelo: "MC-808", empresa: "Mathematrix Solutions" },
    { id: 5, nombre: "DoctorBot", modelo: "HL-9000", empresa: "MedTech Industries" },
    { id: 6, nombre: "ZumbaTron", modelo: "ZT-2025", empresa: "DanceTech Co." }
];

function RobotList() {
    const [selectedRobot, setSelectedRobot] = useState(null);

    const handleRowClick = (robot) => {
        setSelectedRobot(robot);
    };

    return (
        <div className="container mt-5">
            {!selectedRobot ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {robots.map(robot => (
                            <tr key={robot.id} onClick={() => handleRowClick(robot)}>
                                <td>{robot.id}</td>
                                <td>{robot.nombre}</td>
                                <td>{robot.modelo}</td>
                                <td>{robot.empresa}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <DetailRobot robot={selectedRobot} />
            )}
        </div>
    );
}

export default RobotList;