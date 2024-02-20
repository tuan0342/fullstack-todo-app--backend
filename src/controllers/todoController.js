const ToDo = require("../models/ToDo");

const todoController = {
  // GET ALL TODO
  getTodo: async (req, res, next) => {
    try {
      const toDo = await ToDo.find();
      res.status(200).json(toDo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // CREATE NEW TODO
  saveTodo: async (req, res, next) => {
    try {
      // method: create
      const saveTodo = await ToDo.create(req.body);

      // method: save
      //   const newTodo = new ToDo(req.body);
      //   const saveTodo = await newTodo.save();

      res.status(200).json(saveTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // UPDATE A TODO
  updateTodo: async (req, res, next) => {
    try {
      const _id = req.params.id;
      await ToDo.updateOne({ _id: _id }, req.body);
      res.status(200).json("Update Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE A TODO
  deleteTodo: async (req, res, next) => {
    try {
      const _id = req.params.id;
      await ToDo.findByIdAndDelete(_id);
      res.status(200).json("Deleted Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = todoController;
