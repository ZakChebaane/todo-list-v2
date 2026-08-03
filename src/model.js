import {TodoItem} from "./TodoItem.js";
import {ProjectItem} from "./ProjectItem.js";

const projects = [
    new ProjectItem("Home", (new TodoItem(
        "Buy Groceries",
        "Pick up milk, eggs, whole wheat bread, chicken breasts, and avocados.",
        "2026-06-22",
        "High"
    ))),
];

