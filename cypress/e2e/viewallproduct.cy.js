import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as productPage from "@tests/pages/products.page";
import { PRODUCTS } from "../const/routes";

describe("Products Test", function () {
    beforeEach(() => {
      route.visit(PRODUCTS.product);
    });
  
    it("Successfull click on detail product", () => {
      element.click(productPage.viewProduct);
  
      assert.containText("Blue Top");
    });
}
);
