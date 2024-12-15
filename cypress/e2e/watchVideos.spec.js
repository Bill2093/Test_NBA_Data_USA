import WatchPage from '../pages/watchPage';

describe('Watch Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.nba.com/watch/featured'); // URL de la página de Watch

    // Manejo del banner de privacidad
    WatchPage.acceptPrivacyBanner();
  });

  it('should click on the specific video box', () => {
    // Haz clic en el cuadro del video específico
    WatchPage.clickSpecificVideoBox();

    // Valida que la página cambia o que el video se carga
    cy.url().should('include', '/video'); // Ajusta según la URL de redirección del video
  });
});