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
import { PartidoEquipoComponent } from './partido-equipo/partido-equipo.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // {path : '#', redirectTo: 'liga'},
  {path : '', pathMatch : 'full', component: LoginComponent },
  {path : 'login', component: LoginComponent },
  {path : 'liga', component: LigaComponent, canActivate: [AuthGuard] } ,
  {path : 'equipo', component : EquipoComponent, canActivate: [AuthGuard] },
  {path : 'jornada', component : JornadaComponent, canActivate: [AuthGuard] },
  {path : 'jugador', component : JugadorComponent, canActivate: [AuthGuard] },
  {path : 'partido', component : PartidoComponent, canActivate: [AuthGuard] },
  {path : 'partido-equipo', component: PartidoEquipoComponent, canActivate: [AuthGuard] },
  {path : 'partido-equipo/:id', component: PartidoEquipoComponent, canActivate: [AuthGuard] },
  {path : 'jugador/jugador-forma', component : JugadorFormaComponent, canActivate: [AuthGuard] },
  {path : 'liga/liga-forma', component : LigaFormaComponent, canActivate: [AuthGuard] },
  {path : 'liga/liga-forma/:id', component : LigaFormaComponent, canActivate: [AuthGuard] },
  {path : 'tabla-general', component : TablaGeneralComponent, canActivate: [AuthGuard] },
  {path : 'partido/partido-forma', component: PartidoFormaComponent, canActivate: [AuthGuard] },
  {path : 'partido/:id', component: PartidoComponent, canActivate: [AuthGuard] },
  {path : 'jornada/partido', component: PartidoFormaComponent, canActivate: [AuthGuard] },
  {path : 'partido-forma', component: PartidoFormaComponent, canActivate: [AuthGuard] },
  {path : 'jornada-forma', component: JornadaFormaComponent, canActivate: [AuthGuard] },
  {path : 'jornada-forma/:id', component: JornadaFormaComponent, canActivate: [AuthGuard] },
  {path : 'partido-forma/:id', component: PartidoFormaComponent, canActivate: [AuthGuard] },
  {path : 'equipo-forma', component: EquipoFormaComponent, canActivate: [AuthGuard] },
  {path : 'equipo-forma/:id', component: EquipoFormaComponent, canActivate: [AuthGuard] },
  {path : 'equipo/:id', component: EquipoComponent, canActivate: [AuthGuard] },
  {path : 'jugador/:id', component: JugadorComponent, canActivate: [AuthGuard] },
  {path : 'jugador-forma', component: JugadorFormaComponent, canActivate: [AuthGuard] },
  {path : 'jugador-forma/:id', component: JugadorFormaComponent, canActivate: [AuthGuard] },
  {path : 'jornada/liga/:id', component: JornadaComponent, canActivate: [AuthGuard] },
  {path : 'tabla-general/:id', component: TablaGeneralComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
