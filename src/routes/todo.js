const { Router } = require("express");
const todoController = require("../controllers/todoController");

const router = Router();

// GET ALL TODO
router.get("/", todoController.getTodo);

// CREATE TODO
router.post("/save", todoController.saveTodo);

// UPDATE TODO BY ID
router.put("/:id/update", todoController.updateTodo);

// DELETE TODO BY ID
router.delete("/:id/delete", todoController.deleteTodo);

module.exports = router;
