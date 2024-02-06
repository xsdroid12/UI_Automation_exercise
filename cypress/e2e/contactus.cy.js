import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import { CONTACTUS } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as contactusPage from "@tests/pages/contactus.page";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";

describe("Contact Us Test", function () {
  beforeEach(() => {
    route.visit(CONTACTUS.contactus);
  });

  it("Successfull send email", () => {
    element.clearAndFillField(contactusPage.nameField, "jago tester");
    element.clearAndFillField(contactusPage.emailField, "jagotester@gmail.com");
    element.clearAndFillField(contactusPage.subjectField, "Testing Automation");

    element.clearAndFillField(contactusPage.messageField, "Hi admin, Ini adalah test automation UI");
    element.uploadFile(contactusPage.chooseFile, 'cypress/data/uploadedFile.json');
    element.click(contactusPage.submitBtn);

    assert.containText("Success! Your details have been submitted successfully.");
  });

})