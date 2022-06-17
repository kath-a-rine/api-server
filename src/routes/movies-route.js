'use strict';

const express = require('express');
const { MovieModel } = require('../models');

const router = express.Router();

router.post('/movies', async(req, res, next) => {
  let movies = req.body;

  let response = await MovieModel.create(movies);
  res.status(200).send(response);
});

//  get all movies
router.get('/movies', async (req, res, next) => {
  let allMovies = await MovieModel.findAll();
  res.status(200).send(allMovies);
});

// get one movie
router.get('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneMovie = await MovieModel.findOne({where: { id }});
  res.status(200).send(oneMovie);
});

// put/update a movie 
router.put('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  await MovieModel.update(req.body, {where: { id }});
  let updatedMovie = await MovieModel.findOne({where: { id }});
  res.status(200).send(updatedMovie);
});

// delete a movie
router.delete('/movies/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedMovie = await MovieModel.findOne({where: { id }});
  await MovieModel.destroy({where: { id }});
  res.status(200).send(deletedMovie);
});

module.exports = router;