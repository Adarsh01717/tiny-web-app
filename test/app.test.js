const request = require("supertest");
const { createApp } = require("../src/app");

describe("app", () => {
  const app = createApp();

  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /api/greet/:name greets the caller", async () => {
    const res = await request(app).get("/api/greet/Adarsh");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello, Adarsh!");
  });
});