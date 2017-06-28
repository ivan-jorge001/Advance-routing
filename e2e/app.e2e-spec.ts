import { AdvanceRoutingPage } from './app.po';

describe('advance-routing App', () => {
  let page: AdvanceRoutingPage;

  beforeEach(() => {
    page = new AdvanceRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
