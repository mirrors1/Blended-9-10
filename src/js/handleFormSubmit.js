import { nanoid } from 'nanoid';
import { addTaskToLocalStorage } from './localStorageAPI';
import { renderTask } from './renderTask';

export function handleFormSubmit(evt) {
  evt.preventDefault();
  const taskName = evt.currentTarget.elements.taskName.value.trim();
  const taskText = evt.currentTarget.elements.taskText.value.trim();
  if (!taskName || !taskText) {
    alert('Введіть данні у всі поля');
    return;
  }
  const newTask = { id: nanoid(), taskName, taskText };
  addTaskToLocalStorage(newTask);
  evt.currentTarget.reset();
  renderTask();
}
