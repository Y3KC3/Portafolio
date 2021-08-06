import { Component } from 'react';

export default class TimeCycle extends Component {
    render(){
        return (
            <div className="timeCycleController">
                <div className="timeCycle">
                    <div className="TimeCycledescriptionContainer">
                        <h1>Ciclo De Tiempo</h1>
                        <p>
                            En Este Ejemplo Podemos Ver Multiples Funcionalidades Relacionadas
                            Al Tiempo, Podemos Ver 3 Caracteristicas, Como Por Ejemplo: El Temporizador,
                            El Cronometro Y La Hora, Vamos!!! Pruebalo.
                        </p>
                        <div className="timeDivider">
                            <i className="far fa-clock timeCycleIcons timeActive" id="selectClock"></i>
                            <i className="fas fa-stopwatch timeCycleIcons" id="selectStopwatch"></i>
                            <i className="fas fa-hourglass-half timeCycleIcons" id="selectTimer"></i>
                        </div>
                    </div>
                    <div className="showTime">
                        <div className="widget">
                            <div className="date">
                                <p id="dayWeek" className="dayWeek"></p>
                                <p id="day" className="day"></p>
                                <p>De</p>
                                <p id="month" className="month"></p>
                                <p>Del</p>
                                <p id="year" className="year"></p>
                            </div>
                            <div className="clock">
                                <p id="hours" className="hour"></p>
                                <p>:</p>
                                <p id="minutes" className="minute"></p>
                                <p>:</p>
                                <div className="secondsBox">
                                    <p id="ampm" className="ampm"></p>
                                    <p id="seconds" className="seconds"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stopwatchContainer d-none">
                        <div className="timeContainer">
                            <div className="stopwatch">
                                <span id="time">00:00:00.00</span>
                            </div>
                        </div>
                        <div className="stopwatchButtonContainer">
                            <button id="btn-start"><i className="fas fa-play"></i></button>
                            <button id="btn-pause" className="d-none"><i className="fas fa-pause"></i></button>
                            <button id="btn-reset"><i className="fas fa-stop"></i></button>
                        </div>
                    </div>
                    <div className="timerMain d-none">
                        <div className="timerContainer">
                            <div className="timer">
                                <span id="timer">00:00:00</span>
                            </div>
                        </div>
                        <div className="timerButtonContainer">
                            <button id="btn-start-timer">Iniciar</button>
                            <button id="btn-stop-timer" className="d-none">Parar</button>
                            <button id="btn-reset-timer" className="d-none">Reiniciar</button>
                            <button id="btn-configuration">Editar</button>
                        </div>
                    </div>
                    <audio id="alarm" controls>
                        <source type="audio/mp3" src="./alarm.mp3" />
                    </audio>
                </div>
            </div>
        );
    };
};