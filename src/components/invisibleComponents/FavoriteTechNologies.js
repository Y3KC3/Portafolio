import { Component } from 'react';

export default class favoriteTechnologies extends Component {
    render (){
        return (
            <div>
                <div className="invisible opt4">
                    <div className="display-none">
                        <div className="divider">
                            <button className="exit">X</button>
                            <h2>Nuestras Tecnologias Favoritas</h2>
                        </div>
                        <p>
                            Nuestras Tecnologias En Este Caso Es El Stack MERN
                            Para Los Que No Saben Que Es. Es Solo MongoDB,
                            Express, React Y NodeJS.
                        </p>
                        <div className="technologies">
                            <img className="controlImage" src="./img/skills/mongodb.png" alt="MongoDB" />
                            <img className="controlImage" src="./img/skills/express.png" alt="Express" />
                            <img className="controlImage" src="./img/skills/react.png" alt="React" />
                            <img className="controlImage" src="./img/skills/nodejs.png" alt="NodeJS" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};