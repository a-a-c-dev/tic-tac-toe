describe('Game flow', () => {
  it('simulate game play', () => {
    cy.visit('http://localhost:3001/tic-tac-toe');
    //checking for next player
    cy.findByText(/next player: x/i).should('be.visible')

    // press on square to make X the winner
    cy.get('.square').then($elements => {cy.wrap($elements[0]).click();});
    cy.findByText(/next player: o/i).should('be.visible')
    cy.get('.square').then($elements => {cy.wrap($elements[1]).click();});
    cy.get('.square').then($elements => {cy.wrap($elements[3]).click();});
    cy.get('.square').then($elements => {cy.wrap($elements[2]).click();});
    cy.get('.square').then($elements => {cy.wrap($elements[6]).click();});
    // validate the x is the winner and that the score is
    cy.findByText(/x: 1 circle: 0/i).should('be.visible');
    cy.findByRole('heading', {name: /well done x!/i}).should('be.visible');
  
    // reset the game board
    cy.findByRole('button', {name: /new game/i}).click();
    // making sure that the board is initialize
    cy.findByText(/next player: o/i).should('be.visible');
    cy.findByRole('button', {name: /reset game/i}).should('be.visible');
  
  
  
  
  
  })



})