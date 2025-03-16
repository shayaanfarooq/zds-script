gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
  // generic / common
  const appearFromTween = {
    autoAlpha: 0,
    duration: 1,
    y: 50,
    ease: "power2.out",
    stagger: { each: 0.2 },
  };

  const appearFromTweenFadeIn = {
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    stagger: { each: 0.2 },
  };

  $("[appear]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this, // Trigger the animation when this element is in view
        start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
        once: true, // Animation will happen only once
      },
    });
    tl.fromTo(this, appearFromTweenFadeIn, { autoAlpha: 1 });
  });

  // =================================HERO TEXT TL ===============
  // Create a timeline
  let heroTl = gsap.timeline({
    delay: 0,
    paused: false, // default is false
    repeat: 0, // number of repeats (-1 for infinite)
    smoothChildTiming: true,
  });

  heroTl.fromTo(
    [".hero-span"],
    {
      ease: "power2.out",
      autoAlpha: 0,
    },
    {
      duration: 3,
      stagger: 1, // Adjust for delay between each word
      autoAlpha: 1,
    }
  );

  heroTl.to([".hero-span"], {
    stagger: 1, // Adjust for delay between each word
    duration: 3,
    ease: "power2.out",
    autoAlpha: 0,
    yPercent: 100,
    delay: 3,
  });

  // EXPERTISE
  gsap.from(".expertise-section-item", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".expertise-section", // Hero section
      start: "top 80%", // When the bottom of hero hits the top of the viewport
      toggleActions: "play none none reverse", // Change opacity based on scroll direction
      once: true,
    },
    stagger: 0.25,
    duration: 1,
    ease: "power2.out", // Smooth easing effect
  });

  // =================== what we create=========
  // images
  gsap.to(".expertise-thumbnail", {
    scrollTrigger: {
      trigger: ".expertise-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
    ease: "power2.out", // Smooth easing effect
    scale: 1.15,
  });

  gsap.from(".expertise-item", {
    ...appearFromTween,
    scrollTrigger: {
      trigger: ".expertise-item",
      start: "top bottom-=100",
    },
  });

  //======= IN THE LIGHT TRACK CAROUSEL CODE =======
  // item-one - making small
  gsap.fromTo(
    ".itl-item-content-one",
    { scale: 1 },
    {
      scrollTrigger: {
        trigger: ".itl-track",
        start: "top top", // When the bottom of hero hits the top of the viewport
        end: "top top-=" + window.innerWidth * 0.7, /// When the bottom of hero hits the top of the viewport

        toggleActions: "play none none reverse", // Change opacity based on scroll direction
        scrub: true,
        ease: "power2.out", // Smooth easing effect
        duration: 3,
        marker: true,
      },

      scale: 0.7,
    }
  );

  // initializing two to be small
  gsap.to(".itl-item-content-two", {
    scale: 0.7,
    scrollTrigger: {
      trigger: ".itl-track",
      start: "top bottom",
      end: "top bottom",
      marker: true,
    },
  });

  // item two - making large
  gsap.fromTo(
    ".itl-item-content-two",
    {
      scale: 0.7,
    },
    {
      scrollTrigger: {
        trigger: ".itl-track",
        start: "top top",
        end: "top top-=" + window.innerWidth * 0.7,

        toggleActions: "play none none reverse",
        scrub: true,
        ease: "power2.out",
        duration: 3,
        marker: true,
      },
      scale: 1,
    }
  );

  // item three - making large
  gsap.fromTo(
    ".itl-item-content-three",
    {
      scale: 0.7,
      scrollTrigger: {
        trigger: ".itl-track",
        start: "top bottom",
      },
    },
    {
      scrollTrigger: {
        trigger: ".itl-track",
        start: "top top-=" + window.innerWidth * 1, // When the bottom of hero hits the top of the viewport
        end: "top top-=" + window.innerWidth * 1.4, /// When the bottom of hero hits the top of the viewport
        scrub: true,

        // end: "bottom bottom", /// When the bottom of hero hits the top of the viewport
        toggleActions: "play none none reverse", // Change opacity based on scroll direction
        ease: "power2.out", // Smooth easing effect
        duration: 3,
      },

      scale: 1,
    }
  );

  // item two - making small
  gsap.fromTo(
    ".itl-item-content-two",
    { scale: 1 },
    {
      scale: 0.7,
      scrollTrigger: {
        trigger: ".itl-track",
        start: "top top-=" + window.innerWidth * 0.7, // When the bottom of hero hits the top of the viewport
        end: "top top-=" + window.innerWidth * 1.4, /// When the bottom of hero hits the top of the viewport

        toggleActions: "play none none reverse", // Change opacity based on scroll direction
        scrub: true,
        ease: "power2.out", // Smooth easing effect
        duration: 3,
      },
    }
  );

  gsap.from(".itl-item", {
    ...appearFromTween,
    scrollTrigger: {
      trigger: ".itl-item",
      start: "top bottom-=100",
    },
  });

  // ============== MILESTONE ========
  gsap.from(".milestone-item", {
    ...appearFromTween,
    scrollTrigger: {
      trigger: ".milestone-item",
      start: "top bottom-=100",
    },
  });

  gsap.from(".client-section .zblock", {
    rotate: -90,
    scrollTrigger: {
      trigger: ".client-section .zblock",
      start: "top bottom-=100",
      scrub: true,
    },
  });

  gsap.from(".client-image", {
    ...appearFromTweenFadeIn,
    scrollTrigger: {
      trigger: ".client-logo-grid",
      start: "top center+=100",
    },

    stagger: {
      grid: [3, 9],
      from: "center",
      amount: 1.5,
    },
  });

  // ==== QUOTE SECTION
  gsap.from(".quote-section .zblock", {
    rotate: -90,
    scrollTrigger: {
      trigger: ".quote-section .zblock",
      start: "top bottom-=400",
      scrub: true,
    },
  });

  gsap.from(".quote", {
    ...appearFromTween,
    scrollTrigger: {
      trigger: ".quote",
      start: "top bottom-=100",
    },
  });

  gsap.to(".quote-image", {
    scrollTrigger: {
      trigger: ".quote-image",
      start: "top bottom-=100",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.3,
  });

  // Select all section headings
  const headings = document.querySelectorAll(".section-heading-container");
  // Loop over each heading and apply the animation
  headings.forEach((heading) => {
    let headingTl = gsap.timeline({ paused: true });

    headingTl.fromTo(
      heading,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading, // Each heading acts as its own trigger
          start: "top 80%", // When the top of each heading reaches 80% of the viewport
          end: "top 50%", // Animation ends when top of heading reaches 50% of viewport
          toggleActions: "play none none none", // Only plays once on scroll
          onEnter: () => headingTl.play(),
          once: true,
        },
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    const zblock = heading.querySelector(".zblock");
    if (zblock) {
      gsap.set(zblock, { opacity: 1 });
      headingTl.from(zblock, {
        rotate: -90,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      });
    }
  });

  // // trying animation for section headings
  // // Split words for Title Stagger
  let typeSplit = new SplitType("[words-slide-up]", {
    types: "words",
    tagName: "span",
  });


  ScrollTrigger.refresh();
});
