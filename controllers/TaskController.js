const Tasks = require("../models/Tasks");

const TaskController = {
  // calculation

  home: async (req, res) => {
    const allData = await Tasks.get();
    const taskCount = await Tasks.task_count();
    const sumSalary = await Tasks.sum();
    const employeesCount = await Tasks.employeeCount();
    const allTaskCount = await Tasks.allTasks();
    console.log("SUM", sumSalary);

    res.render("pages/home", {
      allData,
      taskCount,
      sumSalary,
      employeesCount,
      allTaskCount,
    });
  },
  create: (req, res) => {
    res.render("pages/insert");
  },
  task: async (req, res) => {
    const allData = await Tasks.get();
    //const taskData = await Tasks.getTask();
    res.render("pages/task-form", { allData });
  },
  getask: async (req, res) => {
    const taskData = await Tasks.getTask();
    res.render("pages/taskShow", { taskData });
  },
  insert: async (req, res) => {
    const { firstName, lastName, salary } = req.body;
    console.log(req.body);
    const isInserted = await Tasks.save(firstName, lastName, salary);
    if (isInserted) {
      res.render("pages/success");
    } else {
      res.send("error");
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    //console.log("ID", id);
    const isDelete = await Tasks.delete(id);
    if (isDelete) {
      res.render("pages/success");
    } else {
      res.send("failed");
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const show = await Tasks.update(id);
    if (show) {
      res.render("pages/update", { show });
    } else {
      res.send("error");
    }
  },
  editInsert: (req, res) => {
    const { firstName, lastName, salary, postID } = req.body;
    const editSub = Tasks.updateSubmit(firstName, lastName, salary, postID);
    if (editSub) {
      res.render("pages/success");
    } else {
      res.send("error");
    }
  },
  taskInsert: async (req, res) => {
    const {
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName,
    } = req.body;
    console.log(req.body);

    const isTaskInserted = await Tasks.taskSave(
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName
    );
    if (isTaskInserted) {
      res.render("pages/success");
    } else {
      res.send("Error");
    }
  },
  taskUp: async (req, res) => {
    const id = req.params.id;
    const show = await Tasks.taskUpdate(id);
    //const allData = Tasks.get(id);
    if (show) {
      res.render("pages/task-update", { show });
    } else {
      res.send("error");
    }
  },
  taskSubmit: async (req, res) => {
    const {
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName,
      postID,
    } = req.body;

    const editTaskQ = await Tasks.taskUpSub(
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName,
      postID
    );
    if (editTaskQ) {
      res.render("pages/success");
    } else {
      res.send("Error");
    }
  },
  taskDel: async (req, res) => {
    const id = req.params.id;
    const isDel = await Tasks.tDel(id);
    if (isDel) {
      res.render("pages/success");
    } else {
      res.send("error");
    }
  },
};

//
module.exports = TaskController;

//SELECT employees_tasks.id as id, task_title, task_details, task_st_time,task_end_time, last_name FROM `employees_tasks` JOIN employees WHERE employees_tasks.employees_id = employees.id and employees.last_name
