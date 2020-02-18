import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTES
import FormularioTarea from "./componentes/FormularioTarea";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";


export default class App extends Component {
  constructor() {
    super();
    let tareas = [];
    this.state = {
      tareas: tareas
    };
    this.obtenerTareas();
    this.agregarTarea = this.agregarTarea.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);
  }

  async obtenerTareas(){
    let result = await fetch ("http://localhost:3000/tareas",{"method":"GET","headers":{"Content-Type":"application/json"}})
    if(result.status === 200){
      let tareasResult = await result.json();    
      this.setState({
        tareas: tareasResult    
      });
    }
  }

  async agregarTarea(tarea){
    let result = await fetch ("http://localhost:3000/tareas",{"method":"POST","headers":{"Content-Type":"application/json"},"body":JSON.stringify(tarea)})

    if(result.status === 201){
      let tareaResult = await result.json();
      this.setState({
        tareas: [...this.state.tareas, tareaResult]
      }) 
    }
  }

  async borrarTarea(id){
    if (window.confirm('¿Esta seguro de eliminar la tarea?')){
      let result = await fetch ("http://localhost:3000/tareas/"+ id,{"method":"DELETE","headers":{"Content-Type":"application/json"}});
      
      if(result.status === 200){
        this.setState({
          tareas: this.state.tareas.filter((e, i) => {
            return e._id !== id
          })
        })
        
      }
    }
  }

  tareaHecha(id){
    //TODO
  }

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      //console.log(tarea[i]);
      
      return (
        //<Tarea tarea={tarea} idTarea={i} idTarea={i} borrarTarea={this.borrarTarea}/>
        // Revisar error de key unique en componente hijo
        <div className="col-md-4" key={tarea._id}>
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
                <button className="btn btn-danger" onClick={this.borrarTarea.bind(this, tarea._id)}>Borrar</button>
                {/*<button className="btn btn-info m-1" onChange={this.tareaHecha.bind(this, tarea._id)}>Hecha</button> falta funcionalidad*/}
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
