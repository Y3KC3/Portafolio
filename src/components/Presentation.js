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
                    Nuestro Equipo Tiene Mas De 2 Años De Experiencia Que Esta
                    ubicado En Venezuela-Caracas, Junto A Nuestro Equipo De 
                    Desarrolladores Hacemos Trabajos De Diferentes Niveles, Desde
                    Una Pagina Informativa, Hasta Una Aplicacion Web.
                </p>
                <div className="containerButtons">
                    <button className="button1 mobile skillsC" id="skills">Habilidades</button>
                    <button className="button2 mobile projectsC" id="projects">Proyectos</button>
                    <button className="button3 mobile contactC" id="contact">Contacto</button>
                </div>
            </div>
        );
    };
};