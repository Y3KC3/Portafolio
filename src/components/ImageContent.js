import { Component } from 'react';
import FavoriteTechnologies from './invisibleComponents/FavoriteTechNologies';
import MoreAboutUs from './invisibleComponents/MoreAboutUs';

export default class ImageContent extends Component {
    render (){
        return (
            <div>
                <FavoriteTechnologies/>
                <MoreAboutUs/>
                <img src="./img/mainAnimation1.png" className="mainImage" alt="main"/>
                <div className="containerButtons2">
                    <button className="button1 mobile favoriteTechnologiesC" id="favoriteTechnologies">Tecnologias Favoritas</button>
                    <button className="button2 mobile moreAboutUsC" id="moreAboutUs">Mas Sobre Mi</button>
                </div>
            </div>
        );
    };
};