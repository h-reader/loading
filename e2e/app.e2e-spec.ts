import { LoadingPage } from './app.po';

describe('loading App', () => {
  let page: LoadingPage;

  beforeEach(() => {
    page = new LoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
