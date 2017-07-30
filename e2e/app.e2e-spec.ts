import { NgDependencyInjectionPage } from './app.po';

describe('ng-dependency-injection App', () => {
  let page: NgDependencyInjectionPage;

  beforeEach(() => {
    page = new NgDependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
