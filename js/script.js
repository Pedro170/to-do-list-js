const form = document.querySelector("#form");
const tbody = document.querySelector("tbody");
const newTarefa = document.querySelector("#add-tarefa");
const addTarefa = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal-container");
const foto = document.querySelector("#link");
const nome = document.querySelector("#nome");
const tarefa = document.querySelector("#tarefa");
const email = document.querySelector("#email");

let oldData = {};

const handleOpenModal = () => {
  const closed = document.querySelector("#closed");
  modal.classList.add("open");

  closed.addEventListener("click", () => {
    modal.classList.remove("open");
    foto.value = "";
    nome.value = "";
    email.value = "";
    tarefa.value = "";
    foto.focus();
  });
};

const handleSaveForm = (event) => {
  event.preventDefault();
  const data = {
    foto: foto.value,
    nome: nome.value,
    email: email.value,
    tarefa: tarefa.value,
  };
  if (data) {
    saveTodo(data);
  }

  foto.value = "";
  nome.value = "";
  email.value = "";
  tarefa.value = "";
  foto.focus();
};

const saveTodo = (data) => {
  let tr = document.createElement("tr");
  tr.innerHTML += `
		<td class="photo"><img src="${data.foto}" alt="${data.nome}"/></td>
		<td>${data.nome}</td>
		<td>${data.email}</td>
		<td>${data.tarefa}</td>
		<td class="status"><span class="chip">Ativo</span></td>
		<td class="action">
			<button class="fas fa-tasks finish-todo"></button>
			<button class="fas fa-edit edit-todo"></button>
			<button class="fas fa-times remove-todo"></button>
		</td>

	`;
  tbody.appendChild(tr);
};

const finishTodo = document.querySelectorAll(".finish-todo");
const chips = document.querySelectorAll(".chip");
const ArrayChips = Array.from(chips);
const chip = ArrayChips.map((chip) => chip);

// finishTodo.forEach(( btn, idx ) => {
// 	btn.addEventListener('click', () => {
// 		chip[idx].classList.toggle('inativo')
// 		if( chip[idx].classList.contains('inativo') ) {
// 			chip[idx].innerText ='inativo'
// 		} else {
// 			chip[idx].innerText ='Ativo'
// 		}
// 	});
// })

document.addEventListener("click", ({ target }) => {
  const parent = target.closest("tr");
  let data = {};

  if (parent) {
    data = parent;
  }

  if (target.classList.contains("finish-todo")) {
    console.log("clicou");
  }

  if (target.classList.contains("remove-todo")) {
    parent.remove();
  }

  if (target.classList.contains("edit-todo")) {
    console.log("Obrigado Deus");
    modal.classList.add("open");
  }
});

newTarefa.addEventListener("click", handleOpenModal);
form.addEventListener("submit", handleSaveForm);
