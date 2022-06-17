const menu_icon = document.querySelector(".menu a");
const menu_container = document.querySelector(".menu_container");
const menu_close = document.querySelector(".close_btn");
const active = "active";
menu_close.addEventListener("click", menuCloseHandler);

function menuCloseHandler() {
  if (menu_container.classList.contains(active)) {
    menu_container.classList.remove(active);
  } else {
    menu_container.classList.add(active);
  }
}

menu_icon.addEventListener("click", menuHandler);

function menuHandler() {
  if (menu_container.classList.contains(active)) {
    menu_container.classList.remove(active);
  } else {
    menu_container.classList.add(active);
  }
}
$(function () {
  $(".pages_list").on("mouseover", function () {
    $(".sub_menu").stop(1).slideDown(300);
  });
  $(".pages_list").on("mouseleave", function () {
    $(".sub_menu").stop(1, 1).slideUp();
  });
});
