// test.js
describe("December labs - page objects", function () {
  const decemberLabsHomePage = browser.page.decemberLabs.decemberLabsHomePage();

  before(async () => {
    decemberLabsHomePage.navigate().maximizeWindow();
  });

  after(async (browser) => browser.quit());

  it('should navigate to December Labs and click "Get in touch"', function () {
    decemberLabsHomePage.getInTouchBtn();
    decemberLabsHomePage.expect.element("@getInTouchModal").to.be.visible;
    decemberLabsHomePage.expect
      .element("@getInTouchModalTxt")
      .text.to.equal("Get In Touch");
    decemberLabsHomePage.getInTouchSendBtn();
    decemberLabsHomePage.expect
      .element("@nameFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.expect
      .element("@emailFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.expect
      .element("@companyFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.expect
      .element("@messageFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.setValue("@nameFieldInput", "John Doe");
    decemberLabsHomePage.expect
      .element("@nameFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.setValue("@emailFieldInput", "John@test.com");
    decemberLabsHomePage.expect
      .element("@emailFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.setValue("@companyFieldInput", "Company Team");
    decemberLabsHomePage.expect
      .element("@companyFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");
    decemberLabsHomePage.setValue("@messageFieldInput", "Message Text");
    decemberLabsHomePage.expect
      .element("@messageFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");
  });
});
