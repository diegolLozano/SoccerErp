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
                location.reload(true);
            }
            if (err.status === 403) {
                return throwError('Este Usuario no cuenta con los permisos necesarios');
            }
            if (err.status === 400) {
                return throwError(err.error.message);
            }

            const error = err.message || err.statusText;
            return throwError(error);
        }));
    }
}
