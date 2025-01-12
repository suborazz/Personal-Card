function generateGreeting() {
  const nameInput = document.getElementById("nameInput");
  const greetingMessage = document.getElementById("greetingMessage");
  const generatedCardArea = document.getElementById("generatedCardArea");

  let name = nameInput.value.trim();

  // Check if the name is empty
  if (name === "") {
    greetingMessage.textContent = "Please enter your name!";
    greetingMessage.style.color = "red";
  } else {
    // Create a new card with just the name
    const cardHTML = `
        <div class="generated-card">
          <h3>Hello, ${name}!</h3>
          <p>Welcome to your personalized card!</p>
        </div>
      `;

    // Add the new card to the page
    generatedCardArea.innerHTML = cardHTML;

    // Clear the input field
    nameInput.value = "";

    // Hide the original greeting section
    document.querySelector(".container").style.display = "none";
  }
}
