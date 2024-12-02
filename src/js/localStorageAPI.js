const sampleTasks = [
  {
    id: '1',
    taskName: 'Маші',
    taskText: 'Витерти пил',
  },
  {
    id: '2',
    taskName: 'Роману',
    taskText: 'Помити посуд',
  },
  {
    id: '3',
    taskName: 'Артему',
    taskText: 'Винести сміття',
  },
  {
    id: '4',
    taskName: 'Наташі',
    taskText: 'Купити хліб',
  },
];
const TASK_KEY = 'tasks';

export function initStorage() {
  const value = getTaskFromLocalStorage();

  if (!value.length) {
    localStorage.setItem(TASK_KEY, JSON.stringify(sampleTasks)); //sample tasks
    // localStorage.setItem(TASK_KEY, JSON.stringify([]));//default
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

export function removeTaskToLocalStorage(id) {
  const tasks = getTaskFromLocalStorage();

  const newTasks = tasks.filter(value => value.id !== id);

  localStorage.setItem(TASK_KEY, JSON.stringify(newTasks));
}
