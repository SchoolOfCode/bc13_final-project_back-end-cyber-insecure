import { request } from 'supertest';
import app from './app';
import { describe, test, expect } from '@jest/globals';


// tests work in postman (see screenshot postmantests.jpg)

// Test the root path
describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

// Test the jobApplications path
describe('Test the jobApplications path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/jobApplications');
    expect(response.statusCode).toBe(200);
  });
});

// Test the knowledgeBank path
describe('Test the knowledgeBank path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/knowledgeBank');
    expect(response.statusCode).toBe(200);
  });
});

// Updates a sample application
describe('Test the PATCH /:id route', () => {
  test('It should update the application and return success message', async () => {
      // create a sample application to update
      const sampleApplication = {
          user_email: "ttt@ttt.com",
          job_title: "Software Engineer",
          company: "m&m's",
          job_description: "snacks",
          location: "London",
          salary: 100000,
          job_link: "www.blahblah.com",
          notes: "i love snacks",
          progress: "applied"
      }

      // mock the getApplicationByID and editApplication functions
      getApplicationByID = jest.fn().mockResolvedValue([sampleApplication]);
      editApplication = jest.fn().mockResolvedValue(sampleApplication);

      // send the PATCH request
      const response = await request(app)
          .patch('/1')
          .send({
              user_email: "newemail@example.com"
          });

      // assert the response
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ success: true, payload: sampleApplication });

      // assert that the correct functions were called with correct arguments
      expect(getApplicationByID).toHaveBeenCalledWith(1);
      expect(editApplication).toHaveBeenCalledWith(1, "newemail@example.com", "Software Engineer", "Test Company", "This is a test job description", "Test City", 100000, "www.testjob.com", "This is a test note", "applied");
  });
});

// Deletes an application.
describe('DELETE /:id', () => {
  it('deletes an application and returns a success message', async () => {
      //Mock the deleteApplication function
      jest.spyOn(deleteApplication, 'deleteApplication').mockImplementation(() => {
          return { id: 1, name: 'Test Application' };
      });

      const response = await request(app).delete('/1');

      expect(deleteApplication).toHaveBeenCalledWith(1);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ success: true, payload: { id: 1, name: 'Test Application' } });
  });
});