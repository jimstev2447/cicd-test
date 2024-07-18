const request = require("supertest");
const app = require("../../app");
const seed = require("../../db/seed");
beforeEach(() => {
  return seed();
});

describe("app", () => {
  describe("/api", () => {
    test("200: gives some dogs", () => {
      return request(app)
        .get("/api/dogs")
        .then(({ body }) => {
          const { dogs } = body;
          expect(dogs.length).toBe(2);
        });
    });
  });
});
