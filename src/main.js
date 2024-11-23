// **
//  * Створи список справ.
//  * На сторінці є два інпути які має вводиться назва і текст задачі.
//  * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
//  *
//  * Розмітка картки задачі
//  * <li class="task-list-item">
//  *     <button class="task-list-item-btn">Удалить</button>
//  *     <h3>Заголовок</h3>
//  *     <p>Текст</p>
//  * </li>
//  *
//  * У кожної картки має бути кнопка "Видалити", щоб можна було
//  * прибрати завдання зі списку.
//  * Список із завданнями має бути доступним після пере

// const newTask = {
//   taskName,
//   taskText,
// };

import { handleFormSubmit } from './js/handleFormSubmit';

const formEl = document.querySelector('#task-form');

formEl.addEventListener('submit', handleFormSubmit);
