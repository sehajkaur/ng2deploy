import { Ng2Flinstones2Page } from './app.po';

describe('ng2-flinstones2 App', function() {
  let page: Ng2Flinstones2Page;

  beforeEach(() => {
    page = new Ng2Flinstones2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
