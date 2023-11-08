let server;
const request = require("supertest");
const {Genre} = require("../../models/genre");
const {User} = require("../../models/user");

describe("/api/genres", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    server.close();
    await Genre.deleteMany({});
  });

  describe("auth middleware", () => {
    let token;

    const exec = () => {
      return request(server)
        .post("/api/genres")
        .set("x-auth-token", token)
        .send({name: "genre1"});
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
    });

    it("should return 401 if not token", async () => {
      token = "";

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("should return 400 if Invalid token", async () => {
      token = "asd";

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 200 if token is valid", async () => {
      const res = await exec();

      expect(res.status).toBe(200);
    });
  });
});
