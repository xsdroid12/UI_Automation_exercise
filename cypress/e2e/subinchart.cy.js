import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as chartPages from "@tests/pages/chart.page";
import { HOME } from "../const/routes";
import { RANDOM_STRINGS } from "../data/subscription.data";

describe("Subscription Test Test", function () {
    beforeEach(() => {
      route.visit(HOME.home);
    });
it("Subscription In Chart", () => {
    cy.scrollTo('bottom')
    element.click(chartPages.btnChart);
    element.clearAndFillField(
      chartPages.subscrictionEmailField2,
      RANDOM_STRINGS + "@gmail.com"
    );
    element.forceClick(chartPages.btnSubscirption2);
    assert.containText("You have been successfully subscribed!");
        });
    }
);