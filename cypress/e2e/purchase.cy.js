import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";
import * as productPage from "@tests/pages/products.page";
import * as chartPages from "@tests/pages/chart.page";
import * as purchasePages from "@tests/pages/purchase.page";
import { CHARTS, PRODUCTS } from "../const/routes";

describe("Login Test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("Successfull login", () => {
    element.clearAndFillField(loginPage.emailField, VALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, VALID_LOGIN.password);
    element.click(loginPage.signinBtn);
    
    route.visit(PRODUCTS.product);
    element.clearAndFillField(productPage.searchBar, "blue top");
    element.click(productPage.searchIcon);
    element.forceClick(productPage.btnaddToChart);
    
    route.visit(CHARTS.charts);
    element.click(purchasePages.btnProceed);

    element.clearAndFillField(purchasePages.fromControl, "Percobaan Beli");
    element.click(purchasePages.placeOrder);
    
    element.clearAndFillField(purchasePages.nameOnCard, "Muhammad Tsani Al");
    element.clearAndFillField(purchasePages.cardNumber, "000000");
    element.clearAndFillField(purchasePages.cvc,'123');
    element.clearAndFillField(purchasePages.expirationMonth,'May');
    element.clearAndFillField(purchasePages.expirationYear,'2025');
    element.click(purchasePages.payAndConfirm);
    element.forceClick(purchasePages.downloadInvoice);
    
    assert.containText("");

    
  });
});
