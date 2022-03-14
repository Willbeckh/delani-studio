// "use strict";

// on doc ready
$().ready(function () {
  console.log("page loaded.");

<<<<<<< HEAD
  // switch what we do cards-description
  $(".card1").click(() => {
    $(".card-heading1").toggle("slow");

    $(".card1-text").toggle("slow");
  });
  $(".card2").click(() => {
    $(".card-heading2").toggle("slow");

    $(".card2-text").toggle("slow");
  });
  $(".card3").click(() => {
    $(".card-heading3").toggle("slow");

    $(".card3-text").toggle("slow");
  });

=======
>>>>>>> ft-form-validation
  // portfolio hover state
  $(".portfolio-card").hover(
    function () {
      $(".project-description", this).show("swing");
    },
    function () {
      $(".project-description").hide();
    }
  );

  cardToggle();
  validateForm();
});

// card toggle effect
let cardToggle = () => {
  $(".card-body").click(
    function () {
      $(".card-heading", this).toggle(400);
      $(".card-text", this).toggle(400);
    }
  );
};

// form validation
let validateForm = () => {
  $("#contactForm").submit(function (submit) {
    submit.preventDefault();
    const username = $("#username").val();
    const email = $("#email").val();

    alertAction();

    return this.reset();
  });
};

let alertAction = () => {
  $(".alert-container").slideDown();
  setTimeout(() => {
    $(".alert-container").slideUp();
  }, 2000);
};
