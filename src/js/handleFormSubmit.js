export function handleFormSubmit(evt) {
  evt.preventDefault();
  const taskName = evt.currentTarget.elements.taskName.value.trim();
  const taskText = evt.currentTarget.elements.taskText.value.trim();
  if (!taskName || !taskText) {
    alert('Введіть данні у всі поля');
    return;
  }
  const newTask = { taskName, taskText };
  console.log(newTask);
}
