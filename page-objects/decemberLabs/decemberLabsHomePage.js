const getInTouch_Btn = {
  getInTouchBtn() {
    this.waitForElementVisible("@getInTouchButton", 5000).click(
      "@getInTouchButton"
    );

    this.pause(1000);

    return this;
  },
};

const getInTouchSend_Btn = {
  getInTouchSendBtn() {
    this.waitForElementVisible("@getInTouchSendButton", 5000).click(
      "@getInTouchSendButton"
    );

    this.pause(1000);

    return this;
  },
};

module.exports = {
  "browser december labs": function (browser) {
    browser.url(browser.launch_url);
  },

  commands: [getInTouch_Btn, getInTouchSend_Btn],

  elements: {
    getInTouchButton: {
      selector: '//ul[@id="menu-header-main-menu"]//a[@href="#"]',
      locateStrategy: "xpath",
    },
    getInTouchModal: {
      selector: '//*[@class="dl-modal dl-getintouch-modal big open"]',
      locateStrategy: "xpath",
    },
    getInTouchModalTxt: {
      selector: '//*[@class="contact-form-heading center"]',
      locateStrategy: "xpath",
    },
    getInTouchSendButton: {
      selector: "#wpforms-submit-872",
    },
    nameFieldInput: {
      selector: '//input[@id="wpforms-872-field_0"]',
      locateStrategy: "xpath",
    },
    emailFieldInput: {
      selector: '//input[@id="wpforms-872-field_1"]',
      locateStrategy: "xpath",
    },
    companyFieldInput: {
      selector: '//input[@id="wpforms-872-field_6"]',
      locateStrategy: "xpath",
    },
    messageFieldInput: {
      selector: '//textarea[@id="wpforms-872-field_2"]',
      locateStrategy: "xpath",
    },
  },
};
