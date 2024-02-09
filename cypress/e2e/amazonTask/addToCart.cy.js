import homePage from '../../pages/homePage.js';
import productPage from '../../pages/productPage.js';
import cartPage from '../../pages/cartPage.js';

describe('Amazon Marketplace', () => {
  beforeEach(() => {
    homePage.visit();
  })

  it('Adding item to cart and asserting the price', () => {
    homePage.searchProduct('TP-Link N450 WiFi Router - Wireless Internet Router for Home (TL-WR940N)');
    productPage.selectProduct();
    productPage.buyOptionButton();
    productPage.addToCart();
    cartPage.viewCart();
    cartPage.assertSubtotal('$75.19');
  })
});

