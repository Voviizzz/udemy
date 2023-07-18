window.addEventListener("scroll", function () {
  const scrollPosition = document.documentElement.scrollTop;
  const scrollElement = this.document.querySelector(".element");
  if (scrollPosition < 100) {
    scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    return;
    // console.log(curScroll);
  }
  console.log(scrollPosition);
});
