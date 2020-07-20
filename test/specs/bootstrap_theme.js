const HomePage = require('../pageobjects/home.page');

describe('Grocerycrud application', () => {
    it('should switch the version add a new costumer with valid credentials', () => {
        HomePage.open();

        HomePage.switchVersion(1);
        HomePage.addCustomer('Teste Sicredi', 'Teste',
          'seu nome', '51 9999-9999', 'Av Assis Brasil, 3970',
          'Torre D', 'Porto Alegre', 'RS', '91000-000', 'Brasil', 'Fixter', '200');
        HomePage.reportSuccess.waitForDisplayed();
        //console.log(HomePage.reportSuccess.getText()) //to confirm that the text matches exactly
        expect(HomePage.reportSuccess).toHaveText(
        'Your data has been successfully stored into the database. Edit Customer or Go back to list');
        browser.closeWindow();

    });
});


