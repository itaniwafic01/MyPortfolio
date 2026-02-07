// Edit this single data object to add or update projects across the site.
const projects = [
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
          "Sized links and joints for high loads and thermal stress.\\n\\n\\\\( \\u03c3 = \\\\frac{F}{A} \\\\)\\n\\nVerified key components with safety factors tailored to 1000 N loading.",
      },
      {
        title: "Thermal Envelope",
        content:
          "Material selection based on 1060 aluminum alloy properties.\\n\\n\\\\( \\u0394L = \\u03b1 L_0 \\u0394T \\\\)\\n\\nChecked thermal expansion to maintain joint tolerances.",
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
          <div class="tagline">Figure/plot placeholder</div>
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
