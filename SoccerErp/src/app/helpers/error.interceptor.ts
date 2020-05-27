import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() {}
// private authenticationService: AuthenticationService
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                localStorage.removeItem('jwt');
            }
            if (err.status === 403) {
                return throwError('Este Usuario no cuenta con los permisos necesarios');
            }
            if (err.status === 400) {
                if(err.error instanceof Blob)
                    return throwError('Se genero un error creando el archivo, por favor intente de nuevo o contacte a su proveedor');

                return throwError(err.error.message);
            }

            const error = "Se genero un error en el servidor, por favor intente de nuevo o contacte a su proveedor";//err.message || err.statusText;
            return throwError(error);
        }));
    }
}
