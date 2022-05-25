import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){

    }

    cargarEmpleados(){

        return this.httpClient.get("https://mis-clientes-ac65c-default-rtdb.firebaseio.com/datos.json");
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put("https://mis-clientes-ac65c-default-rtdb.firebaseio.com/datos.json", empleados).subscribe(

            response=>console.log("Se han guardado los empleados " + response),
            
            error=> console.log("Error " + error),
        );

    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let url = "https://mis-clientes-ac65c-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.put(url, empleado).subscribe(

            response=>console.log("Se ha actualizado correctamente el empleado " + response),
            
            error=> console.log("Error " + error),
        );

    }

    eliminarEmpleado(indice:number){

        let url = "https://mis-clientes-ac65c-default-rtdb.firebaseio.com/datos/" + indice + ".json";

        this.httpClient.delete(url).subscribe(

            response=>console.log("Se ha eliminado correctamente el empleado " + response),
            
            error=> console.log("Error " + error),
        );

    }

}