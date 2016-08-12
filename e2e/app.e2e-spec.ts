import { Ng2HttpTestPage } from './app.po';

describe('ng2-http-test App', function() {
  let page: Ng2HttpTestPage;

  beforeEach(() => {
    page = new Ng2HttpTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
