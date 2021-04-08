const router = require("express").Router();

const TaskController = require("../controllers/TaskController");
const Tasks = require("../models/Tasks");
// show form
router.get("/", TaskController.home);
router.get("/submit", TaskController.getask);
// show pages
router.get("/task-show", TaskController.task);
router.get("/insert", TaskController.create);

router.post("/insert", TaskController.insert);
router.get("/update/:id", TaskController.update);
router.get("/delete/:id", TaskController.delete);
router.post("/update", TaskController.editInsert);
router.post("/submit", TaskController.taskInsert);
router.post("/edit", TaskController.taskSubmit);
//
router.get("/edit/:id", TaskController.taskUp);
router.get("/del/:id", TaskController.taskDel);

// Calculation for table

//
module.exports = router;
