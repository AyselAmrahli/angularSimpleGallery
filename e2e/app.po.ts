import { browser, element, by } from 'protractor';

export class NgalleryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-root h1')).getText();
  }
}
