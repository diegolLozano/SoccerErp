import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaComponent } from './liga/liga.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JornadaComponent } from './jornada/jornada.component';
import { JugadorComponent } from './jugador/jugador.component';
import { PartidoComponent } from './partido/partido.component';
import { JugadorFormaComponent } from './jugador/jugador-forma/jugador-forma.component';
import { LigaFormaComponent } from './liga/liga-forma/liga-forma.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { PartidoFormaComponent } from './partido/partido-forma/partido-forma.component';
import { JornadaFormaComponent } from './jornada/jornada-forma/jornada-forma.component';
import { EquipoFormaComponent } from './equipo/equipo-forma/equipo-forma.component';


const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo: ''},
  {path : 'liga', component: LigaComponent} ,
  {path : 'equipo', component : EquipoComponent},
  {path : 'jornada', component : JornadaComponent},
  {path : 'jugador', component : JugadorComponent},
  {path : 'partido', component : PartidoComponent},
  {path : 'jugador/jugador-forma', component : JugadorFormaComponent},
  {path : 'liga/liga-forma', component : LigaFormaComponent},
  {path : 'liga/liga-forma/:id', component : LigaFormaComponent},
  {path : 'tabla-general', component : TablaGeneralComponent},
  {path : 'partido/partido-forma', component: PartidoFormaComponent},
  {path : 'jornada/partido/:id', component: PartidoComponent},
  {path : 'jornada/partido', component: PartidoFormaComponent},
  {path : 'partido-forma', component: PartidoFormaComponent},
  {path : 'jornada-forma', component: JornadaFormaComponent},
  {path : 'jornada-forma/:id', component: JornadaFormaComponent},
  {path : 'partido-forma/:id', component: PartidoFormaComponent},
  {path : 'equipo-forma', component: EquipoFormaComponent},
  {path : 'equipo-forma/:id', component: EquipoFormaComponent},
  {path : 'jugador/:id', component: JugadorComponent},
  {path : 'jugador-forma', component: JugadorFormaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
