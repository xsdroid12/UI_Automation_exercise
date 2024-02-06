import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import { TC } from "@tests/const/routes";
import * as testcasePage from "@tests/pages/testcases.page";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";


describe("Test Cases Visit", function () {
    beforeEach(() => {
      route.visit(TC.tc);
    });
  
    it("Successfull Navigate Click a Test Case", () => {  
      element.click(testcasePage.tcview);
      assert.containText("Test Case");
    });
}
);
