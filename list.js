// Declairing variables
var enter = document.getElementById("enter");
var deleteItem = document.getElementsByClassName("delete"); 
var ol = document.querySelector("ol");
var li = document.querySelectorAll("li");
var userInput = document.getElementById("input");

enter.addEventListener("click", addingNewItem);

// creatiing function for enter key
userInput.addEventListener("keypress", submit);
function submit(event){
    var x = event.keyCode;
    if (x === 13){
        addingNewItem();
    }
}

// function for adding the new Item in the List
function addingNewItem(){
    // Creating Variable to get the input value
    var input = document.getElementById("input").value;
    if (input.length > 0){
    // Creating new Element li
    var list = document.createElement("li");
    // Creating Text Node for new Element
    list.appendChild(document.createTextNode(input));
    // Adding the new elemeent "li" to list
    ol.appendChild(list);
    // Creating the delete button inside li item and adding text nodes
    var d = list.appendChild(document.createElement("button"));
    d.appendChild(document.createTextNode("X"));
    // Declairing classes for Button and adding classes
    d.className="delete";
    list.className="list";
    document.getElementById("input").value = "";
    // document.getElementById("head").className = "theme1"
}
}

// function for deleting Items
ol.addEventListener("click", delItem);

function delItem(e){
    if (e.target.classList.contains('delete')){
    var li = e.target.parentElement;
    ol.removeChild(li);
    }
}