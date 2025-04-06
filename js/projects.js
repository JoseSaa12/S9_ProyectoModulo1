document.addEventListener("DOMContentLoaded", () => {
    const bodyId = document.body.id; // Detectar en qué página estás
    const projectsContainer = document.querySelector(".projects-container");
  
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del JSON");
        }
        return response.json();
      })
      .then((projects) => {
        // Filtrar y ordenar proyectos si estás en "index.html"
        if (bodyId === "home-page") {
          const orderedProjects = [
            projects.find((project) => project.name === "Simplify"),
            projects.find((project) => project.name === "Dashcoin"),
            projects.find((project) => project.name === "Vectorify")
          ];
          renderProjects(orderedProjects, projectsContainer);
        }
  
        // Mostrar todos los proyectos si estás en "projects.html"
        if (bodyId === "projects-page") {
          renderProjects(projects, projectsContainer);
        }
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos:", error);
      });
  });
  
  function renderProjects(projects, container) {
    projects.forEach((project) => {
      const projectCard = document.createElement("article");
      projectCard.classList.add("project-card");
  
      projectCard.innerHTML = `
        <a class="project-wrapper" href="./projects.html?id=${project.uuid}">
          <img class="img-project" src="${project.image}" alt="${project.name}" />
          <div class="project-inner-card">
            <h4 class="project-title">${project.name}</h4>
            <p class="project-description">${project.description}</p>
            <a class="learn-more" href="./projects.html?id=${project.uuid}">Learn more</a>
          </div>
        </a>
      `;
      container.appendChild(projectCard);
    });
  }
  