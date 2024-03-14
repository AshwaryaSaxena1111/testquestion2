const inputField = document.getElementById("input");
const buttonField = document.getElementById("button");
var paragraph = document.createElement("p");
document.body.appendChild(paragraph);

buttonField.addEventListener("click", () => {
  const username = input.value;
  if (username) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        displayUserInfo(data);
      })
      .catch((error) => {
        userInformation.innerHTML = `<p>${error.message}</p>`;
      });
  } else {
    userInformation.innerHTML = "<p>Please enter a username</p>";
  }
});

function displayUserInfo(user) {
  userInformation.innerHTML = `
            <img src="${user.avatar_url}" alt="Profile Picture">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <p>Followers: ${user.followers}</p>
            <a href="${user.html_url}">View Profile</a>
        `;
}
