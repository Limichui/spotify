import { TrackService } from '@modules/tracks/services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private TrackService: TrackService) { }

  ngOnInit(): void {
     this.TrackService.getAllTracks$() //TODO: [...]
     .subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
     })

     this.TrackService.getAllRandom$() //TODO: [...]
     .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
     })
  }

  ngOnDestroy(): void {
    
  }
}
