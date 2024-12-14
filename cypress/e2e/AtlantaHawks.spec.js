import AtlantaHawksPage from '../pages/AtlantaHawksPage';

describe('Atlanta Hawks Store Page', () => {
  const page = new AtlantaHawksPage();

  it('Should display products with names and prices', () => {
    // Visitar la página
    page.visit();

    // Verificar que haya productos
    page.getProductCards().should('have.length.greaterThan', 0);

    // Verificar que cada producto tenga nombre y precio
    page.getProductCards().each(($product) => {
      // Verificar el título del producto
      page.getProductTitle($product).should('exist').and('not.be.empty');

      // Verificar el precio del producto
      page.getProductPrice($product).should('exist').and('not.be.empty');
    });
  });
});
