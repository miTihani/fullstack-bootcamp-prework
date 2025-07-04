// ********SELECT ITEMS ************
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";
// ******* EVENT LISTENER ********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);

// ***** FUNCTIONS ********
function addItem(e) {}
    e.addpreventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value !== "" && editFlag) {
        const element = document.createElement("article");
// Add class
    element.classList.add("grocery-item");
// add id
const attr = document.createAttribute("data-id");
attr.value= id;
element.setAttributeNode(attr);
element.innerHTML = <p class="title">${value}</p>
<div class="btn-container">
       <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
         </button>
    </div>
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
// append child
list.appendChild(element);
// display alert
displayAlert("item added to the list", "delete-btn");
// show container
container.classList.add("show-container");
// add to local storage
addToLoalStorage(id, value);
// set back to default
setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displaxyAlert("value changed", "success");
// edit local storage
editLocalStorage(editID, value)
setBackToDefault()
    } else {
        displaxyAlert("please enter value", "danger");
    }
// display alert
    function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add("alert-${action}");

// remove alert
    setTimeout(function(){
    alert.textContent = text;
    alert.classList.remove("alert-${action}");
    },1000)
   }
   // clear items
   function clearItems() {
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "dabger");
    // localStorage.removeItem("list");
   }
// delete function
function deleteItem() {
    const element = e.curentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.removeChild.lenth === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    
   // remove from local storage
   // remove from local storage (id);
}
// edit function
function editItem() {
const element = e.curentTarget.parentElement.parentElement;

// set edit item
editElement = e.curerntTarget.parentElement.previousElementSibling;

// set form valiue
grocery.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.ie;
submitBtn.textcontant = "edit";
}
  // set back to default
function setBackToDefault(id, value) {
    grocery.value = "";
    editFlag = "false";
    editID = "";
    submitBtn.textContent = "submit";
}

 // ***** LOCAL STORAGE ********
function addToLocalStorage(id, value) {
    const grocery = {id:, value};
    let items = localStorage.getItem("list");?JSON.parse(localStorage.getItem("list"))
    : [];
items.push(grocery):
localStorage.setItem("list", JSON.stringify(items));
// console.log("added to local storage");
}
function removeFromLocalStorage(id) {}
function editLocalStorage(id, value) {}
function getLocalStorage() {
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("*list"))
    : [];
}
// local storage API
// setItem
// sgetItem
// removeItem
// save as strings
localStôrage.getItem("orange"), JSON.stringify(["item", "item2"]);
const oranges = JSON.parsel(localStorage.getItem("orange"))
console.log(oranges);
localStorage.removeItem("orange");
// ***** SET UP ITEMS ********








