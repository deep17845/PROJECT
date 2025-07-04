const mySkills = ["HTML", "CSS", "JavaScript", "Python",];
    const skillsList = document.getElementById("skillsList");
    mySkills.forEach(skill => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill";
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });

    const myProjects = [
      {
        name: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills and projects.",
        tech: "HTML, CSS, JavaScript",
        link: "https://github.com/yourusername/"
      },
      {
        name: "To-Do List App",
        description: "A simple to-do list app with add/delete functionality.",
        tech: "HTML, CSS, JavaScript",
        link: "https://deep17845.github.io/PROJECT/pro.text/todolist.html"
      }
    ];

    const projectList = document.getElementById("projectList");
    myProjects.forEach(project => {
      const projectItem = document.createElement("div");
      projectItem.className = "project";
      projectItem.innerHTML = `<strong>${project.name}</strong><br>${project.description}<br><em>${project.tech}</em><br><a href="${project.link}" target="_blank" style="color: #fff; text-decoration: underline;">View Project</a>`;
      projectList.appendChild(projectItem);
    });