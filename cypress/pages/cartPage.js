class CartPage {
    viewCart() {
      cy.get('#aod-offer-view-cart-1 > .a-button-inner > .a-button-input').click();
    }
  
    assertSubtotal(amount) {
      cy.get('#sc-subtotal-amount-activecart > .a-size-medium').should('have.text', amount);
    }
  }
  
  export default new CartPage();
  