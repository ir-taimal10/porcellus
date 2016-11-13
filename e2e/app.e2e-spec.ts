import { PorcellusPage } from './app.po';

describe('porcellus App', function() {
  let page: PorcellusPage;

  beforeEach(() => {
    page = new PorcellusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
