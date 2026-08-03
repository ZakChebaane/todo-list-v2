import * as Model from './model.js';
import * as View from './view.js';

function addTodo (name, desc, dueDate, priority) {
    Model.addTodo("home", name, desc, dueDate, priority);
    Model.getProjects();
}

export function init () {
    View.bindEvents({
        onAddTodo: addTodo,
    });
    Model.getProjects();
}