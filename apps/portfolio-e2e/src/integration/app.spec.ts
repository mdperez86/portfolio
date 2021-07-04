import { getH1, getTitle } from '../support/app.po';

describe('portfolio', () => {
  beforeEach(() => cy.visit('/'));

  it('should set the correct title message', () => {
    getTitle().contains('Discover my modest web space!');
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getH1().contains('Discover my modest web space!');
  });
});
