<<<<<<< HEAD
=======
/* eslint-disable no-undef */
>>>>>>> 2a665d4 (this file is added)
// addTodo.js
var argv = require("minimist")(process.argv.slice(2));
const db = require("./models/index");

const createTodo = async (params) => {
  try {
    await db.Todo.addTask(params);
  } catch (error) {
    console.error(error);
  }
};

const getJSDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  return new Date(today.getTime() + days * oneDay);
};
(async () => {
  const { title, dueInDays } = argv;
  if (!title || dueInDays === undefined) {
    throw new Error(
<<<<<<< HEAD
      'title and dueInDays are required. \nSample command: node addTodo.js --title="Buy milk" --dueInDays=-2 '
=======
      'title and dueInDays are required. \nSample command: node addTodo.js --title="Buy milk" --dueInDays=-2 ',
>>>>>>> 2a665d4 (this file is added)
    );
  }
  await createTodo({ title, dueDate: getJSDate(dueInDays), completed: false });
  await db.Todo.showList();
})();
