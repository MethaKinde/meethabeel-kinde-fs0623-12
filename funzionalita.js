

const ul = document.querySelector("ul");

const createTask = () => {
    const nuovaTask = document.getElementById("newTask")

    const tasktodo = document.createElement("li")
    tasktodo.innerText = nuovaTask.value
    ul.appendChild(tasktodo)

}

const aggiungi = document.getElementById("plsuBtn")
aggiungi.addEventListener("click", createTask)
