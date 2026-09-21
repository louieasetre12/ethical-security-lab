function greet(){
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message");
  message.textContent = name ? "Hello, " + name + "!" : "Please enter your name.";
}
