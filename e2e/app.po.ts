export class Ng2blogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2blog-app p')).getText();
  }
}
