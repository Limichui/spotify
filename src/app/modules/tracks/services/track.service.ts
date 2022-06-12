import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { 
        
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }


//Devolver canciones *¡La mejor música del mundo!*
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }
//Devolver canciones random *Lo mejor de Electrónica*
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      tap(data => console.log('KO KO KO', data)),
      mergeMap(({ data }: any) => this.skipById(data, 1)),
      //map((dataRevertida) => { //TODO: Aplicar un filtro comun de array
        //return dataRevertida.filter((track: TrackModel) => track._id !== 1)
      //})
      tap(data => console.log('OK OK OK', data)),
      catchError((err) => {
        const { status, statusText, url} = err;
        console.log('Error: Algo paso', [status, statusText]);
        return of([])
      })
    )
  }
}
