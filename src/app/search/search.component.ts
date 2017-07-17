import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../artist';
@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _searchUrl: SpotifyService) {
  }

  findStr() {
    this._searchUrl.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
