'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync(); 
});

afterAll(async () => {
  await sequelize.drop();
});

let actor = {
  name: 'Brad Pitt',
  age: '58',
};

describe('Testing REST API', () => {

  test('Create an actor', async() => {
    let response = await mockRequest.post('/actors').send(actor);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Brad Pitt');
    expect(response.body.age).toEqual('58');
  });


  test('Should get all actors', async() => {
    let response = await mockRequest.get('/actors');

    expect(response.status).toEqual(200);
  });

  test('Get one actor', async() => {
    let response = await mockRequest.get('/actors/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should update a actor', async() => {
    let response = await mockRequest.put('/actors/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should delete a actor', async() => {
    let response = await mockRequest.delete('/actors/1');

    expect(response.status).toEqual(200);
  });

  test('Create a movie', async() => {
    let response = await mockRequest.post('/movies').send({
      name: 'tester: Thelma and Louise',
      director: 'tester: Ridley Scott',
      movieId: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual('tester: Thelma and Louise');
    expect(response.body.director).toEqual('tester: Ridley Scott');
    expect(response.body.movieId).toEqual(1);
  });

  test('Should all moviess', async() => {
    let response = await mockRequest.get('/movies');

    expect(response.status).toEqual(200);
  });

  test('Get one movies item', async() => {
    let response = await mockRequest.get('/movies/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should update a movies item', async() => {
    let response = await mockRequest.put('/movies/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should delete a movies item', async() => {
    let response = await mockRequest.delete('/movies/1');

    expect(response.status).toEqual(200);
  });
});