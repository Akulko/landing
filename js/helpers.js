$(document).ready(function() {
  $("#email_form").submit(function(e) {
    var pathArray = window.location.pathname.split("/");
    var slug = pathArray[pathArray.length - 1];
    if (slug === "") {
      slug = "home";
    }
    console.log(slug);
    $("#sub_btn").attr("disabled", true);
    e.preventDefault();
    data = {};
    data.send_to = "contact@mobilefringe.com";
    data.subject = "Get in touch - Mobile Fringe form (sent from " + slug + " page )";
    data.body = {
      email: $("#email").val(),
      name: $("#name").val(),
      message: $("#message").val()
    };
    $.post("https://formspree.io/lordakulko@gmail.com", data, function(data, textStatus, jqXHR) {
      if (textStatus == "success") {
        $("#email_sent").fadeIn();
        $("#email_form").trigger("reset");
        $("#sub_btn").removeAttr("disabled");
      } else {
        alert("Error sending email. Please try again later.");
      }
    });
  });

  //  SyntaxHighlighter.all();
});
$(window).load(function() {
  updateSlick();
  $(window).on("resize", function() {
    updateSlick();
  });
});

function updateSlick() {
  if ($(document).width() > 768) {
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      autoplay: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      arrows: true
    });
  } else {
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplay: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      arrows: true
    });
  }
}
