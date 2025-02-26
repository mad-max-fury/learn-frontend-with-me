document.addEventListener("DOMContentLoaded", loadContacts);

const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

// Handle form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !email) {
    alert("All fields are required!");
    return;
  }

  const contact = { name, phone, email };

  addContactToList(contact);
  saveContact(contact);

  contactForm.reset();
});

// Add contact to the list
function addContactToList(contact) {
  const li = document.createElement("li");
  li.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email}  
        <button class="delete-btn">Delete</button>`;

  // Delete button
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
    deleteContact(contact);
  });

  contactList.appendChild(li);
}

// Save contact to Local Storage
function saveContact(contact) {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Load saved contacts
function loadContacts() {
  console.log("Loading contacts..."); // Debugging
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log("Loaded contacts from localStorage:", contacts); // Debugging
  contacts.forEach(addContactToList);
}

// Delete contact from Local Storage
function deleteContact(contactToRemove) {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts = contacts.filter(
    (contact) => contact.phone !== contactToRemove.phone
  );
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
