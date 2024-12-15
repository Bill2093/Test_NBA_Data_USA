class AtlantaHawksPage {
    
    visit() {
      cy.visit('https://store.nba.com/atlanta-hawks/t-3356?ab={wt-static_graphic}{pt-home}{al-teamlinks}{ct-atlanta_hawks}');
    }
  
    
    getProductCards() {
      return cy.get('.product-card'); 
    }
  
    
    getProductTitle(product) {
      return product.find('.product-card-title'); 
    }
  

    getProductPrice(product) {
      return product.find('.product-pricing'); 
    }
  }
  
  export default AtlantaHawksPage;
  