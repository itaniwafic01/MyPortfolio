// Edit this single data object to add or update projects across the site.
const projects = [
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
          <p>${section.content.replace(/\n/g, "<br>")}</p>
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
