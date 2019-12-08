"use strict"

/**
 * Toggle accordion element when the button element
 * clicked. The accordion element should be next sibling
 * of the button.
 * 
 * @param element the button that has been clicked
 **/
function openAccordion(element) {
    let sibling = element.nextElementSibling; // button's next sibling element: ul

    if(sibling.tagName == "UL") {
        element.classList.toggle("active");

        let buttonIcon = element.children[0]; // button's 1st child element: span contains icon

        if(sibling.style.display == "" || sibling.style.display == "none") {
            element.style.fontWeight = 700;

            buttonIcon.innerText = "-";
            buttonIcon.style.fontWeight = 700;

            sibling.style.display = "block";
        } else {
            element.style.fontWeight = 300;

            buttonIcon.innerText = "+";
            buttonIcon.style.fontWeight = 300;

            sibling.style.display = "none";
        }
    }
}

/**
 * Toggle to open or hide the documentation table of content
 * when the button element clicked. Documentation table of
 * content should be next sibling of the button. The button
 * appears in small windows or mobile devices.
 * 
 * @param element the button that has been clicked
 **/
function openDocNav(element) {
    let sibling = element.nextElementSibling; // button's next sibling element: header

    if(sibling.tagName == "HEADER") {
        if(sibling.style.display == "" || sibling.style.display == "none") {
            element.style.position = "absolute";
            element.style.left = "57%";
            element.style.top = "4%";
            element.style.width = "40px"
            element.style.height = "40px";
            element.style.boxShadow = "1px 1px 2px 2px rgba(0, 0, 0, 0.3)";
            element.innerText = "<";
            
            sibling.style.display = "block";
        } else {
            element.style.position = "";
            element.style.width = ""
            element.style.height = "";
            element.style.boxShadow = "";
            element.innerText = ">";

            sibling.style.display = "none";
        }
    }
}

// page display area resize event
window.onresize = (event) => {
    let header = document.getElementsByTagName("header")[0];

    if(window.innerWidth > 950) {
        header.style.display = "block";
    } else {
        let toggleDocNav = document.getElementById("toggleDocNav");

        if(toggleDocNav.style.position != "absolute") {
            header.style.display = "none";
        }
    }
}
