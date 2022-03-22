import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AccionComponentComponent } from './accion-component/accion-component.component';
import { DataServices } from './data.services';
import { HttpClientModule} from '@angular/common/http';

const AppRoutes:Routes=[

  {path:"",component:HomeComponentComponent},
  {path:"proyectos", component:ProjectsComponentComponent},
  {path:"acercaDe", component:AboutUsComponentComponent},
  {path:"contacto", component:ContactComponentComponent},

  //Le pasamos a travez de la url el id del empleado
  {path:"accion/:id", component:AccionComponentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutUsComponentComponent,
    ContactComponentComponent,
    AccionComponentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
  ],

  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
