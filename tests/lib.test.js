const db = require("../testing-demo/db");
const mail = require("../testing-demo/mail");
const {
  absolute,
  greet,
  getCurrencies,
  getProduct,
  registerUser,
  applyDiscount,
  notifyCustomer,
} = require("../testing-demo/lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return a negative number if input is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a zero if input is zero", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = greet("Tella");
    expect(result).toMatch(/Tella/);
    expect(result).toContain("Tella");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = getCurrencies("Tella");
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = getProduct(1);
    expect(result).toEqual({id: 1, price: 10});
    expect(result).toMatchObject({id: 1, price: 10});
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => registerUser(a)).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = registerUser("Tella");
    expect(result).toMatchObject({username: "Tella"});
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply discount if customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer");
      return {id: customerId, points: 20};
    };
    const order = {customerId: 1, totalPrice: 10};
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = function (customerId) {
      return {email: "Tella"};
    };

    let mailSent = false;
    mail.send = function (email, message) {
      mailSent = true;
    };
    notifyCustomer({customerId: 1});

    expect(mailSent).toBe(true);
  });
});
