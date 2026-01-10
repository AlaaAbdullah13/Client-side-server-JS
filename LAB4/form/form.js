function addUser() {
    // Select input elements
    const nameInput = document.getElementById("nameInp");
    const ageInput = document.getElementById("ageInp");
    const emailInput = document.getElementById("emailInp");

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();

    // 1. Validation: All fields are required
    if (!name || !age || !email) {
        alert("All fields are required!");
        return;
    }

    // 2. Validation: Age must be a number
    if (isNaN(age)) {
        alert("Age must be a numeric value!");
        return;
    }

    // 3. Validation: Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // 4. Create and Append Row if data is valid
    const tableBody = document.querySelector("#userTable tbody");
    const newRow = tableBody.insertRow();

    // Insert cells for Name, Age, and Email
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = email;

    // Clear form after successful add
    resetForm();
}

function resetForm() {
    document.getElementById("nameInp").value = "";
    document.getElementById("ageInp").value = "";
    document.getElementById("emailInp").value = "";
}