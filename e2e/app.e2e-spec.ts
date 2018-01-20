import { IdeaFixPage } from './app.po';

describe('idea-fix App', function() {
  let page: IdeaFixPage;

  beforeEach(() => {
    page = new IdeaFixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
