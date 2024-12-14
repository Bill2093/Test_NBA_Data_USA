class AtlantaHawksPage {
    // URL de la página
    visit() {
      cy.visit('https://store.nba.com/atlanta-hawks/t-3356?ab={wt-static_graphic}{pt-home}{al-teamlinks}{ct-atlanta_hawks}');
    }
  
    // Selector para los productos
    getProductCards() {
      return cy.get('.product-card'); // Cambia este selector según el HTML
    }
  
    // Obtener el título del producto
    getProductTitle(product) {
      return product.find('.product-card-title'); // Cambia este selector según el HTML
    }
  
    // Obtener el precio del producto
    getProductPrice(product) {
      return product.find('.product-pricing'); // Cambia este selector según el HTML
    }
  }
  
  export default AtlantaHawksPage;
  