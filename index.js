const url = 'https://sheet2api.com/v1/qzraR21PQ8Sg/portfolio'

const projectCard = (title,	descriptions,	stack,	github, demo) => {
    return `
      <div class="top-project-card">
        <div class="folder-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="58" height="54" viewBox="0 0 58 54" fill="none">
            <path d="M56.5 46.25C56.5 47.7087 55.9205 49.1076 54.8891 50.1391C53.8576 51.1705 52.4587 51.75 51 51.75H7C5.54131 51.75 4.14236 51.1705 3.11091 50.1391C2.07946 49.1076 1.5 47.7087 1.5 46.25V7.75C1.5 6.29131 2.07946 4.89236 3.11091 3.86091C4.14236 2.82946 5.54131 2.25 7 2.25H20.75L26.25 10.5H51C52.4587 10.5 53.8576 11.0795 54.8891 12.1109C55.9205 13.1424 56.5 14.5413 56.5 16V46.25Z" stroke="#CCD6F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="link-github">
          <a class="external-link-icon" href="${demo}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75" stroke="#CCD6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 3.75H26.25V11.25" stroke="#CCD6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 17.5L26.25 3.75" stroke="#CCD6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a class="github-icon" href="${github}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M11.25 23.75C5 25.625 5 20.625 2.5 20M20 27.5V22.6625C20.0469 22.0665 19.9664 21.4673 19.7638 20.9048C19.5612 20.3423 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.90483 26.2034 7.22654 25 5.96254C25.5698 4.43568 25.5295 2.74798 24.8875 1.25004C24.8875 1.25004 23.4125 0.812544 20 3.10004C17.135 2.32357 14.115 2.32357 11.25 3.10004C7.8375 0.812544 6.3625 1.25004 6.3625 1.25004C5.72047 2.74798 5.68018 4.43568 6.25 5.96254C5.03766 7.23592 4.36565 8.92937 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8625 11.6966 20.3693 11.4941 20.9249C11.2917 21.4806 11.2085 22.0726 11.25 22.6625V27.5" stroke="#CCD6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-title">
        ${title}
      </div>
      <div class="project-description">
        ${descriptions}
      </div>
      <div class="stack">
        ${stack}
      </div>
    `
}

const fetchProjects = async () => {
    const res = await fetch(url);
    const projects = await res.json();
    return projects;
}

const setProjects = (projects) => {
    const project_section = document.getElementById('projects')

    projects.map(project => {
        const {title, descriptions, stack, github, demo} = project;
        const div = document.createElement("DIV");
        div.className = "project-card  headline";
        div.innerHTML = projectCard(title, descriptions, stack, github, demo);
        project_section.appendChild(div);
    })
}

(async () => {
    const projects = await fetchProjects();
    setProjects(projects)
})()
  
ScrollReveal().reveal('.headline', { delay: 200 });