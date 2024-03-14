function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  const characters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  //The pet's name must start with a capital letter 

  const dot = document.getElementById("dot")

  if (input.startsWith("pet_") && characters.test(input.substring(4))){
    result = "Valid Syntax";
    console.log("Valid Syntax");
    dot.style.backgroundColor = "green";
  } 
  else {
    result = "Invalid Syntax";
    console.log("Invalid Syntax");
    dot.style.backgroundColor = "red";
  }

  document.getElementById("result").innerText = result;
}