 // Using Location object to get parameters
        var params = new URLSearchParams(location.search);
        
        // Handle potential null values by providing defaults
        var name = params.get("name") || "User";
        var title = params.get("title") || "";
        var email = params.get("email") || "Not provided";
        var mobile = params.get("mobile") || "Not provided";
        var address = params.get("address") || "Not provided";
        var gender = params.get("gender") || "Not specified";

        var greetHeading = document.querySelector("#greet");
        var infoBody = document.querySelector("#infoBody");
        var backBtn = document.querySelector("#goBack");

        // Displaying info
        greetHeading.innerHTML = "Welcome, " + title + " " + name;

        infoBody.innerHTML = 
            "<div class='info-item'><b>Email:</b> " + email + "</div>" +
            "<div class='info-item'><b>Mobile:</b> " + mobile + "</div>" +
            "<div class='info-item'><b>Address:</b> " + address + "</div>" +
            "<div class='info-item'><b>Gender:</b> " + gender + "</div>";

        // Event listener for the back button
        backBtn.addEventListener("click", function() {
            location.href = "index.html";
        });