class HomePage {
    visit() {
      cy.visit('https://www.amazon.com/');
    }
  
    searchProduct(productName) {
      cy.get('#twotabsearchtextbox').type(productName);
      cy.get('#nav-search-submit-button').click();
    }
  }
  
export default new HomePage();
  