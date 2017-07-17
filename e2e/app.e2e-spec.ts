import { Angular2SpotifyPage } from './app.po';

describe('angular2-spotify App', () => {
  let page: Angular2SpotifyPage;

  beforeEach(() => {
    page = new Angular2SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
