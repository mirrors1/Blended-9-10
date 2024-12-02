import { getTaskFromLocalStorage } from './localStorageAPI';
import refs from './refs';

export function renderTask() {
  const tasks = getTaskFromLocalStorage();
  const item = tasks
    .map(
      ({ id, taskName, taskText }) =>
        `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${id}">Видалити</button>
      <h3>${taskName}</h3>
      <p>${taskText}</p>
    </li>`
    )
    .join('');

  refs.tasksList.innerHTML = item;
}
