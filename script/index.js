const translate = document.querySelectorAll(".translate");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let offsetScrollTwiceBuy = scroll - 1915;
  let offsetScrollCinemaCrate = scroll - 2745;
  // console.log(scroll , "----", offsetScrollTwiceBuy);

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  let twicebuy = document.getElementById("twicebuy-image");
  let cinemacrate = document.getElementById("cinemacrate-image");

  twicebuy.style.top = offsetScrollTwiceBuy * 0.9 + "px";
  cinemacrate.style.top = offsetScrollCinemaCrate * 0.9 + "px";
});
