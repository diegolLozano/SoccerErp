import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { LigaComponent } from './liga/liga.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JornadaComponent } from './jornada/jornada.component';
import { PartidoComponent } from './partido/partido.component';
import { LigaFormaComponent } from './liga/liga-forma/liga-forma.component';
import { JugadorFormaComponent } from './jugador/jugador-forma/jugador-forma.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { PartidoFormaComponent } from './partido/partido-forma/partido-forma.component';
import { JornadaFormaComponent } from './jornada/jornada-forma/jornada-forma.component';
import { EquipoFormaComponent } from './equipo/equipo-forma/equipo-forma.component';

@NgModule({
  declarations: [
    AppComponent,
    UbicacionComponent,
    LigaComponent,
    EquipoComponent,
    JugadorComponent,
    JornadaComponent,
    PartidoComponent,
    LigaFormaComponent,
    JugadorFormaComponent,
    TablaGeneralComponent,
    PartidoFormaComponent,
    JornadaFormaComponent,
    EquipoFormaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
