import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as productPage from "@tests/pages/products.page";
import { PRODUCTS } from "../const/routes";

describe("Products Test", function () {
    beforeEach(() => {
      route.visit(PRODUCTS.product);
    });
  
    it("Successfull search product", () => {
      element.clearAndFillField(productPage.searchBar, "blue top");
      element.click(productPage.searchIcon);
  
      assert.containText("Blue Top ");
    });

    it("Success add to chart", () => {
      element.clearAndFillField(productPage.searchBar, "blue top");
      element.click(productPage.searchIcon);
      element.forceClick(productPage.btnaddToChart);
  
      assert.containText("Your product has been added to cart.");
    });
}
);
      