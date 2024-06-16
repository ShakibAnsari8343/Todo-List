var inputBox = document.getElementById('input-box');
var listConatiner = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dataSave();
}
listConatiner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        dataSave();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        dataSave();
    }
}, false);

function dataSave() {
    localStorage.setItem("data", listConatiner.innerHTML);
}
function showTask() {
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();