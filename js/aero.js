// Aero stage: canvas streamline animation + DRS toggle for the homepage hero.

(function () {
  const stage = document.querySelector("[data-aero-stage]");
  if (!stage) return;

  const canvas = stage.querySelector("#flowCanvas");
  const ctx = canvas.getContext("2d");
  const drsLabel = stage.querySelector("[data-drs-label]");
  const toggleBtn = document.querySelector("[data-drs-toggle]");

  let drsOpen = false;
  let width = 0;
  let height = 0;
  let flowTime = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function flowY(x, baseY, phase) {
    const carCenter = width * 0.5;
    const rearWing = width * 0.73;
    const overBodyLift = Math.exp(-Math.pow((x - carCenter) / (width * 0.22), 2));
    const rearWingUpwash = Math.exp(-Math.pow((x - rearWing + width * 0.11) / (width * 0.28), 2));
    const wake = Math.max(0, x - rearWing) / Math.max(1, width * 0.27);
    const wakeStrength = drsOpen ? 8 : 34;
    const attachedFlow = drsOpen ? 8 : 20;
    const upwash = drsOpen ? 12 : 28;
    const oscillation = Math.sin(x * 0.014 + phase) * (drsOpen ? 1.8 : 4.2);
    return baseY - overBodyLift * attachedFlow - rearWingUpwash * upwash +
      Math.sin(wake * 8 + phase) * wakeStrength * Math.min(wake, 1) + oscillation;
  }

  function drawStreamline(baseY, phase, color, lineWidth, dashOffset) {
    const start = -40;
    const end = width + 60;
    const step = Math.max(18, width / 42);

    ctx.beginPath();
    for (let x = start; x <= end; x += step) {
      const y = flowY(x, baseY, phase);
      if (x === start) {
        ctx.moveTo(x, y);
      } else {
        const prevX = x - step;
        const prevY = flowY(prevX, baseY, phase);
        ctx.quadraticCurveTo(prevX + step / 2, (prevY + y) / 2, x, y);
      }
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([42, 22]);
    ctx.lineDashOffset = dashOffset;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function drawWakeVortices() {
    if (drsOpen) return;
    const originX = width * 0.76;
    const originY = height * 0.48;
    ctx.strokeStyle = "rgba(225, 6, 0, 0.34)";
    ctx.lineWidth = 1.7;
    ctx.setLineDash([18, 12]);
    ctx.lineDashOffset = -flowTime * 3;

    for (let i = 0; i < 4; i++) {
      const radiusX = 30 + i * 24;
      const radiusY = 15 + i * 11;
      ctx.beginPath();
      ctx.ellipse(
        originX + i * 38,
        originY + Math.sin(flowTime * 0.03 + i) * 10,
        radiusX, radiusY, 0.18, 0, Math.PI * 1.75
      );
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  function drawFlow() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineCap = "round";
    flowTime += drsOpen ? 1.45 : 1;

    const lineCount = width < 520 ? 7 : 11;
    const top = height * 0.22;
    const spacing = height * 0.044;

    for (let i = 0; i < lineCount; i++) {
      const baseY = top + i * spacing;
      const phase = i * 0.76;
      const warmLine = i > lineCount * 0.47;
      const color = drsOpen
        ? `rgba(0, 212, 255, ${warmLine ? 0.58 : 0.44})`
        : warmLine
          ? "rgba(255, 212, 59, 0.66)"
          : "rgba(0, 212, 255, 0.46)";
      drawStreamline(
        baseY, phase, color,
        warmLine ? 2.1 : 1.6,
        -flowTime * (drsOpen ? 3.2 : 2.35) - i * 10
      );
    }

    drawWakeVortices();
    requestAnimationFrame(drawFlow);
  }

  function setDrs(open) {
    drsOpen = open;
    stage.classList.toggle("drs-open", open);
    if (drsLabel) {
      drsLabel.textContent = open
        ? "DRS open: lower wake, reduced drag"
        : "DRS closed: high downforce, high wake drag";
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle("active", open);
      toggleBtn.querySelector(".toggle-label").textContent = open ? "DRS Open" : "DRS Closed";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => setDrs(!drsOpen));
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  setDrs(false);
  drawFlow();
})();
