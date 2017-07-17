import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../album';
@Component({
  moduleId: module.id,
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  id: number;
  album: Album;

  constructor(private _spotify: SpotifyService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    {
      this._route.params.map(params => params['id']).subscribe((id) => {
        this._spotify.getAlbum(id).subscribe(album => {
          console.log(album);
          this.album = album;
        });
      });
    }
  }
}
