import { Component } from 'react';

export default class NightMode extends Component {
    render() {
        return (
            <div className="nightMode">
                <div className="backgroundColorWhite">
                    <div className="nightModeDescriptionContainer">
                        <h2>Modo Nocturno</h2>
                        <p>
                            Puedes Ver Un Ejemplo Del Modo Nocturno Para Ti En Este Instante,
                            Gracias A Esto No Te Dañaras La Vista, Quizas Te Preguntaras.
                            Porque No La Pusimos Arriba, Y La Razon Es Que Todo Cambia A Tu Alrededor
                            Si Quieres Revisarlo Puedes Probarlo.
                        </p>
                    </div>
                    <div className="nightModeButton">
                        <div className="nightModeBackground" id="nightModeBackground">
                            <div className="nightModeCircle" id="nightModeCircle">
                                <i className="fas fa-sun" id="sun"></i>
                                <i className="far fa-moon" id="moon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};