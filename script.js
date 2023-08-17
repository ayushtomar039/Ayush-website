document.querySelector(".projects-button").addEventListener("click", goto_projects);  

function goto_projects () {
    window.location.href = './pages/projects.html';
}

document.querySelector(".resume-button").addEventListener("click", open_resume);

function open_resume () {
    window.location.href = './Assets/Documents/Ayush_Tomar_Resume.pdf';
}