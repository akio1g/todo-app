
export default class Task {
  constructor({ id = 0, description = "", category = null, isCompleted = false }) {
    this.id = id;
    this.description = description;
    this.category = category;
    this.isCompleted = isCompleted;
    this.shouldHide = false;
  }

  setAsCompleted() {
    this.isCompleted = true;
  }

  setHide() {
    this.shouldHide = true;
  }
}
