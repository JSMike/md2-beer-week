import { Md2BeerWeekPage } from './app.po';

describe('md2-beer-week App', function() {
  let page: Md2BeerWeekPage;

  beforeEach(() => {
    page = new Md2BeerWeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('md2-beer-week works!');
  });
});
