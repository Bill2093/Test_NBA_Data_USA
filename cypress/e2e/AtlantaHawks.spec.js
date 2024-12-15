import AtlantaHawksPage from '../pages/AtlantaHawksPage';

describe('Atlanta Hawks Store Page', () => {
  const page = new AtlantaHawksPage();

  it('Should display products with names and prices', () => {

    page.visit();


    page.getProductCards().should('have.length.greaterThan', 0);


    page.getProductCards().each(($product) => {
 
      page.getProductTitle($product).should('exist').and('not.be.empty');

   
      page.getProductPrice($product).should('exist').and('not.be.empty');
    });
  });
});
