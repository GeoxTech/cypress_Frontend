class ProductPage {
    selectProduct() {
      cy.get('[data-asin="B003Y5RYNY"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-spacing-none > .a-link-normal > .a-size-medium').click();
    }
  
    buyOptionButton() {
      cy.get('#buybox-see-all-buying-choices > .a-button-inner > .a-button-text').click();
      //cy.get('#a-autoid-2-offer-1 > .a-button-inner > .a-button-input').click();
    }

    addToCart() {
        //cy.get('#a-autoid-2-offer-1 > .a-button-inner > .a-button-input').click();
        cy.get('#a-autoid-2-offer-1 > span > input').click();
    }
  }
  
export default new ProductPage();
  