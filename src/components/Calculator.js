import { Component } from 'react';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculatorController">
                <div className="unionInTheCalculator">
                    <div className="calculatorContent">
                        <h2>Calculadora</h2>
                        <p>
                            Si Quieres Sacar Tus Calculos Matematicos Tambien Podemos Crearte
                            Una Calculadora Personalizada Para Ti, Hasta Los Profesores Se 
                            Volveran Locos De Tantos Numeros Que Podran ver. Pruebalo!!.
                        </p>
                    </div>
                    <div className="calculator">
                        <div className="calculatorNumber">
                            <div className="calculatorResults"><span id="calculatorResults" ></span></div>
                            <input type="button" id="(" value="(" className="buttonSigns"/>
                            <input type="button" id=")" value=")" className="buttonSigns"/>
                            <input type="button" id="%" value="%" className="buttonSigns"/>
                            <input type="button" id="CE" value="CE" className="buttonSigns"/>
                            <input type="button" id="number7" value="7" className="buttonNumber"/>
                            <input type="button" id="number8" value="8" className="buttonNumber"/>
                            <input type="button" id="number9" value="9" className="buttonNumber"/>
                            <input type="button" id="/" value="/" className="buttonSigns"/>
                            <input type="button" id="number4" value="4" className="buttonNumber"/>
                            <input type="button" id="number5" value="5" className="buttonNumber"/>
                            <input type="button" id="number6" value="6" className="buttonNumber"/>
                            <input type="button" id="*" value="*" className="buttonSigns"/>
                            <input type="button" id="number1" value="1" className="buttonNumber"/>
                            <input type="button" id="number2" value="2" className="buttonNumber"/>
                            <input type="button" id="number3" value="3" className="buttonNumber"/>
                            <input type="button" id="-" value="-" className="buttonSigns"/>
                            <input type="button" id="." value="." className="buttonSigns"/>
                            <input type="button" id="number0" value="0" className="buttonNumber"/>
                            <input type="button" id="=" value="=" className="buttonSigns buttonResults"/>
                            <input type="button" id="+" value="+" className="buttonSigns"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};