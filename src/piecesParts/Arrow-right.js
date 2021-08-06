import { Component } from 'react';

export default class ArrowRight extends Component {
    render (){
        return (
            <div className="container-button-right">
                <button className="arrow-right"><i className="fas fa-arrow-left"></i></button>
            </div>
        );
    };
};