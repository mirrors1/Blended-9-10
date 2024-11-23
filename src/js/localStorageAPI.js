const TASK_KEY = 'tasks';

export function initStorage() {
  const value = getTaskFromLocalStorage();

  if (!value) {
    localStorage.setItem(TASK_KEY, JSON.stringify([]));
  }
}

export function addTaskToLocalStorage(obj) {
  const tasks = getTaskFromLocalStorage();

  tasks.push(obj);

  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export function getTaskFromLocalStorage() {
  return JSON.parse(localStorage.getItem(TASK_KEY));
}
