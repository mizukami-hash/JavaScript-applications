"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    const li = document.createElement("li");
    const task = document.querySelector("input");
    li.textContent = task.value;

    document.querySelector("ul").appendChild(li);

    task.value = "";
    task.focus();
  });
}
