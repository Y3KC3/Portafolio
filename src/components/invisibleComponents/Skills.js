import { Component } from 'react';

export default class Skills extends Component {
    render () {
        return (
            <div>
                <div className="invisible opt">
                    <div className="display-none">
                        <div className="divider">
                            <button className="exit">X</button>
                            <h2>Nustras Habilidades</h2>
                        </div>
                        <p>
                            Estos Son Por Ahora El Conocimientos De Nuestro
                            Personal En El Ambito Profesional
                            Completos Acerca De Las Tecnologias Existente.
                        </p>
                        <div className="skillsImages">
                            <img className="controlImage" src="./img/skills/html.png" alt="skill1" />
                            <img className="controlImage" src="./img/skills/css.png" alt="skill2" />
                            <img className="controlImage" src="./img/skills/js.png" alt="skill3" />
                            <img className="controlImage" src="./img/skills/nodejs.png" alt="skill4" />
                            <img className="controlImage" src="./img/skills/react.png" alt="skill6" />
                            <img className="controlImage" src="./img/skills/git.png" alt="skill7" />
                            <img className="controlImage mdb" src="./img/skills/mongodb.png" alt="skill5" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};