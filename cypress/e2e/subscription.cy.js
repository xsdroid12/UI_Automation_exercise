import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as homePages from "@tests/pages/home.page";
import { HOME } from "../const/routes";
import { RANDOM_STRINGS } from "../data/subscription.data";

describe("Subscription Test Test", function () {
    beforeEach(() => {
      route.visit(HOME.home);
    });
  
    it("Successfull to subscription", () => {
    cy.scrollTo('bottom')
    element.clearAndFillField(
        homePages.subscrictionEmailField,
        RANDOM_STRINGS + "@gmail.com"
      );
    element.click(homePages.btnSubscirption);
    assert.containText("You have been successfully subscribed!");
    });

    it("Subscription With Invalid Email", () => {
      cy.scrollTo('bottom')
      element.clearAndFillField(
          homePages.subscrictionEmailField,
          RANDOM_STRINGS + "@vegacom"
        );
      element.click(homePages.btnSubscirption);
      assert.containText("You have been successfully subscribed!");
      });
}
);
