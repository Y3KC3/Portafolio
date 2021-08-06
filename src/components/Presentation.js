import { Component } from 'react';
import Skills from '../components/invisibleComponents/Skills';
import Projects from '../components/invisibleComponents/Projects';
import Contact from '../components/invisibleComponents/Contact';

export default class Presentation extends Component {
    render (){
        return (
            <div className="presentation">
                <Skills/>
                <Projects/>
                <Contact/>
                <h1 className="title">Melvin Colmenares</h1>
                <p className="description">
                    Hola, Buenos Dias, Mi Nombre Es Melvin, Soy El Lider
                    De Un Gran Equipo De Trabajo, Nuestra Corporacion Esta
                    Forjada En El Desarrollo De Sotfware Y Aplicaciones Tanto,
                    En Moviles Como En Aplicaciones De Escritorio 
                    Nuesro Equipo Tiene Mas De 2 Años De Experiencia Que Esta
                    Hubicado En Venezuela-Caracas, Junto A Nuestro Equipo De 
                    Desarrolladores Hacemos Trabajos De Diferentes Niveles, Desde
                    Una Pagina Informativa, Hasta Una Aplicacion Web.
                </p>
                <div className="containerButtons">
                    <button className="button1" id="skills">Habilidades</button>
                    <button className="button2" id="projects">Proyectos</button>
                    <button className="button3" id="contact">Contacto</button>
                </div>
            </div>
        );
    };
};