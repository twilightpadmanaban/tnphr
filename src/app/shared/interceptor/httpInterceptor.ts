import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtb2JpbGVfbnVtYmVyIjoiODUwODg4MzIzNyIsImV4cCI6MTY4MTU1NDM5N30.BKu6GaRXAxr8-tsMTL57IC7dfGD3a1GkjQrf9dd8x14';
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customReq = request.clone({
      url: environment.apiURL + request.url,
      headers: request.headers.set('x-access-token', token)
    });
    return next.handle(customReq);
  }
}