'use strict';

const express = require('express');
const { actorInterface } = require('../models');

const router = express.Router();

// add an actor
router.post('/actors', async(req, res, next) => {
  let actor = req.body;

  let response = await actorInterface.create(actor);
  res.status(200).send(response);
});

//  get all actors
router.get('/actors', async (req, res, next) => {
  let allActors = await actorInterface.readAll();
  res.status(200).send(allActors);
});

// get one actor
router.get('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneActor = await actorInterface.readOne(id);
  res.status(200).send(oneActor);
});

// put/update an actor 
router.put('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedActor = await actorInterface.update(req.body, id);
  res.status(200).send(updatedActor);
});

// delete an actor
router.delete('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedActor = await actorInterface.delete(id);
  res.status(200).send(deletedActor);
});

module.exports = router;