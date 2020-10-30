import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrNotificationService } from '../services/toastr/toastr-service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private toastrNotificationService: ToastrNotificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(

                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    let errorObject: any = {};

                    if (error.status == 400) {
                        if (error.error.errors != null) {
                            errorObject.modelStateValidationErros = error.error.errors;
                        }
                    }

                    errorMessage = error.error.errorMessage ?? 'Exception occured while processing request';
                    errorObject.errorMessage = errorMessage;
                    this.toastrNotificationService.failed(errorMessage);
                    return throwError(errorObject);
                })
            )
    }
}