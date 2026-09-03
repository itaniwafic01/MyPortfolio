// Edit this single data object to add or update projects across the site.
const projects = [
  {
    id: "f1-lap-optimizer",
    name: "F1 Lap Time Optimizer",
    summary: "Machine learning model that predicts Formula 1 qualifying lap times sector-by-sector, trained on 2026 season data and validated against real qualifying results.",
    problem: "Predict 2026 Austrian GP qualifying order and sector times blind — before the session runs — using only prior-season data.",
    tools: ["Python", "XGBoost", "FastF1", "pandas", "scikit-learn", "NumPy"],
    outcome: "LAW predicted exactly P9 ✓. Field order largely correct — RUS, HAM, LEC, NOR, VER, PIA all within ±3 positions. VER crash under yellow flag compressed the grid and disrupted the session.",
    thumbnail: "",
    gallery: [],
    recruiterSummary: "End-to-end ML pipeline built from data collection to prediction: scraped and processed 2026 F1 telemetry via FastF1, trained separate XGBoost regressors for each sector, and generated a blind qualifying prediction before the Austrian GP. Demonstrates applied ML, motorsport domain knowledge, and data engineering.",
    links: [{ label: "GitHub", url: "https://github.com/itaniwafic01/f1-lap-optimizer" }],
    technicalSections: [
      {
        title: "Model Architecture & Training Pipeline",
        content: `Trained three independent XGBoost regressors — one per sector (S1, S2, S3) — on FastF1 telemetry data from the first seven rounds of the 2026 F1 season.<br><br>
Features per driver per session included: compound type, tyre age, air and track temperature, session type, circuit characteristics, and historical sector performance. Final lap time is the sum of the three sector predictions, avoiding compounding errors from a single end-to-end model.<br><br>
<strong>Tools:</strong> Python · XGBoost · FastF1 · pandas · scikit-learn · NumPy`,
      },
      {
        title: "Blind Prediction — 2026 Austrian GP Qualifying",
        content: `<div class="pred-note">Prediction generated before qualifying on <strong>June 28, 2026</strong>. No actual session data was used.</div><div class="pred-table-wrap">
<table class="pred-table">
  <thead>
    <tr><th>Pos</th><th>Driver</th><th>Team</th><th>S1</th><th>S2</th><th>S3</th><th>Lap Time</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td class="driver">VER</td><td>Red Bull Racing</td><td>16.219</td><td>28.895</td><td>19.431</td><td class="laptime">1:04.545</td></tr>
    <tr><td>2</td><td class="driver">HAM</td><td>Ferrari</td><td>16.346</td><td>28.813</td><td>19.497</td><td class="laptime">1:04.656</td></tr>
    <tr><td>3</td><td class="driver">RUS</td><td>Mercedes</td><td>16.344</td><td>28.932</td><td>19.415</td><td class="laptime">1:04.691</td></tr>
    <tr><td>4</td><td class="driver">NOR</td><td>McLaren</td><td>16.441</td><td>28.859</td><td>19.411</td><td class="laptime">1:04.711</td></tr>
    <tr><td>5</td><td class="driver">LEC</td><td>Ferrari</td><td>16.339</td><td>28.997</td><td>19.469</td><td class="laptime">1:04.805</td></tr>
    <tr><td>6</td><td class="driver">HAD</td><td>Red Bull Racing</td><td>16.403</td><td>28.918</td><td>19.499</td><td class="laptime">1:04.819</td></tr>
    <tr><td>7</td><td class="driver">ANT</td><td>Mercedes</td><td>16.403</td><td>28.963</td><td>19.527</td><td class="laptime">1:04.893</td></tr>
    <tr><td>8</td><td class="driver">PIA</td><td>McLaren</td><td>16.404</td><td>28.962</td><td>19.546</td><td class="laptime">1:04.912</td></tr>
    <tr><td>9</td><td class="driver">LAW</td><td>Racing Bulls</td><td>16.610</td><td>29.197</td><td>19.590</td><td class="laptime">1:05.398</td></tr>
    <tr><td>10</td><td class="driver">GAS</td><td>Alpine</td><td>16.586</td><td>29.242</td><td>19.626</td><td class="laptime">1:05.454</td></tr>
  </tbody>
</table></div>`,
      },
      {
        title: "Actual Results vs Prediction — Austrian GP",
        content: `<div class="pred-note">Actual qualifying results from June 28, 2026. VER was on a pole lap when he slid off in S3, raising yellow flags and disrupting the field — the session effectively ended there. LAW predicted exactly P9 ✓</div><div class="pred-table-wrap"><table class="pred-table"><thead><tr><th>Driver</th><th>Pred Pos</th><th>Actual Pos</th><th>Δ</th><th>Predicted Time</th><th>Actual Time</th></tr></thead><tbody><tr><td class="driver">RUS</td><td>3</td><td>1</td><td class="delta-good">▲2</td><td>1:04.691</td><td class="laptime">1:06.113</td></tr><tr><td class="driver">LEC</td><td>5</td><td>2</td><td class="delta-good">▲3</td><td>1:04.805</td><td class="laptime">1:06.349</td></tr><tr><td class="driver">HAM</td><td>2</td><td>3</td><td class="delta-miss">▼1</td><td>1:04.656</td><td class="laptime">1:06.408</td></tr><tr><td class="driver">ANT</td><td>7</td><td>4</td><td class="delta-good">▲3</td><td>1:04.893</td><td class="laptime">1:06.414</td></tr><tr><td class="driver">VER</td><td>1</td><td>5</td><td class="delta-miss">▼4</td><td>1:04.545</td><td class="laptime">1:06.475</td></tr><tr><td class="driver">NOR</td><td>4</td><td>6</td><td class="delta-miss">▼2</td><td>1:04.711</td><td class="laptime">1:06.475</td></tr><tr><td class="driver">PIA</td><td>8</td><td>7</td><td class="delta-good">▲1</td><td>1:04.912</td><td class="laptime">1:06.511</td></tr><tr><td class="driver">HAD</td><td>6</td><td>8</td><td class="delta-miss">▼2</td><td>1:04.819</td><td class="laptime">1:06.632</td></tr><tr style="background:rgba(47,181,163,0.1)"><td class="driver">LAW</td><td>9</td><td>9</td><td style="font-weight:700;color:var(--color-accent)">✓</td><td>1:05.398</td><td class="laptime">1:06.955</td></tr><tr><td class="driver">GAS/LIN</td><td>10</td><td>10</td><td>—</td><td>1:05.454</td><td class="laptime">1:07.007</td></tr></tbody></table></div>`,
      },
    ],
  },
  {
    id: "jarvis",
    name: "JARVIS — Self-Hosted AI Assistant",
    summary: "A fully functional, locally-hosted AI assistant built on my own hardware over 13 million tokens of directed development with Claude. Voice and text interface, 49 integrated tools, custom 3D UI — built deliberately to free up mental bandwidth for hands-on engineering work.",
    problem: "Build a personal AI system that actually runs pieces of my life: email, calendar, documents, finances, job search — accessible from anywhere, running on my own hardware, tuned to an engineering workflow.",
    tools: ["Python", "FastAPI", "Ollama", "SQLite", "Three.js", "SearXNG", "faster-whisper", "Piper TTS", "Tailscale"],
    outcome: "49 integrated tools spanning email, calendar, contacts, memory, documents, reminders, to-do, job search, voice I/O, image analysis, and math. Accessible from Mac, Telegram, or any browser over Tailscale. CPU-inference on modest hardware (i7-1165G7, 20 GB RAM).",
    thumbnail: "assets/images/jarvis_dashboard.png",
    gallery: [
      "assets/images/jarvis_dashboard.png",
      "assets/images/jarvis_chat.png",
      "assets/images/jarvis_tools_1.png",
      "assets/images/jarvis_tools_2.png",
    ],
    recruiterSummary: "Directed the architecture and full integration of a self-hosted AI assistant — FastAPI backend with Server-Sent Events for streaming, vanilla JS/HTML/CSS frontend with a Three.js 3D interface, Ollama serving two local LLMs (qwen2.5:7b default, deepseek-r1:14b deep mode), and SQLite for persistent storage across features. 49 tools built across 10+ categories. Remote access via Tailscale. Transparent about the human-AI collaboration model: I designed the system, directed decisions, tested, and pushed back on failures — Claude implemented. That split is the skill.",
    links: [],
    technicalSections: [
      {
        title: "System Architecture",
        content: `The backend is <strong>FastAPI (Python)</strong> serving a REST API with Server-Sent Events for token-by-token streaming responses. The frontend is deliberate vanilla JS/HTML/CSS — no framework, no build step — a single <code>app.js</code> talking directly to the API. The 3D orb interface is built with <strong>Three.js</strong>, animating in real time to reflect JARVIS's state (idle, listening, thinking, speaking).<br><br>
Each feature domain uses its own <strong>SQLite file</strong> — chat history, memory, contacts, reminders, to-do, finances — keeping data isolated and the system simple to debug or extend.<br><br>
Remote access is handled by <strong>Tailscale</strong>, which creates a private network across devices without exposing any ports. Accessible from the Mac, from Telegram, or from any browser.`,
      },
      {
        title: "Inference Stack & Voice Pipeline",
        content: `Two local LLMs served via <strong>Ollama</strong>:<br>
• <strong>qwen2.5:7b-instruct</strong> — fast default for most tasks<br>
• <strong>deepseek-r1:14b</strong> — opt-in "Deep Mode" for harder reasoning (user-toggled per chat)<br><br>
Inference is CPU-bound in practice — the host machine's NVIDIA MX350 (2 GB VRAM) can't hold the model, so the GPU contributes roughly 4% of compute. This keeps latency honest: results are real, not benchmarked on a high-end rig.<br><br>
Voice pipeline: <strong>faster-whisper</strong> for speech-to-text (local, no cloud), <strong>Piper TTS</strong> for synthesis. Web search is self-hosted via <strong>SearXNG</strong> — no API keys, no third-party query logging.`,
      },
      {
        title: "Tool Ecosystem — 49 Tools",
        content: `<div class="pred-note">Tools are grouped by domain and selectable per-chat to control context size and response speed.</div><div class="pred-table-wrap"><table class="pred-table"><thead><tr><th>Domain</th><th>Tools</th></tr></thead><tbody>
<tr><td><strong>General</strong></td><td>web_search, get_current_time, get_weather, run_python</td></tr>
<tr><td><strong>Email</strong></td><td>read_recent_emails, search_emails, send_email, reply_to_email, forward_email, archive_email, delete_email, update_email_flags, save_draft</td></tr>
<tr><td><strong>Memory</strong></td><td>remember, recall, forget</td></tr>
<tr><td><strong>Conversations</strong></td><td>search_conversations, reindex_conversations</td></tr>
<tr><td><strong>Contacts</strong></td><td>add_contact, find_contact, list_contacts, remove_contact</td></tr>
<tr><td><strong>Calendar</strong></td><td>list_calendar_events, add_calendar_event, update_calendar_event, delete_calendar_event</td></tr>
<tr><td><strong>Documents</strong></td><td>search_documents, list_indexed_documents, reindex_documents, read_document</td></tr>
<tr><td><strong>Device Control</strong></td><td>open_app, open_url</td></tr>
<tr><td><strong>Reminders</strong></td><td>set_reminder, list_reminders, cancel_reminder</td></tr>
<tr><td><strong>To-Do List</strong></td><td>add_todo, list_todos, complete_todo, delete_todo</td></tr>
<tr><td><strong>Jobs</strong></td><td>search_jobs</td></tr>
<tr><td><strong>Attachments</strong></td><td>analyze_image, read_image_text, save_attachment</td></tr>
<tr><td><strong>Math</strong></td><td>math_calculus, math_stats, math_plot</td></tr>
</tbody></table></div>`,
      },
      {
        title: "On the Human–AI Collaboration Model",
        content: `This project was built over <strong>13 million tokens</strong> of directed development. Claude (Anthropic) did the majority of implementation: architecture decisions, debugging, frontend, backend. My role was direction, testing, and pushback — deciding what to build, how it should behave, and when something wasn't right.<br><br>
I'm transparent about this split because I think it's the honest version of what engineering with AI actually looks like in 2026. The skill isn't writing every line — it's knowing what to build, how to evaluate whether it works, and how to push a system toward something useful. That's what I practiced here, across 13 million tokens of iteration.`,
      },
    ],
  },
  {
    id: "f1-drs",
    name: "F1 DRS Aerodynamic Analysis",
    summary: "CFD and wind tunnel study of the Formula 1 Drag Reduction System, comparing drag and downforce in open and closed configurations.",
    problem: "Quantify the aerodynamic trade-offs of the F1 DRS flap using CFD simulation and experimental wind tunnel validation.",
    tools: ["ANSYS Discovery", "SolidWorks", "Wind Tunnel", "Load Cell", "3D Printing (PLA)"],
    outcome: "Closing DRS increases drag 6.5× (74 N → 479 N) and reduces aerodynamic efficiency from 6.50 to 4.24; CFD validated against wind tunnel within 5.1%.",
    thumbnail: "assets/images/streamlines_closed_3d.png",
    gallery: [
      "assets/images/DRS_Configurations.png",
      "assets/images/streamlines_closed_3d.png",
      "assets/images/streamlines_open_3d.png",
      "assets/images/velocity_hotzone_closed.png",
      "assets/images/vortex_closed.png",
      "assets/images/vortex_open.png",
      "assets/images/windtunnel_closed.png",
      "assets/images/windtunnel_open.png",
    ],
    recruiterSummary:
      "Full aerodynamic study from CAD to CFD to physical testing — modeled an F1 rear wing based on Red Bull RB6 geometry, simulated both DRS configurations in ANSYS Discovery, then validated results in AUB's wind tunnel. Drag reduced by 85% in open position; CFD error under 5.1%.",
    technicalSections: [
      {
        title: "Similarity Analysis & Test Conditions",
        content:
          "Scaled the RB6 rear wing to fit the AUB wind tunnel using a geometric scale factor λ = 5 (645 mm → 129 mm chord).\n\nDynamic similarity enforced by matching Reynolds number:\n\n\\( Re_P = Re_M \\implies v_M = v_P \\dfrac{L_P}{L_M} = 5 \\times 5 = 25\\ \\text{m/s} \\)\n\nPrototype speed: 5 m/s. Model speed: 25 m/s. Same fluid (air), so ρ/μ cancels.",
      },
      {
        title: "CFD Results — Drag & Downforce",
        content:
          "Drag and downforce decomposed into pressure and skin-friction components:\n\n\\( F_D = F_{p_{\\text{drag}}} + F_{f_{\\text{drag}}} \\)\n\n\\( F_d = F_{p_{\\text{down}}} + F_{f_{\\text{down}}} \\)\n\nClosed position: Drag = 479 N, Downforce = 235 N, \\(C_D = 1.641\\), \\(C_L = 6.952\\), AE = 4.24\n\nOpen position: Drag = 74 N, Downforce = 224 N, \\(C_D = 0.921\\), \\(C_L = 5.990\\), AE = 6.50\n\nOpening the DRS cuts drag by ~85% with only a 5% downforce penalty.",
      },
      {
        title: "Flow Physics — Venturi Effect & Vortex Formation",
        content:
          "In the closed position, the narrow gap between flap and wing base acts as a choke point. By continuity, velocity rises to 9 m/s (+80% above inlet); by Bernoulli, static pressure drops sharply, generating downforce.\n\nThe high angle of attack also causes flow separation at the trailing edge, producing large recirculation vortices and significant pressure drag.\n\nIn the open position, the reduced angle of attack keeps streamlines attached across the flap surface. Vortex formation is essentially eliminated, explaining the 6.5× drag reduction.",
      },
      {
        title: "Wind Tunnel Validation",
        content:
          "3D-printed PLA model tested on a load cell at 25 m/s. Drag measured directly.\n\nExperimental \\(C_D\\) (closed): 1.184 vs CFD 1.641 → error 5.11%\n\nExperimental \\(C_D\\) (open): 0.240 vs CFD 0.921 → error 0.61%\n\nError sources: mesh resolution (~65% fine in ANSYS), PLA surface roughness, and load cell calibration tolerance.",
      },
    ],
  },
  {
    id: "robotic-arm",
    name: "6-Axis Industrial Robotic Arm",
    summary:
      "Heavy-duty robotic arm designed for factory environments with high load and temperature requirements.",
    problem: "Design a 6-axis arm capable of 1000 N loads and operation up to 1000 K.",
    tools: ["SolidWorks", "CAD", "Robotics"],
    outcome: "Delivered a full CAD model and integrated elevator system for industrial workflows.",
    thumbnail: "assets/images/RA1.jpeg",
    gallery: ["assets/images/RA1.jpeg", "assets/images/RA2.jpeg"],
    recruiterSummary:
      "Designed a robust multi-axis arm with clear manufacturing constraints and thermal considerations.",
    technicalSections: [
      {
        title: "Structural Load",
        content:
          "Sized links and joints for high loads and thermal stress.\nVerified key components with safety factors tailored to 1000 N loading and 1000 K temperature.\nEvaluated end-effector deflection under full load to ensure positional error remained within acceptable tolerances for precision tasks.",
      },
      {
        title: "Dynamic Analysis",
        content:
          "Joint limits and offsets were optimized to maximize reachable workspace while avoiding wrist singularities.\nComputed link inertias directly from SolidWorks and evaluated peak joint torques under maximum payload and acceleration profiles using rigid-body dynamics."
      },
      {
        title: "Thermal Envelope",
        content:
          "Material selection based on 1060 aluminum alloy properties.\nChecked thermal expansion to maintain joint tolerances.\nPerformed steady-state thermal analysis to ensure joint temperatures remained below material and lubricant limits under continuous operation.",
      },
    ],
  },
  {
    id: "enduravolt",
    name: "EnduraVolt",
    summary: "Energy-recovering suspension integrating regenerative damping to convert vibration into usable electrical power.",
    problem: "Recover waste vibration energy in vehicles without compromising ride quality.",
    tools: ["SolidWorks", "MATLAB/Simulink", "ANSYS", "C++"],
    outcome: "Improved energy capture by 18% while maintaining target damping ratio.",
    recruiterSummary:
      "Designed a regenerative suspension concept with validated dynamics and a clear manufacturable pathway.",
    technicalSections: [
      {
        title: "Dynamic Model",
        content:
          "Modeled as a quarter-car system with regenerative damping.\n\n\\( m\\ddot{x} + c_r(\\dot{x}-\\dot{y}) + k(x-y) = 0 \\)\n\nUsed state-space form to map energy capture vs. ride comfort trade-offs.",
      },
      {
        title: "Energy Recovery",
        content:
          "Regenerative damper modeled as variable damping coefficient:\n\n\\( c_r = c_0 + k_e i \\)\n\nSimulated power output using:\n\\( P = c_r(\\dot{x}-\\dot{y})^2 \\)",
      },
    ],
  },
  {
    id: "skylight",
    name: "Automated Skylight Venting System",
    summary: "Sensor-driven skylight control for passive ventilation and indoor air quality.",
    problem: "Automate skylight ventilation based on temperature, humidity, and air quality.",
    tools: ["Arduino", "Python", "SolidWorks", "Proteus"],
    outcome: "Reduced indoor temperature peaks by 4.2°C in lab tests.",
    recruiterSummary:
      "Built a complete mechatronic prototype from sensors to actuation with reliable control logic.",
    technicalSections: [
      {
        title: "Control Logic",
        content:
          "Implemented a rule-based controller with hysteresis to avoid rapid switching.\n\n\\( u = \n\\begin{cases}1 & T > T_{high} \\\\ 0 & T < T_{low}\\end{cases} \\)",
      },
      {
        title: "Thermal Model",
        content:
          "Estimated indoor air temperature using a lumped capacitance model:\n\n\\( C\\frac{dT}{dt} = hA(T_{out}-T) + Q_{int} \\)",
      },
    ],
  },
  {
    id: "fracture",
    name: "Fracture Testing Machine",
    summary: "Custom-built rig to characterize fracture toughness of polymer samples.",
    problem: "Create a low-cost machine to measure fracture behavior with repeatable loading.",
    tools: ["SolidWorks", "LabVIEW", "Strain Gauges"],
    outcome: "Achieved 95% repeatability across 12 test runs.",
    recruiterSummary:
      "Delivered a lab-grade testing system with calibrated sensors and validated results.",
    technicalSections: [
      {
        title: "Load Calibration",
        content:
          "Derived calibration curve from strain gauge bridge:\n\n\\( V_{out} = (\\Delta R/R) V_{exc} G \\)\n\nMapped voltage to load using linear regression.",
      },
      {
        title: "Stress Intensity",
        content:
          "Calculated stress intensity factor:\n\n\\( K_I = Y\\sigma\\sqrt{\\pi a} \\)",
      },
    ],
  },
  {
    id: "impact",
    name: "Impact Toughness Testing Machine",
    summary: "Instrumented pendulum impact tester with energy absorption analysis.",
    problem: "Quantify material impact toughness using a repeatable pendulum test.",
    tools: ["SolidWorks", "MATLAB", "DAQ", "Laser Sensor"],
    outcome: "Automated energy curve extraction with 12% lower error vs. manual readout.",
    recruiterSummary:
      "Integrated sensing and data acquisition to turn a classic test into a digital workflow.",
    technicalSections: [
      {
        title: "Energy Calculation",
        content:
          "Impact energy derived from pendulum height loss:\n\n\\( E = m g (h_1 - h_2) \\)",
      },
      {
        title: "Signal Processing",
        content:
          "Filtered sensor output with a 2nd-order Butterworth filter to remove vibration noise.",
      },
    ],
  },
];

