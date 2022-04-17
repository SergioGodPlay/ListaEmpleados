import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
    
    constructor(private ventanaEmergente:ServicioEmpleadosService, private dataServices:DataServices){

    }

    empleados:Empleado[] = [];

    /*empleados:Empleado[]=[

        new Empleado("Sergio", "Sanchez", "Programador", "900.000"),
        new Empleado("Katie", "Hartmann", "Directora de Cine", "400.000"),
        new Empleado("Daniela", "Sanchez", "Abogada", "800.000"),
        new Empleado("Laura", "Torres", "Comunicadora Social", "200.000"),
        new Empleado("Ricardo", "Garay", "Auxiliar de Video y Audio", "1.200.000")
    ];*/

    setEmpleados(misEmpleados:Empleado[]){

        this.empleados = misEmpleados;
    }

    obtenerEmpleados(){

        return this.dataServices.cargarEmpleados();
    }

    agregarEmpleadoServicio(empleado:Empleado){

        this.ventanaEmergente.muestraMensaje("Persona que se va a agregar: \n" + empleado.nombre
        + " " + empleado.apellido + "\n" + "Cargo: " + empleado.cargo + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

        this.dataServices.guardarEmpleados(this.empleados);
    }

    //Creamos un nuevo metodo que se encarga de actualizar el empleado
    actualizarEmpleado(indice: number, empleado: Empleado) {
        
        let empleadoModificado = this.empleados[indice];

        empleadoModificado.nombre = empleado.nombre;

        empleadoModificado.apellido = empleado.apellido;

        empleadoModificado.cargo = empleado.cargo;

        empleadoModificado.salario = empleado.salario;
    }

    encontrarEmpleado(indice: number): Empleado {
        
        let empleado:Empleado = this.empleados[indice];

        return empleado;
    }

    //Creamos un nuevo metodo para eliminar el empleado
    eliminarEmpleado(indice: number){

        this.empleados.splice(indice, 1);
        
    }
}