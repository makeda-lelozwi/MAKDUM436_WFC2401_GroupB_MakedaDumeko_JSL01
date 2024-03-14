function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  const characters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  //The pet's name must start with a capital letter 

  const dot = document.getElementById("dot");
  
  if (input.startsWith("pet_") && characters.test(input.substring(4))){
    /*JavaScript strings start counting from 0. The "pet_" part takes up spaces 0 - 3.
    So that's why we want our characters to start from 4 (substring(4)). 

    */
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