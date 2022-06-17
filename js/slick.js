$(".goal_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-caret-left' style='color: #fff;'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-caret-right' style='color: #fff;'></i></button>",
  responsive: [
    {
      breakpoint: 1266,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 761,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});

$(".stories_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    "<button type='button' class='stories_prev'><i class='fa-solid fa-caret-left' style='color: #fff;'></i></button>",
  nextArrow:
    "<button type='button' class='stories_next'><i class='fa-solid fa-caret-right' style='color: #fff;'></i></button>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 761,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});
