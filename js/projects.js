window.onload = () => {
  const API_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

  fetch(API_URL)
    .then(res => res.json())
    .then(projects => {
      const mainProject = projects.find(p => p.uuid === 1); 
      const otherProjects = projects.filter(p => p.uuid !== 1); 

      
      if (mainProject) {
        
        document.querySelector('.title').textContent = mainProject.name;

        
        document.querySelector('.UI-design-title').textContent = mainProject.description;
        document.querySelector('.completed-title-data').textContent = mainProject.completed_on;

        
        const img = document.querySelector('.project-image');
        img.src = mainProject.image;
        img.alt = mainProject.name; 

        
        document.querySelector('.project-description').textContent = mainProject.content;
      }

      
      const container = document.querySelector('.projects-container-api');
      container.innerHTML = ''; 

      otherProjects.forEach(p => {
        const article = document.createElement('article');
        article.className = 'project-card';

        article.innerHTML = `
          <a class="project-wrapper" href="./projects.html?id=${p.uuid}">
            <img class="img-project" src="${p.image}" alt="${p.name}" />
            <div class="project-inner-card">
              <h4 class="project-title">${p.name}</h4>
              <p class="project-description capitalize">${p.description}</p>
              <a class="learn-more" href="./projects.html?id=${p.uuid}">Learn more</a>
            </div>
          </a>
        `;
        container.appendChild(article);
      });
    })
    .catch(err => {
      console.error('Error al cargar los proyectos:', err);
      document.querySelector('.modal').style.display = 'block'; 
    });
};
