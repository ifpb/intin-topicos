const quantidadeInput = document.querySelector('.quantidade');
const lista = document.querySelector('.lista');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    lista.innerHTML = '';
    for (let i=1; i<=quantidadeInput.value; i++) {
      const li = document.createElement("li");
      li.innerHTML = 'Item ' + i;
      lista.appendChild(li);
    }
});