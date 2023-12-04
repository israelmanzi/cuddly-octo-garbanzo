import supertest from 'supertest';
import app from '../../src/app'; // Import your Express app
import mongoose from 'mongoose';

const request = supertest(app);

// Helper function to generate a random ID for testing purposes
const generateRandomId = () => new mongoose.Types.ObjectId().toString();

describe('Article Controller Integration Tests', () => {
  // You may need to seed the database with test data before running these tests
  
  it('should get all articles', async () => {
    const response = await request.get('/api/articles');
    expect(response.status).toBe(200);
    // Assert other properties of the response as needed
  });

  it('should create a new article', async () => {
    const newArticle = {
      title: 'New Article',
      content: 'Some content for the new article',
    };
    const response = await request.post('/api/articles').send(newArticle);
    expect(response.status).toBe(201);
    // Assert other properties of the response as needed
  });

  it('should get a specific article by ID', async () => {
    const randomId = generateRandomId(); // Replace this with a valid ID from your database
    const response = await request.get(`/api/articles/${randomId}`);
    expect(response.status).toBe(200);
    // Assert other properties of the response as needed
  });

  it('should update a specific article by ID', async () => {
    const randomId = generateRandomId(); // Replace this with a valid ID from your database
    const updatedArticle = {
      title: 'Updated Title',
      content: 'Updated content',
    };
    const response = await request.put(`/api/articles/${randomId}`).send(updatedArticle);
    expect(response.status).toBe(200);
    // Assert other properties of the response as needed
  });

  it('should delete a specific article by ID', async () => {
    const randomId = generateRandomId(); // Replace this with a valid ID from your database
    const response = await request.delete(`/api/articles/${randomId}`);
    expect(response.status).toBe(200);
    // Assert other properties of the response as needed
  });
});
