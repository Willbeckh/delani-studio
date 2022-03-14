// "use strict";

// on doc ready
$().ready(function () {
  console.log("page loaded.");

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

  // portfolio hover state
  $(".portfolio-card").hover(
    function () {
      $(".project-description", this).show("swing");
    },
    function () {
      $(".project-description").hide();
    }
  );

  // form validation
  let validateUsername = () => {};

  // button event
  $("button").click(() => {
    let name = $("#username").val();
    let email = $("#email").val();
    console.log(name);
  });
});
