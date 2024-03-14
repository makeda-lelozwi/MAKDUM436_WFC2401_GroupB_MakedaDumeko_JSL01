function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  const characters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

  if (input.startsWith("pet_") && characters.test(input.substring(4))){
    result = "Valid Syntax";
    console.log("Valid Syntax");
  } 
  else {
    result = "Invalid Syntax";
    console.log("Invalid Syntax")
  }

  document.getElementById("result").innerText = result;
}