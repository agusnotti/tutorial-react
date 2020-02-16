import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTES
import FormularioTarea from "./componentes/FormularioTarea";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Tarea from "./componentes/Tarea";

import { tareas } from "./tareas.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: tareas
    };
    this.agregarTarea = this.agregarTarea.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);
  }

  agregarTarea(tarea){
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  borrarTarea(id){
    if (window.confirm('¿Esta seguro de eliminar la tarea?')){
      this.setState({
        tareas: this.state.tareas.filter((e, i) => {
          return i !== id
        })
      })
    }
  }

  tareaHecha(id){
    //TODO
  }

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        //<Tarea tarea={tarea} idTarea={i} idTarea={i} borrarTarea={this.borrarTarea}/>
        // Revisar error de key unique en componente hijo
        <div className="col-md-4" key={i}>
            <div className="card mt-4 text-center">
              <div className="card-header">
                <h5>{tarea.titulo}</h5>
                <span className="badge badge-pill badge-warning">
                  {tarea.prioridad}
                </span>
              </div>
              <div className="card-body">
                <p>{tarea.descripcion}</p>
                <p>{tarea.responsable}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.borrarTarea.bind(this, i)}>Borrar</button>
                <button className="btn btn-info m-1" onChange={this.tareaHecha.bind(this, i)}>Hecha</button> {/*falta funcionalidad*/}
              </div>
            </div>
          </div>
      );
    });

    return (
      <div className="App">
        <Header contadorTareas= {this.state.tareas.length}/>
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-md-4">
              <FormularioTarea onAddTask={this.agregarTarea}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                {tareas}
              </div>
            </div>            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
