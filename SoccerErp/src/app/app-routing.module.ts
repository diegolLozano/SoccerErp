import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaComponent } from './liga/liga.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JornadaComponent } from './jornada/jornada.component';
import { JugadorComponent } from './jugador/jugador.component';
import { PartidoComponent } from './partido/partido.component';
import { JugadorFormaComponent } from './jugador/jugador-forma/jugador-forma.component';
import { LigaFormaComponent } from './liga/liga-forma/liga-forma.component';


const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo: ''},
  {path : 'liga',component: LigaComponent} , 
  {path : 'equipo', component : EquipoComponent}, 
  {path : 'jornada', component : JornadaComponent}, 
  {path : 'jugador', component : JugadorComponent}, 
  {path : 'partido', component : PartidoComponent},
  {path : 'jugador/jugador-forma', component :JugadorFormaComponent},
  {path : 'liga/liga-forma', component : LigaFormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
