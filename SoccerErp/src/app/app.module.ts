import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { LigaComponent } from './liga/liga.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JornadaComponent } from './jornada/jornada.component';
import { PartidoComponent } from './partido/partido.component';

@NgModule({
  declarations: [
    AppComponent,
    UbicacionComponent,
    LigaComponent,
    EquipoComponent,
    JugadorComponent,
    JornadaComponent,
    PartidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