const projectGrid = document.querySelector("#projects-grid");
if (projectGrid) {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="card reveal">
        ${
          project.thumbnail
            ? `<img class="card-thumb" src="${project.thumbnail}" alt="${project.name} thumbnail" />`
            : ""
        }
        <div>
          <h3>${project.name}</h3>
          <p class="tagline">${project.problem}</p>
        </div>
        <a class="button secondary" data-transition href="project.html?id=${project.id}">View Details</a>
      </article>
    `
    )
    .join("");

  if (window.refreshReveals) {
    window.refreshReveals();
  }
}

const projectTemplate = document.querySelector("#project-template");
if (projectTemplate) {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id") || projects[0].id;
  const project = projects.find((item) => item.id === projectId) || projects[0];

  projectTemplate.querySelector("[data-project-title]").textContent = project.name;
  projectTemplate.querySelector("[data-project-summary]").textContent = project.summary;
  projectTemplate.querySelector("[data-project-recruiter]").textContent =
    project.recruiterSummary;
  projectTemplate.querySelector("[data-project-problem]").textContent = project.problem;
  projectTemplate.querySelector("[data-project-tools]").textContent = project.tools.join(", ");
  projectTemplate.querySelector("[data-project-outcome]").textContent = project.outcome;

  const linksSlot = projectTemplate.querySelector("[data-project-links]");
  if (linksSlot) {
    if (project.links && project.links.length > 0) {
      linksSlot.innerHTML = project.links
        .map((link) => `<a class="button secondary" href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`)
        .join("");
    } else {
      linksSlot.innerHTML = "";
    }
  }

  const gallerySlot = projectTemplate.querySelector("[data-project-gallery]");
  if (gallerySlot) {
    if (project.gallery && project.gallery.length > 0) {
      gallerySlot.innerHTML = project.gallery
        .map(
          (img) =>
            `<img class="project-gallery-image" src="${img}" alt="${project.name} figure" />`
        )
        .join("");
    } else {
      gallerySlot.innerHTML = "";
    }
  }

  const techContainer = projectTemplate.querySelector("#technical-sections");
  techContainer.innerHTML = project.technicalSections
    .map(
      (section, index) => `
      <div class="tech-toggle">
        <button type="button" aria-expanded="false" data-tech-toggle="${index}">
          ${section.title}
          <span>+</span>
        </button>
        <div class="tech-content" id="tech-${index}">
          <div class="tech-body">${section.content.includes("<") ? section.content : section.content.replace(/\n/g, "<br>")}</div>
        </div>
      </div>
    `
    )
    .join("");

  const toggles = projectTemplate.querySelectorAll("[data-tech-toggle]");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = `tech-${toggle.dataset.techToggle}`;
      const content = document.getElementById(targetId);
      const isOpen = content.classList.contains("active");
      content.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.querySelector("span").textContent = isOpen ? "+" : "−";
      if (window.MathJax) {
        window.MathJax.typesetPromise();
      }
    });
  });
}
