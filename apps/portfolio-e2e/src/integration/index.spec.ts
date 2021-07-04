import { getH2 } from '../support/index.po';

describe('portfolio', () => {
  beforeEach(() => cy.visit('/'));

  it('should set the correct h2 message', () => {
    getH2().should('not.exist');
  });
});
