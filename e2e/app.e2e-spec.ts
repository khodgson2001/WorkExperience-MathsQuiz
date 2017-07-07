import { KieranPage } from './app.po';

describe('kieran App', () => {
  let page: KieranPage;

  beforeEach(() => {
    page = new KieranPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
