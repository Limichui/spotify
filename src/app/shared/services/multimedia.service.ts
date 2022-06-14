import {EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

callback:EventEmitter<any> = new EventEmitter<any>()

  //myObservable1$: Observable<any> = new Observable()
  //myObservable1$: Subject<any> = new Subject()
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Agua')

  constructor() { 
    setTimeout(() => {
      this.myObservable1$.next('Envia agua')
    },1000)

    setTimeout(() => {
      this.myObservable1$.next('Envia agua')
    },2000)

    setTimeout(() => {
      this.myObservable1$.next('XXXX')
    },3500)
    /* this.myObservable1$ = new Observable(
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
    )*/ 
  }
}
