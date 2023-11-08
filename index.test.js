const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");
const musiciansRouter = require("./routes/musicians");

describe("./musicians endpoint", () => {
  // Write your tests here
  test("Testing /musicians endpoint", async () => {
    const response = await request(app).get("/musicians");
    expect(response.statusCode).toBe(200);
  });
  it("responds with a JSON musician object", async () => {
    const createdMusician = await Musician.create({ name: "steve jobs" });

    const response = await request(app).get(`/musicians/${createdMusician.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ name: "steve jobs" })
    );
  });
  it("router connection working", async () => {
    const response = await request(app).get("/musicians");
    expect(response.status).toBe(200);
  });
});
