

let tooltips = document.querySelector(".tooltips");
let bigBtn = document.querySelector(".bigBtn");
let smallBtn = document.querySelector(".field-wrap input");
let tooltip = document.getElementById("tooltip");

let lname = document.querySelector(".lname")
let tooltip1 = document.getElementById("tooltip1");

let email = document.querySelector(".email")
let tooltip2 = document.getElementById("tooltip2");

let password = document.querySelector(".password")
let tooltip3 = document.getElementById("tooltip3");


let allValid = true;

function bigBtnClick() {
event.preventDefault();
let allValid = true;

// FIRST NAME INPUT
  // tooltip.style.display = smallBtn.value === "" ? "block" : "none";
if(smallBtn.value === ""){
  tooltip.style.display = "block";
  allValid = false;
} else{
  tooltip.style.display = "none"; 
}
// LAST NAME INPUT
// tooltip1.style.display = lname.value === "" ? "block" : "none";
if(lname.value === ""){
  tooltip1.style.display = "block";
  allValid = false; 
} else {
  tooltip1.style.display = "none";
  
}
// EMAIL INPUT
// tooltip2.style.display = email.value === "" ? "block" : "none";
if (email.value.trim() === "") {
  tooltip2.style.display = "block";
  tooltip2.textContent = "Email is required.";
  allValid = false;
} else {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    tooltip2.style.display = "block";
    tooltip2.textContent = "Please include an '@' in the email addres.'j'is missing an '@'.";
    allValid = false;
  } else {
    tooltip2.style.display = "none";
  }
}

// PASSWORD INPUT
 if (password.value === "") {
        tooltip3.style.display = "block";
        tooltip3.textContent = "Password is required.";
        allValid = false;
    } else {
        tooltip3.style.display = "none";        
        if (password.value.length > 8) {         
            tooltip3.style.color ="green";            
            tooltip3.style.display = "block";           
            tooltip3.textContent = "Password is strong.";
        } else {
            tooltip3.style.display = "block";
            tooltip3.textContent = "Password is weak. Use at least 8 characters.";
            allValid = false;
        }
    }

                                          
if (allValid) {
  alert("Form submitted successfully!");
}
}
bigBtn.addEventListener("click", bigBtnClick);


// PASSWORD TOGGLER ICON
let passwordToggler = document.querySelector(".passwordToggler");
let passwordInput = document.querySelector(".field-wrap .password");

function passwordShow(){
  if(passwordInput.type == "password"){
  passwordInput.type = "text";
  passwordToggler.innerHTML = '<i class="bi bi-eye"></i>'
  } else{
    passwordInput.type = "password";
     passwordToggler.innerHTML = '<i class="bi bi-eye-slash"></i>'
  }
}
passwordToggler.addEventListener("click", passwordShow);









//my turn
/*
$(document).ready(function () {
  // Handle input and textarea events
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {
    var $this = $(this),
        label = $this.prev('label'); // Get the label preceding the input/textarea

    if (e.type === 'keyup') {
      // On keyup, check if the input has value
      if ($this.val() === '') {
        label.removeClass('active highlight'); // Remove classes if empty
      } else {
        label.addClass('active highlight'); // Add classes if not empty
      }
    } else if (e.type === 'blur') {
      // On blur, remove highlight but keep active if not empty
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {
      // On focus, add highlight if input has a value
      if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }
  });

  // Handle tab click events
  $('.tab a').on('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var $this = $(this),
        target = $this.attr('href'); // Get the target content ID

    // Set the clicked tab as active and remove active class from siblings
    $this.parent().addClass('active').siblings().removeClass('active');

    // Hide all tab content except the target
    $('.tab-content > div').not(target).hide();

    // Fade in the target content
    $(target).fadeIn(600);
  });
});

*/