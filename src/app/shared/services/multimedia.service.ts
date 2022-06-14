import {EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

callback:EventEmitter<any> = new EventEmitter<any>()

  myObservable1$: Observable<any> = new Observable()

  constructor() { 
    this.myObservable1$ = new Observable(
      (observer:Observer<any>) => {
        observer.next('=> Agua OK')
        
        setTimeout(() => {
          observer.complete()
        },1000)

        setTimeout(() => {
          observer.next('=> Agua OK')
        },2500)

        setTimeout(() => {
          observer.error('=> Agua no OK')
        },3500)
      }
    )
  }
}
