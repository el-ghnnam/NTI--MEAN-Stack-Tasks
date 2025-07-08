const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch using Promise .then() syntax
function fetchWithPromise() {
  const count = parseInt(document.getElementById("userCount").value) || 5;
  const container = document.getElementById("promiseUsers");
  container.innerHTML = "<p>Loading...</p>";

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      displayUsers(users.slice(0, count), container);
    })
    .catch((error) => {
      container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
      console.error("Error with Promise fetch:", error);
    });
}

// Fetch using async/await syntax
async function fetchWithAsync() {
  const count = parseInt(document.getElementById("userCount").value) || 5;
  const container = document.getElementById("asyncUsers");
  container.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    displayUsers(users.slice(0, count), container);
  } catch (error) {
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    console.error("Error with async/await fetch:", error);
  }
}

// Display users in the container
function displayUsers(users, container) {
  container.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
    container.appendChild(card);
  });
}
