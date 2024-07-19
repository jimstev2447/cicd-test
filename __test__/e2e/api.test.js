const { describe, expect, test, beforeEach } = require("@jest/globals");
const request = require("supertest");

const app = require("../../app");

describe("app", () => {
  describe("/api", () => {
    test("200: gives some dogs", () => {
      return request(app)
        .get("/api")
        .then(({ body }) => {
          const { message } = body;
          expect(message).toBe("Hello world");
        });
    });
  });
});
