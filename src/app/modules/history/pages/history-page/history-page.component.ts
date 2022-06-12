import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResults: TrackModel[] = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void{
    //TODO: 
    console.log('Estoy en el padre ', event)
    this.searchService.searchTracks$(event)
    .subscribe(({data}) => {
      this.listResults= data
    })
  }
}
