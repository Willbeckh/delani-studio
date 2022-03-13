"use strict";

// on doc ready
$().ready(function () {
  console.log("page loaded.");

  // switch what we do cards-description
  $(".card1").click(() => {
    $(".card-heading1").toggle();

    $(".card1-text").toggle();
  });
  $(".card2").click(() => {
    $(".card-heading2").toggle();

    $(".card2-text").toggle();
  });
  $(".card3").click(() => {
    $(".card-heading3").toggle();

    $(".card3-text").toggle();
  });

  // portfolio hover state
  $(".portfolio-card").hover(
    function () {
      $(".project-description", this).show();
    },
    function () {
      $(".project-description").hide();
    }
  );

  // button event
  $("button").click(() => {
    alert("Hello there, your message has been received😃");
  });
});
