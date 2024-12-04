function animatePage() {
    gsap.fromTo(
      ".dashboard__greeting",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  
    gsap.fromTo(
      ".dashboard__menu-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
    );
  
    gsap.fromTo(
      ".dashboard__content",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
    );
  }