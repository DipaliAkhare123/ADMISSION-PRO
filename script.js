document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page refresh

  // Fill receipt details
  document.getElementById("rName").textContent = document.getElementById("name").value;
  document.getElementById("rEmail").textContent = document.getElementById("email").value;
  document.getElementById("rPhone").textContent = document.getElementById("phone").value;
  document.getElementById("rCourse").textContent = document.getElementById("course").value;
  document.getElementById("rDob").textContent = document.getElementById("dob").value;

  // Hide form container
  document.getElementById("formContainer").style.display = "none";

  // Show receipt
  document.getElementById("receipt").style.display = "block";
});