export class Md2BeerWeekPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('md2-beer-week-app h1')).getText();
  }
}
