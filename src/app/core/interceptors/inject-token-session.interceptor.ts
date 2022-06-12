import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectTokenSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*console.log('Hola ->',request);
    return next.handle(request);
    */
    try{
      const token = this.cookieService.get('token')
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest);
    }catch (e){
      console.log('Ocurrio un error inesperado', e);
      return next.handle(request);
    }
    
  }
}
