import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";

describe("Login Test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("Successfull login", () => {
    element.clearAndFillField(loginPage.emailField, VALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, VALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    assert.containText("Logged in as jago tester");
  });

  it("Unsuccessfull login with invalid email", () => {
    element.clearAndFillField(loginPage.emailField, INVALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, INVALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    assert.containText("Your email or password is incorrect!");
  });

});