// find a way to collect to collect data from webpage
const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");
// get the users click event
// create contact
// show contacts

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !email) {
    alert("Please fill in all fields");
    return;
  }
  const contact = { name, phone, email };
  addContactToList(contact);
  // // clear the form
  contactForm.reset();
});

function addContactToList(contact) {
  const li = document.createElement("li");
  li.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email} <button class="delete-btn">
  Delete</button>`;

  // Delete button
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  
  
  });

  contactList.appendChild(li);

  // show contact list
  contactList.appendChild(li);
}

const string = ``;
