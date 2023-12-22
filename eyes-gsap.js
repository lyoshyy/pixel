const elementsToAnimate = document.querySelectorAll(".frame-circle");
function animateRandomElement() {
  const randomElement =
    elementsToAnimate[Math.floor(Math.random() * elementsToAnimate.length)];

  const tl = gsap.timeline();
  tl.to(randomElement, { height: "35%", duration: 0.7, ease: "power1.in" });
  tl.to(randomElement, { height: "100%", duration: 0.5, ease: "power1.out" });

  // После завершения анимации вызовите эту функцию снова для следующего случайного элемента
  tl.eventCallback("onComplete", animateRandomElement);
}
animateRandomElement();

if (window.innerWidth > 480) {
  // desktop setup code here...
  $(".page-wrapper").each(function (index) {
    let triggerElement = $(this);

    let pattern_circles = $(".pattern-circles");

    let pattern = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Text animation
    pattern.to(pattern_circles, {
      backgroundPosition: "50% -3000%",
      ease: "none",
    });
  });

  // desktop setup code here...
  $(".section_h-study").each(function (index) {
    let triggerElement = $(this);

    let pattern_move = $(".pattern-circles-wrapper");

    let tl_move = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl_move.to(pattern_move, {
      y: "-100vh",
      ease: "none",
      opacity: "0",
      duration: 1,
    });
    tl_move.to(pattern_move, { y: "100vh", ease: "none", duration: 0 });
    tl_move.to(
      pattern_move,
      { y: "0vh", ease: "none", opacity: "1", duration: 0.7 },
      3
    );
  });
}
