/* ── Portfolio Enhancements ───────────────────────────────────────────────── */

(function () {
  /* ── Scroll progress bar ──────────────────────────────────────────────── */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }, { passive: true });

  /* ── Custom cursor (desktop only) ────────────────────────────────────── */
  const isTouchOnly = window.matchMedia("(hover: none)").matches;
  if (!isTouchOnly) {
    const dot  = document.createElement("div"); dot.className  = "cursor-dot";
    const ring = document.createElement("div"); ring.className = "cursor-ring";
    document.body.append(dot, ring);

    let mx = -999, my = -999, rx = -999, ry = -999;

    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    });

    // Ring follows with slight lag
    (function animateRing() {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll("a, button, .card, .filter-btn").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
    });
  }

  /* ── Card 3D tilt ────────────────────────────────────────────────────── */
  function attachTilt(card) {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform =
        `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
      card.style.boxShadow = `
        ${-x * 12}px ${-y * 12}px 32px rgba(17,17,17,0.13),
        0 8px 20px rgba(17,17,17,0.08)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  }

  document.querySelectorAll(".card").forEach(attachTilt);

  // Re-attach for dynamically rendered cards (projects page)
  const grid = document.querySelector("#projects-grid");
  if (grid) {
    const obs = new MutationObserver(() => {
      grid.querySelectorAll(".card").forEach(attachTilt);
    });
    obs.observe(grid, { childList: true });
  }

  /* ── Magnetic buttons ────────────────────────────────────────────────── */
  document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.28;
      const y = (e.clientY - r.top  - r.height / 2) * 0.28;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  /* ── Staggered reveal ────────────────────────────────────────────────── */
  window.refreshReveals = function () {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => io.observe(el));
  };
  window.refreshReveals();

  /* ── Animated stat counters ──────────────────────────────────────────── */
  function animateCounter(el) {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix  || "";
    const prefix  = el.dataset.prefix  || "";
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1400;
    const start    = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const val  = (target * ease).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = "1";
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".stat-counter").forEach(el => counterObserver.observe(el));

})();
