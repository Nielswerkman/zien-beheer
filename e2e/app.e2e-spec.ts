import { ZienBeheerPage } from './app.po';

describe('zien-beheer App', () => {
  let page: ZienBeheerPage;

  beforeEach(() => {
    page = new ZienBeheerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
