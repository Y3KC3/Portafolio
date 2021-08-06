import { Component } from 'react';

export default class SecondPart extends Component {
    render (){
        return (
            <div className="secondPart" id="secondPart">
                <div className="loginContainer">
                    <div className="loginForm">
                        <h1 className="loginFormTitle">Login</h1>
                        <div className="inputGroup">
                            <i className="fas fa-user"></i>
                            <input type="text" id="userName" placeholder="Nombre De Usuario" className="inputControl" autoComplete="off" maxLength="20"/>
                        </div>
                        <div className="inputGroup containerPassword selector">
                            <i className="fas fa-lock"></i>
                            <div className="union">
                                <input type="password" id="password" placeholder="Contraseña" className="inputControl" autoComplete="off" maxLength="20"/>
                            </div>
                            <i className="fas fa-eye-slash" id="eye"></i>
                        </div>
                        <input type="submit" value="Enviar" className="buttonSubmit" id="submitData"/>
                    </div>
                    <div className="loginDescription">
                        <h1>Sistema De Registro Y Login</h1>
                        <p>
                            En Este Ejemplo Podemos Ver Un Sistema De Login Un Tanto Simple Pero
                            Muy Util Al Tener Un Control De Usuarios. Si Quieres Probar Este Login
                            Puedes Colocar Los Siguientes Datos: <br/><br/> Nombre De Usuario: unaPrueba.
                            <br/> Contraseña: 123456. <br/><br/> En Conclusion Podemos Incluir Un Sistema
                            De Registro Y Login A Su Pagina.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};