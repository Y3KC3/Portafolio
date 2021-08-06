import { Component } from 'react';

export default class Projects extends Component {
    render (){
        return (
            <div>
                <div className="invisible opt2">
                    <div className="display-none">
                        <div className="divider">
                            <button className="exit">X</button>
                            <h1>Nuestros Proyectos</h1>
                        </div>
                        <p>
                            Gracias A Nuestro Servicio Pudimos Crear Multiples Proyectos,
                            De Acuerdo Al Ambito Profesional. Y Esperamos Seguir Creciendo
                            Tanto Laboral Como En Profesionalismo.
                        </p>
                        <div className="projects">
                            <div className="complement">
                                <i className="far fa-smile-beam"></i>
                                <h4>Clientes: 15</h4>
                            </div>
                            <div className="complement">
                                <i className="fas fa-project-diagram"></i>
                                <h4>Proyectos De Equipo: 22</h4>
                            </div>
                            <div className="complement">
                                <i className="far fa-star"></i>
                                <h4>Reputacion: 15/15</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};