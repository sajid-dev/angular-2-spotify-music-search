import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SearchComponent} from './search/search.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {AritstComponent} from './aritst/aritst.component';
import {AlbumComponent} from './album/album.component';
const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: AritstComponent},
  {path: 'album/:id', component: AlbumComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    NavbarComponent,
    AritstComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
