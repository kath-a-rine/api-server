'use strict';

const express = require('express');
const { ActorModel } = require('../models');

const router = express.Router();

// add an actor
router.post('/actors', async(req, res, next) => {
  let actor = req.body;

  let response = await ActorModel.create(actor);
  res.status(200).send(response);
});

//  get all actors
router.get('/actors', async (req, res, next) => {
  let allActors = await ActorModel.findAll();
  res.status(200).send(allActors);
});

// get one actor
router.get('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneActor = await ActorModel.findOne({where: { id }});
  res.status(200).send(oneActor);
});

// put/update an actor 
router.put('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  await ActorModel.update(req.body, {where: { id }});
  let updatedActor = await ActorModel.findOne({where: { id }});
  res.status(200).send(updatedActor);
});

// delete an actor
router.delete('/actors/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedActor = await ActorModel.findOne({where: { id }});
  await ActorModel.destroy({where: { id }});
  res.status(200).send(deletedActor);
});

module.exports = router;