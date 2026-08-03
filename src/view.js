export function bindEvents (handlers) {
    const app = document.querySelector(".container");
    app.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest("#add-task")) {
            const todoModal = document.getElementById("todoModal");
            todoModal.showModal();
        } else if (target.closest("#submit-btn")) {
            const form = document.getElementById()
            console.log("here");
            const name = document.getElementById("name-todo");
            const desc = document.getElementById("desc-todo");
            const dueDate = document.getElementById("dueDate-todo");
            const priority = document.getElementById("priority-todo");
            handlers.onAddTodo(name.value, desc.value, dueDate.value, priority.value);
        }
    });
}