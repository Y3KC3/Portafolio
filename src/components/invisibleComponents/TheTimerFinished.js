import { Component } from 'react';

export default class TheTimerFinished extends Component {
    render (){
        return (
            <div className="theTimerFinished">
                <i className="fas fa-history"></i>
                <h4>Ha! Finalizado El Temporizador</h4>
                <button id="accept">Aceptar</button>
            </div>
        );
    };
};