function createAccount() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Generate a random base12 number for the file name
  var randomNumber = Math.floor(Math.random() * 1000000).toString(12);

  // Create a new file using the generated file name
  var fileContent = `Hi, ${username}!`;
  var fileName = `user_${randomNumber}.html`;

  // Write the file content to a new HTML file
  var link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([fileContent], { type: 'text/html' }));
  link.download = fileName;
  link.click();

  // Display user greeting on the page
  document.getElementById("user-greeting").textContent = `Hi, ${username}!`;
}
