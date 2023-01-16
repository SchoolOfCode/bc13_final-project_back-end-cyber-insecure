const express = require('express');
const router = express.Router();
const { getAllApplications } = require('./applicationRoutes');

jest.mock('./applicationRoutes', () => {
  return {
    getAllApplications: jest.fn(() => Promise.resolve(['application1', 'application2']))
  }
});

describe("GET /", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn()
    };
  });

  afterEach(() => {
    jest.resetModules();
  });

  test("should call getAllApplications", async () => {
    await router.get("/", async (req, res) => {
      const allApplications = await getAllApplications();
      return res.json({ success: true, payload: allApplications });
    })(req, res);

    expect(getAllApplications).toHaveBeenCalled();
  });

  test("should return success true and payload", async () => {
    await router.get("/", async (req, res) => {
      const allApplications = await getAllApplications();
      return res.json({ success: true, payload: allApplications });
    })(req, res);

    expect(res.json).toHaveBeenCalledWith({ success: true, payload: ['application1', 'application2'] });
  });
});
