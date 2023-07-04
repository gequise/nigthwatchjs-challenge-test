describe("December labs - page objects", function () {
  const decemberLabsHomePage = browser.page.decemberLabs.decemberLabsHomePage();

  before(async () => {
    await decemberLabsHomePage.navigate().maximizeWindow();
  });

  after(async () => {
    await browser.quit();
  });

  it('should navigate to December Labs and click "Get in touch"', async function () {
    await decemberLabsHomePage.getInTouchBtn();
    await decemberLabsHomePage.expect.element("@getInTouchModal").to.be.visible;
    await decemberLabsHomePage.expect
      .element("@getInTouchModalTxt")
      .text.to.equal("Get In Touch");
  });

  it("should validate required fields marked in red", async function () {
    await decemberLabsHomePage.getInTouchSendBtn();
    await decemberLabsHomePage.expect
      .element("@nameFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    await decemberLabsHomePage.expect
      .element("@emailFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    await decemberLabsHomePage.expect
      .element("@companyFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
    await decemberLabsHomePage.expect
      .element("@messageFieldInput")
      .to.have.css("border-color")
      .which.equals("rgb(255, 0, 0)");
  });

  it("should fill in required fields and validate they are no longer marked in red", async function () {
    await decemberLabsHomePage.setValue("@nameFieldInput", "John Doe");
    await decemberLabsHomePage.expect
      .element("@nameFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");

    await decemberLabsHomePage.setValue("@emailFieldInput", "John@test.com");
    await decemberLabsHomePage.expect
      .element("@emailFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");

    await decemberLabsHomePage.setValue("@companyFieldInput", "Company Team");
    await decemberLabsHomePage.expect
      .element("@companyFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");

    await decemberLabsHomePage.setValue("@messageFieldInput", "Message Text");
    await decemberLabsHomePage.expect
      .element("@messageFieldInput")
      .to.have.css("border-color")
      .which.not.equals("rgb(255, 0, 0)");
  });
});
