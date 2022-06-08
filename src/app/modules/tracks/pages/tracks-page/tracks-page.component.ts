import { Component, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '../../services/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private TrackService: TrackService) { }

  ngOnInit(): void {
    //const { data }: any = (dataRaw as any).default
    //this.mockTracksList = data;
    const observer1$ = this.TrackService.dataTracksTrending$
      .subscribe (response => {
        this.tracksTrending = response
        this.tracksRandom = response
        console.log('Canciones trending ->', response)
      })
    
      const observer2$ = this.TrackService.dataTracksRandom$
      .subscribe (response => {
        this.tracksRandom = [...this.tracksRandom, ...response]
        console.log('Canción randon entrando..->', response)
      })

    this.listObservers$ = [observer1$,observer2$]

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    
  }
}
