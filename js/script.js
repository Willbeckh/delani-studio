"use strict";

// on doc ready
$().ready(function () {
  console.log("page loaded.");

  // button event
  $("button").click(()=> {
    alert("Hello there, your message has been received😃")
  })
});
