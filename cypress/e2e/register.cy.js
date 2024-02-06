import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as signupPage from "@tests/pages/signup.page";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";
import { RANDOM_STRINGS } from "../data/register.data";

describe("Register Test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("Successfull register with random email", () => {
    element.clearAndFillField(
      loginPage.signupNameField,
      RANDOM_STRINGS + "@gmail.com"
    );
    element.clearAndFillField(
      loginPage.signupEmailField,
      RANDOM_STRINGS + "@gmail.com"
    );
    element.click(loginPage.signupBtn);
    element.wait(3000);

    element.click(signupPage.mrRadioBtn);
    element.clearAndFillField(signupPage.passwordField, "11111");

    element.select(signupPage.daysDropDown, 12);
    element.select(signupPage.monthsDropDown, "February");
    element.select(signupPage.yearsDropDown, "1996");

    element.clearAndFillField(signupPage.firstNameField, "11111");
    element.clearAndFillField(signupPage.lastNameField, "11111");
    element.clearAndFillField(signupPage.companyField, "11111");
    element.clearAndFillField(signupPage.addressField, "11111");

    element.select(signupPage.countryDropDown, "Singapore");

    element.clearAndFillField(signupPage.companyField, "Automation Pte Ltd");
    element.clearAndFillField(signupPage.stateField, "Singapore");
    element.clearAndFillField(signupPage.cityField, 'Jurong');

    element.clearAndFillField(signupPage.zipcodeField, 13120);
    element.clearAndFillField(signupPage.mobileNumberField, 6281332288);
    element.click(signupPage.createAccountBtn);

    assert.containText("Account Created!");
  });

  it("Unsuccessfull register with registered email", () => {
    element.clearAndFillField(
      loginPage.signupNameField,
      "jago tester"
    );
    element.clearAndFillField(
      loginPage.signupEmailField,
      "jagotester@gmail.com"
    );
    element.click(loginPage.signupBtn);

    assert.containText("Email Address already exist!");

  })
  
});
