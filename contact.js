// =========================
// CHECK JAVASCRIPT CONNECTION
// =========================

console.log("contact.js connected!");




// =========================
// CONTACT FORM
// =========================


const contactForm = document.getElementById("contactForm");



if(contactForm){



contactForm.addEventListener("submit", function(event){



// Prevent page refresh

event.preventDefault();




// Get values

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let message = document.getElementById("message").value;





// Test output

console.log("Name:", name);

console.log("Email:", email);

console.log("Message:", message);





alert(
"Message captured successfully!"
);




// Clear form

contactForm.reset();



});



}

else{


console.log("contactForm not found");


}