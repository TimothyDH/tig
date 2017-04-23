import { TrueIrishGhostsPage } from './app.po';

describe('true-irish-ghosts App', function() {
  let page: TrueIrishGhostsPage;

  beforeEach(() => {
    page = new TrueIrishGhostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
