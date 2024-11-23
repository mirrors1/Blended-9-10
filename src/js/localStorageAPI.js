const TASK_KEY = 'tasks';

export function initStorage() {
  const value = localStorage.getItem(TASK_KEY);

  if (!value) {
    localStorage.setItem(TASK_KEY, JSON.stringify([]));
  }
}

export function addTaskToLocalStorage(obj) {
  const tasks = JSON.parse(localStorage.getItem(TASK_KEY));

  tasks.push(obj);

  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}
