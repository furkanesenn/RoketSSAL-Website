// Mobile Nav

const navBtnEl = document.querySelector(".btn-mobile-nav"),
  headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", (_e) => {
  headerEl.classList.toggle("nav-open");
});

// Sticky Nav

let NavStatus = false;

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      NavStatus = true;
    }

    if (ent.isIntersecting === true) {
      if (NavStatus === true) {
        console.log("faded out");
        document.body.classList.add("FadeOutTop");
      }

      setTimeout(() => {
        document.body.classList.remove("FadeOutTop");
        document.body.classList.remove("sticky");
        NavStatus = false;
      }, 150);
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// UX Fix

window.addEventListener("load", (_e) => {
  ScrollReveal({
    origin: "left",
    distance: "4rem",
    easing: "ease-out",
    duration: 750,
  }).reveal(".hero-text-box");

  ScrollReveal({
    origin: "right",
    distance: "4rem",
    easing: "ease-out",
    duration: 750,
  }).reveal(".hero-img-box");

  ScrollReveal({
    origin: "bottom",
    distance: "4rem",
    easing: "ease-out",
    duration: 1000,
  }).reveal(".section-featured");

  document.querySelector("html").classList.add("pre-loaded");

  setTimeout(() => {
    document.querySelector("html").classList.add("loaded");

    if (
      !window.matchMedia(
        "@media screen and (prefers-reduced-motion: reduced) { }"
      ).matches
    ) {
      setTimeout(() => {
        ScrollReveal({
          origin: "left",
          distance: "4rem",
          easing: "ease-out",
          duration: 1000,
        }).reveal(".about-us-img-container");

        ScrollReveal({
          origin: "right",
          distance: "4rem",
          easing: "ease-out",
          duration: 1000,
          delay: 200,
        }).reveal(".about-us-content");

        ScrollReveal({
          origin: "bottom",
          distance: "4rem",
          easing: "ease-out",
          duration: 500,
        }).reveal(".departments-header");

        ScrollReveal({
          origin: "bottom",
          distance: "4rem",
          easing: "ease-out",
          duration: 750,
          delay: 200,
        }).reveal(".departments");

        ScrollReveal({
          origin: "bottom",
          distance: "4rem",
          easing: "ease-out",
          duration: 500,
        }).reveal(".members-header");

        ScrollReveal({
          origin: "bottom",
          distance: "4rem",
          easing: "ease-out",
          duration: 450,
        }).reveal(".member");

        ScrollReveal({
          origin: "bottom",
          distance: "4rem",
          easing: "ease-out",
          duration: 500,
        }).reveal(".section-cta");
      }, 500);
    }
  }, 1000);
});
