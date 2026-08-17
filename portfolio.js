/* =====================================
   PORTFOLIO.JS
===================================== */


/* =====================================
   PROJECT DATA
===================================== */

let projects = JSON.parse(
    localStorage.getItem("projects")
) || [];


let editIndex = null;

let imageData = "";



/* =====================================
   TEST PROJECT
   TEMPORARY ONLY
===================================== */

const testProject = {

    image: "assets/default-project.png",

    title: "TEST PROJECT",

    category: "Testing",

    status: "Testing",

    description:
        "This is a temporary placeholder project to test if the latest portfolio JavaScript is being deployed correctly on GitHub and Netlify.",

    tools:
        "HTML, CSS, JavaScript",

    link: "#"

};


/*
   Add TEST PROJECT only once.

   This makes sure that even if there are
   already projects saved in localStorage,
   the test project will still appear.
*/

if (
    !projects.some(
        project =>
            project.title === "TEST PROJECT"
    )
) {

    projects.push(testProject);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

}



/* =====================================
   ELEMENTS
===================================== */

const projectContainer =
    document.getElementById(
        "projectContainer"
    );


const noProject =
    document.getElementById(
        "noProject"
    );


const modal =
    document.getElementById(
        "projectModal"
    );


const imageInput =
    document.getElementById(
        "projectImage"
    );


const imagePreview =
    document.getElementById(
        "imagePreview"
    );



/* =====================================
   OPEN MODAL
===================================== */

function openProjectModal() {

    if (!modal) return;


    modal.style.display = "flex";


    document.getElementById(
        "modalTitle"
    ).innerHTML =
        "Add Project";


    editIndex = null;


    clearForm();

}



/* =====================================
   CLOSE MODAL
===================================== */

function closeProjectModal() {

    if (!modal) return;


    modal.style.display = "none";


    clearForm();

}



/* =====================================
   CLEAR FORM
===================================== */

function clearForm() {

    const title =
        document.getElementById(
            "projectTitle"
        );

    const category =
        document.getElementById(
            "projectCategory"
        );

    const status =
        document.getElementById(
            "projectStatus"
        );

    const description =
        document.getElementById(
            "projectDescription"
        );

    const tools =
        document.getElementById(
            "projectTools"
        );

    const link =
        document.getElementById(
            "projectLink"
        );


    if (title)
        title.value = "";


    if (category)
        category.value = "";


    if (status)
        status.value = "";


    if (description)
        description.value = "";


    if (tools)
        tools.value = "";


    if (link)
        link.value = "";


    if (imagePreview)
        imagePreview.src = "";


    if (imageInput)
        imageInput.value = "";


    imageData = "";

}



/* =====================================
   IMAGE PREVIEW
===================================== */

if (imageInput) {

    imageInput.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];


            if (!file) return;


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    imageData =
                        event.target.result;


                    if (imagePreview) {

                        imagePreview.src =
                            imageData;

                    }

                };


            reader.readAsDataURL(file);

        }
    );

}



/* =====================================
   SAVE PROJECT
===================================== */

function saveProject() {

    const title =
        document.getElementById(
            "projectTitle"
        ).value.trim();


    const category =
        document.getElementById(
            "projectCategory"
        ).value;


    const status =
        document.getElementById(
            "projectStatus"
        ).value;


    const description =
        document.getElementById(
            "projectDescription"
        ).value.trim();


    const tools =
        document.getElementById(
            "projectTools"
        ).value.trim();


    const link =
        document.getElementById(
            "projectLink"
        ).value.trim();



    if (
        title === "" ||
        description === ""
    ) {

        alert(
            "Please complete required fields."
        );

        return;

    }



    const project = {

        image:
            imageData ||
            "assets/default-project.png",

        title:
            title,

        category:
            category,

        status:
            status,

        description:
            description,

        tools:
            tools,

        link:
            link

    };



    if (editIndex === null) {

        projects.push(project);

    }

    else {

        projects[editIndex] =
            project;

    }



    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );



    displayProjects();


    closeProjectModal();

}



/* =====================================
   DISPLAY PROJECTS
===================================== */

function displayProjects() {

    if (!projectContainer) return;


    projectContainer.innerHTML = "";



    if (projects.length === 0) {

        if (noProject) {

            noProject.style.display =
                "block";

        }

    }

    else {

        if (noProject) {

            noProject.style.display =
                "none";

        }

    }



    projects.forEach(
        function (project, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "project-card";



            card.innerHTML = `

                <img
                    src="${project.image || "assets/default-project.png"}"
                    alt="${project.title}"
                >


                <div class="project-content">


                    <span class="category">

                        ${project.category || ""}

                    </span>


                    <span class="status">

                        ${project.status || ""}

                    </span>


                    <h2>

                        ${project.title}

                    </h2>


                    <p>

                        ${project.description}

                    </p>


                    <div class="tools-used">

                        🛠 Tools Used:

                        ${project.tools || "N/A"}

                    </div>


                    <div class="project-buttons">


                        <a
                            href="${project.link || "#"}"
                            target="_blank"
                            class="view-btn"
                        >

                            View Project

                        </a>


                        <button
                            class="edit-btn"
                            onclick="editProject(${index})"
                        >

                            Edit

                        </button>


                        <button
                            class="delete-btn"
                            onclick="deleteProject(${index})"
                        >

                            Delete

                        </button>


                    </div>


                </div>

            `;



            projectContainer.appendChild(
                card
            );

        }
    );

}



/* =====================================
   EDIT PROJECT
===================================== */

function editProject(index) {

    const project =
        projects[index];


    if (!project) return;


    editIndex =
        index;



    document.getElementById(
        "modalTitle"
    ).innerHTML =
        "Edit Project";



    document.getElementById(
        "projectTitle"
    ).value =
        project.title || "";



    document.getElementById(
        "projectCategory"
    ).value =
        project.category || "";



    document.getElementById(
        "projectStatus"
    ).value =
        project.status || "";



    document.getElementById(
        "projectDescription"
    ).value =
        project.description || "";



    document.getElementById(
        "projectTools"
    ).value =
        project.tools || "";



    document.getElementById(
        "projectLink"
    ).value =
        project.link || "";



    imageData =
        project.image || "";



    if (imagePreview) {

        imagePreview.src =
            project.image || "";

    }



    if (modal) {

        modal.style.display =
            "flex";

    }

}



/* =====================================
   DELETE PROJECT
===================================== */

function deleteProject(index) {

    const project =
        projects[index];


    if (!project) return;



    const confirmDelete =
        confirm(
            `Are you sure you want to delete "${project.title}"?`
        );



    if (!confirmDelete) return;



    projects.splice(
        index,
        1
    );



    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );



    displayProjects();

}



/* =====================================
   CLOSE MODAL OUTSIDE CLICK
===================================== */

window.addEventListener(
    "click",
    function (event) {

        if (
            modal &&
            event.target === modal
        ) {

            closeProjectModal();

        }

    }
);



/* =====================================
   LOAD PROJECTS
===================================== */

displayProjects();
