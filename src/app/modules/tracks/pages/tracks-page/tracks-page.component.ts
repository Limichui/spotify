import { Component, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'Getting Over'
    },
    {
      name: 'Snow tha Product II BZRP Music Sessions Shop (feat. Olivia))'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
