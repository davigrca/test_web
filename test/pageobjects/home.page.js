const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectVersion () { return $('#switch-version-select') }
    get addCustomer_Button () { return $('a[href="/demo/bootstrap_theme_v4/add"]') }
    get inputName () { return $('#field-customerName') }
    get inputLastName () { return $('#field-contactLastName') }
    get inputFirstName () { return $('#field-contactFirstName') }
    get inputPhone () { return $('#field-phone') }
    get inputAddress1 () { return $('#field-addressLine1') }
    get inputAddress2 () { return $('#field-addressLine2') }
    get inputCity () { return $('#field-city') }
    get inputState () { return $('#field-state') }
    get inputPostalCode () { return $('#field-postalCode') }
    get inputCountry () { return $('#field-country') }
    get selectEmployer () { return $('#field_salesRepEmployeeNumber_chosen') }
    get chooseEmployer () { return $('.chosen-search > input') }
    get chosenEmployer () { return $('.active-result') }
    get inputCreditLimit () { return $('#field-creditLimit') }
    get btnSubmit () { return $('button[type="submit"]') }
    get reportSuccess () { return $('#report-success') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    switchVersion (index) {
        this.selectVersion.selectByIndex(index);
    }

    addCustomer (name, lastName, firstName, phone, address1, address2,
      city, state, postalCode, country, employer, creditLimit) {
        this.addCustomer_Button.click()
        this.inputName.setValue(name);
        this.inputLastName.setValue(lastName);
        this.inputFirstName.setValue(firstName);
        this.inputPhone.setValue(phone);
        this.inputAddress1.setValue(address1);
        this.inputAddress2.setValue(address2);
        this.inputCity.setValue(city);
        this.inputState.setValue(state);
        this.inputPostalCode.setValue(postalCode);
        this.inputCountry.setValue(country);

        this.selectEmployer.scrollIntoView();
        this.selectEmployer.click();
        this.chooseEmployer.waitForDisplayed();
        this.chooseEmployer.click();
        this.chooseEmployer.setValue(employer);
        this.chosenEmployer.click();

        this.inputCreditLimit.setValue(creditLimit);
        this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('demo/bootstrap_theme/');
    }
}

module.exports = new HomePage();
