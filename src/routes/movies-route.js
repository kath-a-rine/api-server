'use strict';

const express = require('express');
const { movieInterface } = require('../models');

const router = express.Router();

router.post('/movies', async(req, res, next) => {
  let movies = req.body;

  let response = await movieInterface.create(movies);
  res.status(200).send(response);
});

//  get all movies
router.get('/movies', async (req, res, next) => {
  let allMovies = await movieInterface.readAll();
  res.status(200).send(allMovies);
});

// get one movie
router.get('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneMovie = await movieInterface.readOne(id);
  res.status(200).send(oneMovie);
});

// put/update a movie 
router.put('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedMovie = await movieInterface.update(req.body, id);
  res.status(200).send(updatedMovie);
});

// delete a movie
router.delete('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedMovie = await movieInterface.delete(id);
  res.status(200).send(deletedMovie);
});

module.exports = router;