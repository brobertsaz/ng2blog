import { Ng2blogPage } from './app.po';

describe('ng2blog App', function() {
  let page: Ng2blogPage;

  beforeEach(() => {
    page = new Ng2blogPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2blog Works!');
  });
});
