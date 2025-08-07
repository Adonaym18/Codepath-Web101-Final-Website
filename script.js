// Step 1: Select the button
const themeButton = document.getElementById("theme-button");
const header = document.getElementById("header_");
const overlayToggle = document.getElementById("overlay-toggle")
// Step 2: Define the dark mode toggle function
function toggleDarkMode() {
 overlayToggle.classList.toggle("dark-mode");
}

// Step 3: Add click event listener
themeButton.addEventListener("click", toggleDarkMode);






// const email = document.getElementById("email")
const form = document.getElementById("form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const confirmationList = document.getElementById("confirmation-list");

const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-text"); // MATCHES HTML ID "modal-text"
const modalClose = document.querySelector(".modal .close");

let modalTimeout;

const handleSubmit = (event) => {
  event.preventDefault();

  const firstName = fName.value.trim();
  const lastName = lName.value.trim();
  const emailValue = email.value.trim();

  // Clear previous errors
  [fName, lName, email].forEach((input) => input.classList.remove("error"));
  [fnameError, lnameError, emailError].forEach((el) => (el.textContent = ""));

  let isValid = true;

  if (firstName.length < 2) {
    fName.classList.add("error");
    fnameError.textContent = "First name must be at least 2 characters.";
    isValid = false;
  }

  if (lastName.length < 2) {
    lName.classList.add("error");
    lnameError.textContent = "Last name must be at least 2 characters.";
    isValid = false;
  }

  if (
    emailValue.length < 5 ||
    !emailValue.includes("@") ||
    !emailValue.includes(".")
  ) {
    email.classList.add("error");
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (!isValid) return;

  // Add to RSVP list
  const li = document.createElement("li");
  li.textContent = `Thank you, ${firstName}, for joining the crew!`;
  confirmationList.appendChild(li);

  // Show personalized modal message
  modalMessage.textContent = `Hey ${firstName}, thank you for RSVPing! We'll be in touch soon.`;

  // Show modal
  modal.style.display = "block";

  // Auto-close modal after 10 seconds
  modalTimeout = setTimeout(() => {
    modal.style.display = "none";
  }, 10000);

  // Close modal on clicking X
  modalClose.onclick = () => {
    modal.style.display = "none";
    clearTimeout(modalTimeout);
  };

  // Close modal when clicking outside modal content
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      clearTimeout(modalTimeout);
    }
  };

  // Reset form
  form.reset();
};

form.addEventListener("submit", handleSubmit);







//   // ✅ Valid submission
//   const li = document.createElement("li");
//   li.textContent = `Thank you, ${firstName}, for joining the crew!`;
//   confirmationList.appendChild(li);

//   // ✅ Show modal
//   modalMessage.textContent = `Welcome aboard, ${firstName}! 🎉`;
//   modal.style.display = "block";

//   // ⏳ Auto-hide after 5 seconds
//   setTimeout(() => {
//     modal.style.display = "none";
//   }, 5000);

//   form.reset();
// };

// form.addEventListener("submit", handleSubmit);



//   if (!isValid) {
//     return; // Stop submission
//   }
//   if (!isValid) return;

//   // Valid submission
//   const li = document.createElement("li");
//   li.textContent = `Thank you, ${firstName}, for joining the crew!`;
//   confirmationList.appendChild(li);
//   form.reset();
// };
    
// form.addEventListener("submit", handleSubmit);
