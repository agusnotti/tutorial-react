import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return(                           
            <nav className="navbar bg-warning navbar-light">
                <h3 className="text-white solid font-italic">
                    Administrador de Tareas
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.contadorTareas}
                    </span>
                </h3>
            </nav>
        );
    }
}