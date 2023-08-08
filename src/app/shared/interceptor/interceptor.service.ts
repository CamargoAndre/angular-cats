import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('auth'),
      'Content-Type': 'application/json',
    });

    const cloneReq = req.clone({ headers });


    return next.handle(cloneReq);
  }
}
