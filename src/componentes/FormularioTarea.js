import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';


export default class FormularioTarea extends Component {
    constructor() {
        super();
        this.state = {
            titulo: "",
            responsable: "",
            descripcion: "",
            prioridad: "baja"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        document.getElementById("formulario-tarea").reset();
        
        console.log('enviando');
        

    }

    render() {
        return (
            <div className="App container">
                <div className="row"> {/*justify-content-center*/}
                    <div className="border solid m-3">
                        <Form className="card-body" id="formulario-tarea" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="text-warning font-weight-bold"> Tarea</label>
                                <input 
                                    type="text" 
                                    placeholder="Titulo de la tarea" 
                                    onChange={this.handleInput}
                                    className="form-control" 
                                    name="titulo"/>
                            </div>
                            <div className="form-group">
                                <label className="text-warning font-weight-bold"> Responsable</label>
                                <input 
                                    type="text" 
                                    placeholder="Responsable"
                                    onChange={this.handleInput}
                                    className="form-control" 
                                    name="responsable"/>                                    
                            </div>
                            <div className="form-group">
                                <label className="text-warning font-weight-bold"> Descripción</label>
                                <input 
                                    type="text" 
                                    placeholder="Descripción"
                                    onChange={this.handleInput}
                                    className="form-control" 
                                    name="descripcion"/>
                            </div>
                            <div className="form-group">
                                <label className="text-warning font-weight-bold"> Prioridad</label>
                                <select                                  
                                    className="form-control" 
                                    name="prioridad" 
                                    onChange={this.handleInput}>
                                        <option value="#">Seleccionar</option>
                                        <option value="Baja">Baja</option> 
                                        <option value="Media" >Media</option>
                                        <option value="Alta">Alta</option>
                                </select>
                            </div>
                            <div className="text-center"> 
                                <Button variant="warning" type="submit" className=" text-white">Guardar tarea</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
