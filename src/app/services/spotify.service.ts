import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  searchUrl: string;
  artistUrl: string;
  albumsUrl: string;
  albumUrl: string;

  constructor(private _http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization:', 'Bearer BQBDs0dYyZQb103_4uBBRKUxogIV_ALXCY-WJmb3Z5W-aHDc_W3dRGxY9Eps6KTX3_TsSlBMlSH7A3ySY1BP9JNn_SAJXmPBJaJ_Xrr5ZCjutAQM5PcVGHahWlph4zCO6UqQXdNQawjCIJpRxkxWTpBtcTmjaM-gNLmM2plEG-fiNNst-klGhYv3ja0DOU-ahc7ObJh3GvqNjqmzqxlOZK5XdDFAO-g_VwDLkhdJzfgWeOBL-HW51WZqGGuPLWSf3qHxS6OCWeOyU8fLJwz-L8pZjthYv72EN08ESxILUoG3XcnHcGIp2WlMJeLXVfk');
  }

  searchMusic(searchMusic: string, type = 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + searchMusic + '&type=' + type + '&offset=0&limit=20&market=US/' + this.createAuthorizationHeader();
    return this._http.get(this.searchUrl).map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl).map(res => res.json());
  }

  getAlbums(artistId: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl).map(res => res.json());
  }

  getAlbum(id: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.albumUrl).map(res => res.json());
  }
}
