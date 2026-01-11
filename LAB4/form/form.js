

var addBtn = document.querySelector("button[onclick='addUser()']"); 
var table = document.querySelector("#userTable");
var tbody = document.querySelector("#userTable tbody");

function addUser() {
    var nameInp = document.querySelector("#nameInp");
    var ageInp = document.querySelector("#ageInp");
    var emailInp = document.querySelector("#emailInp");

    var nameValue = nameInp.value;
    var ageValue = ageInp.value;
    var emailValue = emailInp.value;

    
    if (nameValue === "" || ageValue === "" || emailValue === "") {
        alert("All fields are required!");
        return; 
        }

    if (!isFinite(ageValue)) {
        alert("Age must be a numeric value!");
        ageInp.classList.add("invalid"); 
        return;
    }

    var tr = document.createElement("tr");
    
    tr.innerHTML = "<td>" + nameValue + "</td>" +
                   "<td>" + ageValue + "</td>" +
                   "<td>" + emailValue + "</td>";

    tbody.append(tr);

    table.style.display = "table";

    resetForm();
}

function resetForm() {
    document.querySelector("#nameInp").value = "";
    document.querySelector("#ageInp").value = "";
    document.querySelector("#emailInp").value = "";
    
    document.querySelector("#ageInp").classList.remove("invalid");
}

