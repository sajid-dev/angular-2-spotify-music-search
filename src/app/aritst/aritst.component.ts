import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Artist} from '../artist';
import {Album} from '../album';
@Component({
  moduleId: module.id,
  selector: 'app-aritst',
  templateUrl: './aritst.component.html',
  styleUrls: ['./aritst.component.css'],
  providers: [SpotifyService]
})
export class AritstComponent implements OnInit {
  id: number;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotify: SpotifyService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.map(params => params['id']).subscribe((id) => {
      this._spotify.getArtist(id).subscribe(artists => {
        this.artist = artists;
      });
      this._spotify.getAlbums(id).subscribe(albums => {
        console.log(albums.items);
        this.albums = albums.items;
      });
    });
  }
}
