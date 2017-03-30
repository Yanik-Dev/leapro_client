import { LeproAppPage } from './app.po';

describe('lepro-app App', function() {
  let page: LeproAppPage;

  beforeEach(() => {
    page = new LeproAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
