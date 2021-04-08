const dbConnaction = require("../config/database");

//table operation

const Tasks = {
  allTasks: async () => {
    const allTaskQ = "SELECT COUNT(id) as task_count FROM employees_tasks";
    const [rows] = await dbConnaction.promise().execute(allTaskQ);
    return rows;
  },
  employeeCount: async () => {
    const empCountQ = "SELECT COUNT(id) as total_employee FROM employees";
    const [rows] = await dbConnaction.promise().execute(empCountQ);
    return rows;
  },
  task_count: async () => {
    const taskCountQ =
      "SELECT * FROM `employees_tasks` WHERE employees_id IN (SELECT `id` FROM `employees`)";
    const [rows] = await dbConnaction.promise().execute(taskCountQ);

    return rows;
  },
  sum: async () => {
    const sumQuery =
      "SELECT SUM(employee_salary) as total_employee_salary FROM employees";
    const [rows] = await dbConnaction.promise().execute(sumQuery);
    return rows;
  },
  get: async () => {
    const selectQuery = "SELECT * FROM `employees`";
    const [rows] = await dbConnaction.promise().execute(selectQuery);
    return rows;
  },
  getTask: async () => {
    const selectQ = `SELECT employees_tasks.id as id, task_title, task_details, task_st_time,task_end_time,first_name, last_name FROM employees_tasks JOIN employees WHERE employees_tasks.employees_id = employees.id
`;
    const [rows] = await dbConnaction.promise().execute(selectQ);
    return rows;
  },

  save: async (firstName, lastName, salary) => {
    const insertQuery =
      "INSERT INTO `employees`( `first_name`, `last_name`, `employee_salary`) VALUES (?,?,?)";
    const values = [firstName, lastName, salary];

    const [rows] = await dbConnaction.promise().execute(insertQuery, values);

    return rows.affectedRows;
  },
  delete: async (id) => {
    const deleteQuery = "DELETE FROM `employees` WHERE id=?";
    const value = [id];
    const [rows] = await dbConnaction.promise().execute(deleteQuery, value);
    return rows.affectedRows;
  },
  update: async (id) => {
    const editQuery = "SELECT * FROM `employees` WHERE id=?";
    const editID = [id];
    const [rows] = await dbConnaction.promise().execute(editQuery, editID);
    return rows[0];
  },
  updateSubmit: async (id, firstName, lastName, salary) => {
    const updateQuery =
      "UPDATE `employees` SET first_name=?, last_name=?, employee_salary=? WHERE id=?";

    const values = [id, firstName, lastName, salary];
    const [rows] = await dbConnaction.promise().execute(updateQuery, values);

    return rows.affectedRows;
  },
  taskSave: async (
    taskName,
    taskDetails,
    taskStDate,
    taskEndDate,
    employeeName
  ) => {
    const insertQ =
      "INSERT INTO `employees_tasks`( `task_title`, `task_details`, `task_st_time`, `task_end_time`, `employees_id`) VALUES (?,?,?,?,?)";
    const values = [
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName,
    ];
    const [rows] = await dbConnaction.promise().execute(insertQ, values);

    return rows.affectedRows;
  },
  taskUpdate: async (id) => {
    //const employeeForm = "SELECT * FROM `employees`";

    const editQ = `SELECT employees_tasks.id as id, task_title, task_details, task_st_time,task_end_time,first_name, last_name FROM employees_tasks JOIN employees WHERE employees_tasks.employees_id = employees.id and employees_tasks.id =? `;
    const editID = [id];
    const [rows] = await dbConnaction.promise().execute(editQ, editID);
    return rows[0];
  },
  taskUpSub: async (
    id,
    taskName,
    taskDetails,
    taskStDate,
    taskEndDate,
    employeeName
  ) => {
    const updateQ =
      "UPDATE `employees_tasks` SET `task_title`=?,`task_details`=?,`task_st_time`=?,`task_end_time`=?,`employees_id`=? WHERE id=?";

    const values = [
      id,
      taskName,
      taskDetails,
      taskStDate,
      taskEndDate,
      employeeName,
    ];
    const [rows] = await dbConnaction.promise().execute(updateQ, values);
    return rows.affectedRows;
  },
  tDel: async (id) => {
    const deleteQuery = "DELETE FROM `employees_tasks` WHERE id=?";
    const value = [id];
    const [rows] = await dbConnaction.promise().execute(deleteQuery, value);
    return rows.affectedRows;
  },
};

module.exports = Tasks;
