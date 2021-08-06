import { Component } from 'react';

export default class CollaborationDescription extends Component {
    render (){
        return (
            <div className="collaborationController">
                <div className="collaborationDescription">
                    <img src="./img/collaboration.svg" alt="collaborationImage" className="collaborationImage" />
                    <div className="wordsUnion">
                        <h1 className="teamTitle">Una Descripcion De Nuestro Equipo</h1>
                        <p>
                            Gracias A Nuestro Equipo De Trabajo Podemos Hacer Paginas
                            Profesionales Teniendo En Cuenta La Creactividad, El Contenido,
                            El Diseño Y La Actividad Que Pueda Tener El Cliente Con El Sitio
                            Web. Tenemos En Nuestro Equipo De Trabajo Diseñadores Graficos,
                            Diseñador De Interfases (Tanto En Movil Como En Computadoras),
                            Programadores En La Interaccion Con El Usuario, Programadores
                            En El Backend, Administradores De Servidores, Y Administradores
                            De Bases De Datos.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};