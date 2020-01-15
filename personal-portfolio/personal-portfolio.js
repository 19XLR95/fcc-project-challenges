function scrollToHeader() {
    let header = document.getElementsByTagName('HEADER');
    header[0].scrollIntoView({
        behavior: "smooth",
    });
}

function scrollToProjects() {
    let projects = document.getElementById('projects');
    projects.scrollIntoView({
        behavior: "smooth",
    });
}

function scrollToContact() {
    let footer = document.getElementsByTagName('FOOTER');
    footer[0].scrollIntoView({
        behavior: "smooth",
    });
}
