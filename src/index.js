document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{e.preventDefault()
  handleTask(e.target.querySelector('#new-task-description').value)})
  form.reset();
});
function handleTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button') 
  btn.addEventListener('click',handleDelete)
  p.textContent = `${task}  `
  btn.textContent = 'x'
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove();
}