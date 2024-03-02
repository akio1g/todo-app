import Task from "./Task";

export default class Todo {
  constructor({ id = 0, title = "", tasks = [], categories = [] }) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.categories = categories;
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.isCompleted).length;
  }

  addTask(task = new Task({})) {
    this.tasks.push(task);
  }
}
