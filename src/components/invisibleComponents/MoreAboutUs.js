import { Component } from 'react';

export default class MoreAboutMe extends Component {
    render (){
        return (
            <div>
                <div className="invisible opt5">
                    <div className="display-none">
                        <div className="divider">
                            <button className="exit">X</button>
                            <h1>Mas Sobre Nosotros</h1>
                        </div>
                        <p>
                            Pues Si Quieres Saber En Detalle De Que Hacemos
                            Cuales Son Nuestros Hobbys Y Mas Pues Lo Leeras A
                            Continuacion
                        </p>
                        <div className="hobbys">
                            <h4><i className="fas fa-tint"></i> Nos Gusta Ser Muy Puntuales </h4>
                            <h4><i className="fas fa-language"></i> Sabemos Ingles O Al Menos La Mayoria</h4>
                            <h4><i className="fas fa-music"></i> En Este Caso Yo Soy Musico Y Compositor</h4>
                            <h4><i className="fas fa-chalkboard-teacher"></i> Nos Encanta Enseñar Lo Que Sabemos </h4>
                            <h4><i className="fas fa-pager"></i> Tenemos 2 Años Como Corporacion </h4>
                            <h4><i className="fas fa-check"></i> Nos Gustar Ser Unicos Y Originales </h4>
                            <h4><i className="fas fa-clock"></i> Hacemos Records De Entrega </h4>
                            <h4><i className="fas fa-coffee"></i> Y Como Todo Programador Cada Uno Tenemos Una Taza De Cafe :)</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};