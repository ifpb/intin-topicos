const task = document.querySelector("#task");
const counter = document.querySelector(".counter");
const maxLength = 40;

const tasks = document.querySelector("#tasks");
const topTasks = document.querySelector("#top-tasks");
const button = document.querySelector("button");

const checkbox = document.querySelector("input");

button.addEventListener('click', function() {
  const taskValue = task.value;
  const li = document.createElement("li");
  const close = document.createElement("span");
  close.className = 'close';
  li.innerHTML = taskValue;
  close.innerHTML = '&times';
  li.appendChild(close);

  close.addEventListener('click', function() {
    this.parentElement.remove();
  });
  li.addEventListener('click', function() {
    this.classList.toggle('checked');
  });

  if (checkbox.checked) {
    topTasks.appendChild(li);
  } else {
    tasks.appendChild(li);
  }
});

task.addEventListener('keyup', function() {
  const counterValue = maxLength - task.value.length;
  counter.innerHTML = counterValue;

  if (counterValue <= 5) {
    counter.className = 'status yellow';
  } else if (counterValue < 0) {
    counter.className = 'status red';
  } else {
    counter.className = 'status';
  }
});