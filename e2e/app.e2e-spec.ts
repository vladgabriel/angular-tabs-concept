import { NgTabsPage } from './app.po';

describe('ng-tabs App', () => {
  let page: NgTabsPage;

  beforeEach(() => {
    page = new NgTabsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
