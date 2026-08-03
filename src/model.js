import {TodoItem} from "./TodoItem.js";
import {ProjectItem} from "./ProjectItem.js";

const projects = [
    new ProjectItem("home", ([new TodoItem(
        "Buy Groceries",
        "Pick up milk, eggs, whole wheat bread, chicken breasts, and avocados.",
        "2026-06-22",
        "High"
    )])),
];

// TODO - REMOVE THIS FUNCTION
export function getProjects () {
    console.log(projects);
}

export function addProject (name) {
    const newProject = new ProjectItem(name, "");
    projects.push(newProject);
}
export function addTodo (project, name, description, dueDate, priority, checklist) {
    const newTodo = new TodoItem(name, description, dueDate, priority, checklist);
    const projectIndex = projects.findIndex((projectName) => {
        return projectName.name === project;
    });
    console.log(projectIndex);
    projects[projectIndex].todoItem.push(newTodo);
}