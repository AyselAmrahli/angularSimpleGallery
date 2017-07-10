import { NgalleryPage } from './app.po';

describe('ngallery App', () => {
  let page: NgalleryPage;

  beforeEach(() => {
    page = new NgalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng works!');
  });
});
