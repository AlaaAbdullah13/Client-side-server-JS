const tabsDiv = document.getElementById("tabs");
const postsDiv = document.getElementById("posts");

let usersData = {};


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            usersData[user.id] = user;
            
            let tab = document.createElement("div");
            tab.className = "tab";
            tab.innerText = user.name;

            tab.addEventListener("click", () => {
                document
                    .querySelectorAll(".tab")
                    .forEach(t => t.classList.remove("active"));

                tab.classList.add("active");
                getUserPosts(user.id);
            });

            tabsDiv.appendChild(tab);
        });
    })
    .catch(error => {
        console.log("Error fetching users", error);
        postsDiv.innerHTML = "<p>Error loading users</p>";
    });


async function getUserPosts(userId) {
    try {
        postsDiv.innerHTML = '<p class="loading">Loading posts...</p>';

        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        let posts = await response.json();
        
        // Get user data
        const user = usersData[userId];
        
        postsDiv.innerHTML = "";

        posts.forEach((post, index) => {
            const card = document.createElement("div");
            card.className = "post-card";

            // Get user initials for avatar
            const initials = getInitials(user.name);
            
            // Generate random likes
            const likes = Math.floor(Math.random() * 500) + 5;
            
            // Generate random comments
            const comments = Math.floor(Math.random() * 50);

            card.innerHTML = `
                <div class="post-header">
                    <div class="user-avatar">${initials}</div>
                    <div class="user-info">
                        <h4 class="user-name">${user.name}</h4>
                    </div>
                    <div class="post-options">...</div>
                </div>
                <div class="post-content">
                    <p class="post-title">${capitalizeFirstLetter(post.title)}</p>
<p style="margin-top: 8px; color: #6D4C41;">${capitalizeFirstLetter(post.body)}</p>
                </div>
                <div class="post-image">
                    <span>📷 Photo from ${user.company.name}</span>
                </div>
                <div class="post-stats">
                    <div class="likes-count">
                        <span class="like-emoji">👍 ❤️</span>
                        <span>${likes}</span>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <span>${comments} comments</span>
                        <span>2 shares</span>
                    </div>
                </div>
                <div class="post-actions">
                    <div class="action-btn">
                        <span class="action-icon">👍</span>
                        <span>Like</span>
                    </div>
                    <div class="action-btn">
                        <span class="action-icon">💬</span>
                        <span>Comment</span>
                    </div>
                    <div class="action-btn">
                        <span class="action-icon">↗️</span>
                        <span>Share</span>
                    </div>
                </div>
            `;

            postsDiv.appendChild(card);
        });

    } catch (error) {
        postsDiv.innerHTML = "<p>Error loading posts 😢</p>";
        console.log(error);
    }
}

function getInitials(name) {
    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


async function loadPosts(userId) {
    await getUserPosts(userId);
}
