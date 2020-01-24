import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

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
import { PartidoEquipoComponent } from './partido-equipo/partido-equipo.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

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
    EquipoFormaComponent,
    PartidoEquipoComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
