import { Component } from 'react';

export default class Arrow extends Component {
    render (){
        return (
            <div>
                <button className="arrow-left"><i className="fas fa-arrow-right"></i></button>
            </div>
        );
    };
};