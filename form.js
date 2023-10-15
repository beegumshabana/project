function validateForm() {
    var nameInput = document.getElementById("name");
    var subjectInput = document.getElementById("subject");
    var name = nameInput.value;
    var subject = subjectInput.value;
    var namePattern = /^[A-Za-z\s]+$/; // Allow only letters and whitespace
  
    if (!namePattern.test(name)) {
      alert("Name should contain only letters and whitespace.");
      nameInput.focus();
      return false;
    }
  
    if (subject.length === 0 || !namePattern.test(subject)) {
      alert("Subject is required and should contain only letters.");
      subjectInput.focus();
      return false;
    }
  
    // If validation passes, you can submit the form to "contact.php" or perform further actions.
    // For demonstration purposes, we prevent form submission here.
    // You can replace this with the actual form submission code.
    // document.querySelector(".php-email-form").submit();
  
    // Optional: Show a success message
    var successMessage = document.querySelector(".sent-message");
    successMessage.style.display = "block";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 5000); // Hide the success message after 5 seconds
  }
  