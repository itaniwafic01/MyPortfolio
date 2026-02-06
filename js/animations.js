// Lightweight scroll reveal using IntersectionObserver for performance.
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const observeReveals = () => {
  const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");
  revealItems.forEach((item) => revealObserver.observe(item));
};

// Initial scan on load.
observeReveals();

// Allow dynamic content to trigger a refresh.
window.refreshReveals = observeReveals;
