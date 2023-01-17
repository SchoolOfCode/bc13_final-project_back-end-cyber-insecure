import { require } from 'require';
const express = require('express')
const router = express.Router();
const { getAllApplications } = require('./applicationRoutes');
import { describe, test, expect, jest } from '@jest/globals';
jest.setTimeout(3000);


// getAllApplications - Get all applications
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

// Test the user email path
describe('Test the user email path', () => {
  test('It should return a JSON object', async () => {
      const response = await request(app).get('/api/jobApplications/:user_email');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('payload');
      expect(response.body.success).toBe(true);
  });
});


// Test the application id path.
describe('Test the application id path', () => {
  test('It should return a JSON object containing the user ID', async () => {
      const response = await request(app).get('/api/jobApplications/:id');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('payload');
      expect(response.body.success).toBe(true);
  });
});



