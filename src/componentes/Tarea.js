import React, { Component } from "react";

export default class Tarea extends Component {
  render() {
    return (
      <div className="col-md-4" key={this.props.idTarea}>
        <div className="card mt-4 text-center">
          <div className="card-header">
            <h5>{this.props.tarea.titulo}</h5>
            <span className="badge badge-pill badge-warning">
              {this.props.tarea.prioridad}
            </span>
          </div>
          <div className="card-body">
            <p>{this.props.tarea.descripcion}</p>
            <p>{this.props.tarea.responsable}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.props.borrarTarea.bind(this, this.props.idTarea)}>Borrar</button>
            <button className="btn btn-info m-1">Hecha</button>
          </div>
        </div>
      </div>
    );
  }
}
