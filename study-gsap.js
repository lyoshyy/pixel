if (window.innerWidth > 480) {
  $(".section_h-study").each(function (index) {
    let triggerElement = $(this);

    let column_left = $(".h-study_column.is-1");
    let column_right = $(".h-study_column.is-2");
    let target_frame = $(".page-frame");
    let study_image = $(".h-study_image-wrapper");

    // Text animation
    let heading_1 = $(".h-study_heading.is-1");
    let heading_2 = $(".h-study_heading.is-2");
    let heading_3 = $(".h-study_heading.is-3");
    let heading_4 = $(".h-study_heading.is-4");

    let overflow_1 = $(".h-learn_overflow.is-1");
    let overflow_2 = $(".h-learn_overflow.is-2");
    let overflow_3 = $(".h-learn_overflow.is-3");
    let overflow_4 = $(".h-learn_overflow.is-4");

    let target_images = $(".h-study_image-wrapper");

    let parallax_image_1 = $(".h-study_image.is-1");
    let parallax_image_2 = $(".h-study_image.is-2");
    let parallax_image_3 = $(".h-study_image.is-3");
    let parallax_image_4 = $(".h-study_image.is-4");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      column_left,
      { width: "50.75%", ease: "power3.out", duration: 0.5 },
      "+=0.1"
    );
    tl.to(
      column_right,
      { width: "50%", ease: "power3.out", duration: 0.5 },
      "<"
    );
    tl.to(
      target_frame,
      { width: "50.75%", ease: "power3.out", duration: 0.5 },
      "<"
    );

    // Text animation
    tl.to(heading_1, { opacity: "0.4", ease: "none" }, "+=0.2");
    tl.to(heading_2, { opacity: "1", ease: "none" }, "<");
    tl.to(overflow_1, { height: "0rem", ease: "none" }, "<");
    tl.to(overflow_2, { height: "auto", ease: "none" }, "<");
    // image animation
    tl.to(target_images, { y: "-100%", ease: "none" }, "<");
    tl.to(parallax_image_1, { y: "20%", ease: "none" }, "<");
    tl.to(parallax_image_2, { y: "10%", ease: "none" }, "<");

    tl.to(heading_2, { opacity: "0.4", ease: "none" }, "+=0.2");
    tl.to(heading_3, { opacity: "1", ease: "none" }, "<");
    tl.to(overflow_2, { height: "0rem", ease: "none" }, "<");
    tl.to(overflow_3, { height: "auto", ease: "none" }, "<");
    // image animation
    tl.to(target_images, { y: "-200%", ease: "none" }, "<");
    tl.to(parallax_image_2, { y: "20%", ease: "none" }, "<");
    tl.to(parallax_image_3, { y: "10%", ease: "none" }, "<");

    tl.to(heading_3, { opacity: "0.4", ease: "none" }, "+=0.2");
    tl.to(heading_4, { opacity: "1", ease: "none" }, "<");
    tl.to(overflow_3, { height: "0rem", ease: "none" }, "<");
    tl.to(overflow_4, { height: "auto", ease: "none" }, "<");
    // image animation
    tl.to(target_images, { y: "-300%", ease: "none" }, "<");
    tl.to(parallax_image_3, { y: "20%", ease: "none" }, "<");
    tl.to(parallax_image_4, { y: "10%", ease: "none" }, "<");

    // frame
    tl.to(
      column_left,
      { width: "100%", ease: "power3.out", duration: 0.3 },
      "+=0.2"
    );
    tl.to(
      column_right,
      { width: "25%", ease: "power3.out", duration: 0.3 },
      "<"
    );
    tl.to(
      target_frame,
      { width: "100%", ease: "power3.out", duration: 0.3 },
      "<"
    );

    tl.addPause("+=0.1");
  });
}
