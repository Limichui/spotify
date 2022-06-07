import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; //TODO: Programación reactiva
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    name:'Gioli & Assia',
    album:'BEBE (Oficial)',
    url:'http://localhost/track.mp3',
    _id: 1 //depende si la BD es SQL o NoSQL
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción...', response)
      }
    )
    this.listObservers$ = [observer1$]
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('BOOM!!!')
  }

}
