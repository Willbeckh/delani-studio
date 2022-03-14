// "use strict";

// on doc ready
$().ready(function () {
  console.log("page loaded.");

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
