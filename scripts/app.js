// Owl Carousel initialization
  
  $(document).ready(function() {
    var owl = $(".owl-carousel");
  
    owl.owlCarousel({
      startPosition: "URLHash",
      stagePadding: 200,
      center: true,
      mouseDrag: false,
      items: 1,
      loop: false,
      margin: 0,
      URLhashListener: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0
        },
        600: {
          items: 1,
          stagePadding: 100
        },
        1000: {
          items: 1,
          stagePadding: 200
        },
        1200: {
          items: 1,
          stagePadding: 250
        },
        1400: {
          items: 1,
          stagePadding: 300
        },
        1600: {
          items: 1,
          stagePadding: 350
        },
        1800: {
          items: 1,
          stagePadding: 400
        }
      }
    });
    // owl.on("mousewheel", ".owl-stage", function(e) {
    // 	if (e.deltaY > 0) {
    // 		owl.trigger("next.owl");
    // 	} else {
    // 		owl.trigger("prev.owl");
    // 	}
    // 	e.preventDefault();
    // });
  });
  