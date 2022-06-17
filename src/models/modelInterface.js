'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  // create
  async create(json) {
    try {
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  // readOne
  async readOne(id) {
    try {
      let oneInstance = await this.model.findOne({where: { id }});
      return oneInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  // readAll
  async readAll() {
    try {
      let allInstances = await this.model.findAll();
      return allInstances;

    } catch (err) {
      console.error(err);
      return err;
    }
  }
  // update
  update(id) {
    try{

    } catch (err) {
      console.error(err);
      return err;
    }
  }
  // delete
  async delete(id) {
    try{
      let deletedInstance = await this.model.findOne({where: { id }});
      await this.model.destroy({where: { id }});
      return deletedInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = modelInterface;