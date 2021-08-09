import { Component } from 'react';

export default class Contact extends Component {
    render (){
        return (
            <div>
                <div className="invisible opt3">
                    <div className="display-none">
                        <div className="divider">
                            <button className="exit">X</button>
                            <h1>Como Contactarnos</h1>
                        </div>
                        <p>
                            Si Deseas solicitarnos Para Alguna Cosa me
                            Puedes Contactar A Los Siguientes Enlaces.
                        </p>
                        <div className="contact">
                            <h3><i className="fab fa-facebook"></i> Facebook: <a href="https://www.facebook.com/profile.php?id=100011097109271" className="contactRoutes" rel="noreferrer" target="_BLANK">Facebook</a></h3>
                            <h3><i className="fab fa-instagram"></i> Instagram: <a href="https://www.instagram.com/melvin_mc16/?hl=es-la" className="contactRoutes" rel="noreferrer" target="_BLANK">Instagram</a></h3>
                            <h3><i className="far fa-envelope"></i> Correo: Priv</h3>
                            <h3><i className="fas fa-phone"></i> Telefono: Priv</h3>
                            <h3><i className="fab fa-github"></i> Github: <a href="https://github.com/Y3KC3" className="contactRoutes" rel="noreferrer" target="_BLANK">Github</a></h3>
                            <h3><i className="fab fa-linkedin-in"></i> Linkedin: <a href="https://www.linkedin.com/in/melvin-abraham-colmenares-mendoza-a168a4217/" className="contactRoutes" rel="noreferrer" target="_BLANK">linkedin</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};