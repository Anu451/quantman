const todoInput = document.querySelector('.todo-input input');
const todoArr = [];
const task = document.querySelector('.task');

todoInput.addEventListener('keyup', (e) => {
	let userInput = todoInput.value.trim();
	if (e.key == 'Enter' && userInput) {
		console.log(userInput);

		todoArr.push({ name: todoInput.value, status: 'pending' });
		console.log(todoArr);
		task.innerHTML += `<li id="todoremove" class="task">
					<label for="1" class="task-label">
						<div  class="task-check">

							<p>${todoArr[todoArr.length - 1].name}</p>

						</div>
						<div class="task-delete">
							<span onclick = "remove()"  class="material-symbols-outlined">
								delete
							</span>
						</div>
					</label>
				</li>`;

		let todo = localStorage.getItem('todo-list');
		if (!todo) {
			todo = [];
		}

		let taskInfo = { name: userInput, status: 'pending' };
		todo.push(taskInfo);
		localStorage.setItem('todo-list', JSON.stringify(todo));
	}
});

function remove() {
	var x = document.getElementById('todoremove');
	x.remove(x.todoArr);
}

// function add() {
// 	var x = document.getElementById('todoInput').value;
// 	document.getElementById('valuetext').innerHTML = x;
// }
