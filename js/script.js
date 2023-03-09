//jquery
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});


// Find the 'count this' class on the page and animate it
$('.count-this').each(function () {

  // Start the counting from a specified number - in this case, 0!
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      // Speed of counter in ms, default animation style
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          // Round up the number
            $(this).text(Math.ceil(now));
        }
    });
});


$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

$(".incremental-counter").incrementalCounter({
  "digits": 4
});


