/* =========================================
   PORTFOLIO DATA
========================================= */

let projects =
    JSON.parse(localStorage.getItem("projects")) || [];

let editIndex = null;
let imageData = "";


/* =========================================
   ELEMENTS
========================================= */

const projectContainer =
    document.getElementById("projectContainer");

const noProject =
    document.getElementById("noProject");

const modal =
    document.getElementById("projectModal");

const imageInput =
    document.getElementById("projectImage");

const imagePreview =
    document.getElementById("imagePreview");


/* =========================================
   DINEZY PROJECT
========================================= */

const dinezyProject = {

    image: "dinezy.jpg",

    title: "Dinezy",

    category: "UI/UX Design",

    status: "Completed",

    description:
        "A restaurant booking app mockup and UI design created in Figma. Dinezy focuses on providing a simple, modern, and user-friendly experience for browsing restaurants and making table reservations.",

    tools: "Figma",

    link:
        "https://www.figma.com/design/m1J8ADeDC2FXIOQtVuc6US/Dinezy?node-id=14-237&t=KH9f8zN1jFzebkQP-0",

    /* ADDED CONTENT */

    highlights: [
        {
            icon: "📱",
            title: "Mobile App",
            text: "Designed as a mobile restaurant booking experience."
        },
        {
            icon: "🎨",
            title: "UI/UX Design",
            text: "Focused on clean layouts and an easy user experience."
        },
        {
            icon: "🍽️",
            title: "Restaurant Booking",
            text: "Designed around browsing restaurants and reserving tables."
        },
        {
            icon: "🖥️",
            title: "Figma Prototype",
            text: "Created and organized using Figma."
        }
    ],

    features: [
        "Restaurant browsing",
        "Restaurant menu viewing",
        "Table reservation",
        "Booking management",
        "Reservation status",
        "User profile"
    ],

    designConcept:
        "Dinezy was designed with simplicity and convenience in mind. The interface focuses on making restaurant discovery and table reservation easier through clear navigation, organized information, and a modern mobile layout.",

    role: [
        "UI/UX Design",
        "Interface Layout",
        "Visual Design",
        "Prototype Design"
    ]

};


/* =========================================
   PHOTO STRIPS PROJECT
========================================= */

const photoStripProject = {

    image: "pts.jpg",

    title: "Photo Strips",

    category: "Graphic Design",

    status: "Ongoing",

    description:
        "A collection of creative photo strip designs created using Canva. Click the card to see each design and its description.",

    tools: "Canva",

    link:
        "https://www.canva.com/design/DAHRMQEwvuw/3gEuly4qMC0gZP21feLHCQ/edit?continue_in_browser=true",

    photoStrips: [

        {
            title: "🌊 Sea Memories",
            image: "seamemories.jpg",
            description:
                "Soft blue tones, seaside elements, and relaxing ocean-inspired details create a fresh coastal look that feels like a collection of memories by the sea."
        },

        {
            title: "🎋 Bamboo Shoots",
            image: "bambooshoots.jpg",
            description:
                "Natural bamboo patterns, earthy details, and fresh green accents give the strip a clean, tropical, and calming appearance."
        },

        {
            title: "🍓 Picnic Strawberry",
            image: "picnicstrawberry.jpg",
            description:
                "Cute strawberry illustrations, picnic-inspired details, and fresh red and green accents create a cheerful and sweet outdoor-inspired look."
        },

        {
            title: "🍊 Citrus Zest",
            image: "citruszest.jpg",
            description:
                "Bright citrus elements, orange-inspired accents, and refreshing colors give the strip a lively and sunny appearance."
        },

        {
            title: "🎧 Vintage Music",
            image: "vintagemusic.jpg",
            description:
                "Retro music elements, classic decorative details, and nostalgic tones create a vintage-inspired strip with an old-school music aesthetic."
        },

        {
            title: "🌳 Forest Glade",
            image: "forestglade.jpg",
            description:
                "Soft greenery, woodland elements, tiny natural details, and forest-inspired decorations create a peaceful and cozy nature-filled appearance."
        },

        {
            title: "🍵 Matcha Breeze",
            image: "matchabreeze.jpg",
            description:
                "Soft matcha green tones, delicate tea-inspired elements, and simple decorative details give the strip a fresh, clean, and calming look."
        },

        {
            title: "🪻 Lavender Hush",
            image: "lavenderhush.jpg",
            description:
                "Soft lavender shades, delicate floral accents, and subtle decorative elements create a gentle, dreamy, and elegant appearance."
        },

        {
            title: "🍀 Clover Luck",
            image: "cloverluck.jpg",
            description:
                "Green clover details, playful accents, and fresh natural tones give the strip a cheerful and lucky-inspired appearance."
        },

        {
            title: "🎡 Carnival Pop",
            image: "carnivalpop.jpg",
            description:
                "Colorful carnival decorations, playful patterns, and vibrant accents create a fun and energetic photo strip that feels like a day at the fair."
        },

        {
            title: "🎀 Ribbon & Lace",
            image: "ribbonlace.jpg",
            description:
                "Decorative ribbons, lace-inspired patterns, and delicate accents create a soft, elegant, and charming appearance with a pretty decorative feel."
        },

        {
            title: "🍦 Mint Choco Ice Cream",
            image: "mintchocoicecream.jpg",
            description:
                "Mint green and chocolate tones, ice cream-inspired elements, and sweet decorative details create a cool and playful dessert-themed look."
        },

        {
            title: "🍕 Pizza Party",
            image: "pizzaparty.jpg",
            description:
                "Pizza illustrations, fun food details, and playful accents create a colorful and casual strip with a lively party-inspired appearance."
        },

        {
            title: "🌙 Starlight Dreams",
            image: "starlightdreams.jpg",
            description:
                "Deep nighttime tones, stars, moon-inspired details, and subtle glowing accents create a dreamy photo strip with a magical evening atmosphere."
        },

        {
            title: "🌿🫖 Tea Garden",
            image: "teagarden.jpg",
            description:
                "Botanical details, tea-inspired elements, soft greenery, and delicate decorations create a peaceful garden setting with a cozy and elegant feel."
        },

        {
            title: "🍬 Candy Land",
            image: "candyland.jpg",
            description:
                "Colorful candy details, sweet illustrations, and playful decorative elements create a bright, cheerful, and whimsical appearance."
        },

        {
            title: "🎞️ Retro Snap",
            image: "retrosnap.jpg",
            description:
                "Film-inspired details, vintage decorations, and classic tones give the strip a nostalgic photography look reminiscent of old snapshots."
        },

        {
            title: "🫙 Jam & Joy",
            image: "jamjoy.jpg",
            description:
                "Jam jars, fruity details, warm accents, and playful decorations create a cozy homemade look filled with colorful and cheerful details."
        },

        {
            title: "🌸 Sakura Bloom",
            image: "sakurabloom.jpg",
            description:
                "Soft cherry blossom details, pink floral accents, and delicate decorations create a graceful spring-inspired appearance with a gentle and elegant feel."
        },

        {
            title: "🫐 Blueberry Bliss",
            image: "blueberrybliss.jpg",
            description:
                "Blueberry illustrations, cool blue and purple tones, and playful berry-inspired details create a fresh and sweet-looking photo strip."
        },

        {
            title: "🍉 Watermelon Splash",
            image: "watermelon.jpg",
            description:
                "Watermelon slices, fresh green and red accents, and playful summer details create a bright and refreshing seasonal appearance."
        },

        {
            title: "🌈 Rainbow Blast",
            image: "rainbowblast.jpg",
            description:
                "Colorful rainbow accents, playful shapes, and vibrant decorative details create a cheerful photo strip with a lively and energetic look."
        },

        {
            title: "💎🌪️ Brilyante ng Hangin",
            image: "brilyantedhangin.jpg",
            description:
                "Sparkling diamond details, flowing wind-inspired elements, and light decorative accents create a unique and whimsical appearance with a sense of movement."
        },

        {
            title: "🐼 Panda Vibe",
            image: "pandavibe.jpg",
            description:
                "Cute panda illustrations, simple contrasting tones, and playful decorative details create a fun, relaxed, and adorable photo strip."
        },

        {
            title: "🧋 Boba Break",
            image: "bobabreak.jpg",
            description:
                "Bubble tea cups, boba pearls, soft colors, and cute drink-inspired decorations create a fun and refreshing photo strip with a youthful look."
        },

        {
            title: "🐝 Sweet Moments",
            image: "sweetmoments.jpg",
            description:
                "Cute bee and honey-inspired details, warm yellow accents, and sweet decorative elements create a cheerful photo strip with a cozy and charming appearance."
        }

    ]

};


/* =========================================
   GABI STREET EATS AFTER DARK
========================================= */

const gabiStreetProject = {

    image: "gabi.jpg",

    title: "Gabi Street Eats After Dark",

    category: "UI/UX Design",

    status: "Ongoing",

    description:
        "A Figma food application concept focused on discovering street food and late-night eats through a simple, modern, and user-friendly interface.",

    tools: "Figma",

    link:
        "https://www.figma.com/design/liI5ev1Z9hZf4Pc2Gv5vBH/Gabi-Food-app?m=auto&t=pUtlbdgaZRpGiXw7-6",

    /* ADDED CONTENT */

    highlights: [
        {
            icon: "🌙",
            title: "Night Food",
            text: "Focused on discovering food options during the evening and nighttime."
        },
        {
            icon: "🍔",
            title: "Food Discovery",
            text: "Designed to help users explore different street food choices."
        },
        {
            icon: "📱",
            title: "Mobile Experience",
            text: "Created as a mobile-focused food application concept."
        },
        {
            icon: "🎨",
            title: "Modern UI",
            text: "Uses organized layouts for a clean and easy browsing experience."
        }
    ],

    features: [
        "Street food discovery",
        "Food browsing",
        "Food categories",
        "Food and restaurant details",
        "Search and browsing concept",
        "Late-night food discovery"
    ],

    designConcept:
        "Gabi Street Eats After Dark is designed around the lively atmosphere of street food at night. The concept combines a modern interface with an easy browsing experience to help users discover food options after dark.",

    role: [
        "UI/UX Design",
        "Interface Layout",
        "Visual Design",
        "Prototype Design"
    ]

};


/* =========================================
   CLEAN PORTFOLIO
========================================= */

projects = projects.filter(project => {

    if (!project.title) {
        return false;
    }

    const title =
        project.title.trim().toLowerCase();


    /* REMOVE TEST PROJECT */

    if (title === "test project") {
        return false;
    }


    /* REMOVE OLD GABI COPIES */

    if (
        title === "gabi" ||
        title === "gabi street eats" ||
        title === "gabi street eats after dark"
    ) {
        return false;
    }


    /* REMOVE OLD PHOTO STRIP COPIES */

    if (
        title === "photo strip" ||
        title === "photo strips"
    ) {
        return false;
    }


    /* REMOVE OLD DINEZY COPIES */

    if (
        title === "dinezy"
    ) {
        return false;
    }


    return true;

});


/* =========================================
   PUT PROJECTS IN LATEST-FIRST ORDER
========================================= */

projects.unshift(gabiStreetProject);

projects.unshift(photoStripProject);

projects.unshift(dinezyProject);


/* =========================================
   SAVE CLEAN DATA
========================================= */

localStorage.setItem(
    "projects",
    JSON.stringify(projects)
);


/* =========================================
   OPEN ADD PROJECT MODAL
========================================= */

function openProjectModal() {

    if (!modal) {
        return;
    }

    modal.style.display = "flex";

    const modalTitle =
        document.getElementById("modalTitle");

    if (modalTitle) {
        modalTitle.textContent = "Add Project";
    }

    editIndex = null;

    clearForm();

}


/* =========================================
   CLOSE PROJECT MODAL
========================================= */

function closeProjectModal() {

    if (!modal) {
        return;
    }

    modal.style.display = "none";

    clearForm();

}


/* =========================================
   CLEAR FORM
========================================= */

function clearForm() {

    const title =
        document.getElementById("projectTitle");

    const category =
        document.getElementById("projectCategory");

    const status =
        document.getElementById("projectStatus");

    const description =
        document.getElementById("projectDescription");

    const tools =
        document.getElementById("projectTools");

    const link =
        document.getElementById("projectLink");


    if (title) {
        title.value = "";
    }

    if (category) {
        category.value = "";
    }

    if (status) {
        status.value = "";
    }

    if (description) {
        description.value = "";
    }

    if (tools) {
        tools.value = "";
    }

    if (link) {
        link.value = "";
    }

    if (imageInput) {
        imageInput.value = "";
    }

    if (imagePreview) {
        imagePreview.src = "";
    }

    imageData = "";

}


/* =========================================
   IMAGE PREVIEW
========================================= */

if (imageInput) {

    imageInput.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];

            if (!file) {
                return;
            }

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


/* =========================================
   SAVE PROJECT
========================================= */

function saveProject() {

    const title =
        document.getElementById(
            "projectTitle"
        )?.value.trim() || "";

    const category =
        document.getElementById(
            "projectCategory"
        )?.value || "";

    const status =
        document.getElementById(
            "projectStatus"
        )?.value || "";

    const description =
        document.getElementById(
            "projectDescription"
        )?.value.trim() || "";

    const tools =
        document.getElementById(
            "projectTools"
        )?.value.trim() || "";

    const link =
        document.getElementById(
            "projectLink"
        )?.value.trim() || "";


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

        projects.unshift(project);

    }

    else {

        if (
            projects[editIndex] &&
            projects[editIndex].photoStrips
        ) {

            project.photoStrips =
                projects[editIndex].photoStrips;

        }

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


/* =========================================
   DISPLAY PROJECTS
========================================= */

function displayProjects() {

    if (!projectContainer) {
        return;
    }

    projectContainer.innerHTML = "";


    if (projects.length === 0) {

        if (noProject) {
            noProject.style.display = "block";
        }

        return;

    }


    if (noProject) {
        noProject.style.display = "none";
    }


    projects.forEach(
        (project, index) => {

            const card =
                document.createElement("div");

            card.className =
                "project-card";

            card.dataset.projectIndex =
                index;

            card.innerHTML = `

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

                <div class="project-content">

                    <div class="project-labels">

                        <span class="category">
                            ${project.category || "Project"}
                        </span>

                        <span class="status">
                            ${project.status || "Ongoing"}
                        </span>

                    </div>

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

                        ${
                            project.link
                            ?
                            `
                            <a
                                href="${project.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="view-btn"
                            >
                                View Project
                            </a>
                            `
                            :
                            ""
                        }

                        <button
                            type="button"
                            class="edit-btn"
                        >
                            Edit
                        </button>

                        <button
                            type="button"
                            class="delete-btn"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            `;

            projectContainer.appendChild(card);

        }
    );

}


/* =========================================
   CARD CLICK
   CLICK ANYWHERE ON CARD
========================================= */

if (projectContainer) {

    projectContainer.addEventListener(
        "click",
        function (event) {

            const editButton =
                event.target.closest(".edit-btn");

            const deleteButton =
                event.target.closest(".delete-btn");

            const viewButton =
                event.target.closest(".view-btn");


            if (editButton) {

                event.preventDefault();

                const card =
                    editButton.closest(".project-card");

                if (!card) {
                    return;
                }

                editProject(
                    Number(card.dataset.projectIndex)
                );

                return;

            }


            if (deleteButton) {

                event.preventDefault();

                const card =
                    deleteButton.closest(".project-card");

                if (!card) {
                    return;
                }

                deleteProject(
                    Number(card.dataset.projectIndex)
                );

                return;

            }


            if (viewButton) {
                return;
            }


            const card =
                event.target.closest(".project-card");

            if (!card) {
                return;
            }


            const index =
                Number(card.dataset.projectIndex);


            if (
                Number.isNaN(index) ||
                !projects[index]
            ) {
                return;
            }


            openProjectPreview(
                projects[index]
            );

        }
    );

}


/* =========================================
   EDIT PROJECT
========================================= */

function editProject(index) {

    if (
        index < 0 ||
        index >= projects.length
    ) {
        return;
    }

    editIndex = index;

    const project =
        projects[index];


    const modalTitle =
        document.getElementById("modalTitle");

    if (modalTitle) {
        modalTitle.textContent =
            "Edit Project";
    }


    const title =
        document.getElementById("projectTitle");

    const category =
        document.getElementById("projectCategory");

    const status =
        document.getElementById("projectStatus");

    const description =
        document.getElementById("projectDescription");

    const tools =
        document.getElementById("projectTools");

    const link =
        document.getElementById("projectLink");


    if (title) {
        title.value =
            project.title || "";
    }

    if (category) {
        category.value =
            project.category || "";
    }

    if (status) {
        status.value =
            project.status || "";
    }

    if (description) {
        description.value =
            project.description || "";
    }

    if (tools) {
        tools.value =
            project.tools || "";
    }

    if (link) {
        link.value =
            project.link || "";
    }


    imageData =
        project.image || "";


    if (imagePreview) {
        imagePreview.src =
            project.image || "";
    }


    if (modal) {
        modal.style.display = "flex";
    }

}


/* =========================================
   DELETE PROJECT
========================================= */

function deleteProject(index) {

    if (
        index < 0 ||
        index >= projects.length
    ) {
        return;
    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this project?"
        );


    if (!confirmDelete) {
        return;
    }


    projects.splice(index, 1);


    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );


    displayProjects();

}


/* =========================================
   EXTRA PROJECT CONTENT
========================================= */

function createExtraProjectContent(project) {

    /*
       Only Dinezy and Gabi get
       the additional sections.

       Photo Strips stays unchanged.
    */

    if (
        !project.highlights &&
        !project.features &&
        !project.designConcept &&
        !project.role
    ) {
        return "";
    }


    let highlightsHTML = "";

    if (
        project.highlights &&
        project.highlights.length > 0
    ) {

        highlightsHTML = `

            <section class="project-extra-section">

                <h2 class="project-extra-title">
                    ✨ Project Highlights
                </h2>

                <div class="project-highlight-grid">

                    ${
                        project.highlights
                            .map(
                                highlight => `

                                    <div
                                        class="project-highlight-card"
                                    >

                                        <div
                                            class="project-highlight-icon"
                                        >
                                            ${highlight.icon}
                                        </div>

                                        <div>

                                            <h3>
                                                ${highlight.title}
                                            </h3>

                                            <p>
                                                ${highlight.text}
                                            </p>

                                        </div>

                                    </div>

                                `
                            )
                            .join("")
                    }

                </div>

            </section>

        `;

    }


    let featuresHTML = "";

    if (
        project.features &&
        project.features.length > 0
    ) {

        featuresHTML = `

            <section class="project-extra-section">

                <h2 class="project-extra-title">
                    ⭐ Key Features
                </h2>

                <div class="project-feature-list">

                    ${
                        project.features
                            .map(
                                feature => `

                                    <div
                                        class="project-feature-item"
                                    >

                                        <span>
                                            ✓
                                        </span>

                                        <p>
                                            ${feature}
                                        </p>

                                    </div>

                                `
                            )
                            .join("")
                    }

                </div>

            </section>

        `;

    }


    let conceptHTML = "";

    if (project.designConcept) {

        conceptHTML = `

            <section class="project-extra-section">

                <h2 class="project-extra-title">
                    🎨 Design Concept
                </h2>

                <div class="project-concept-box">

                    <p>
                        ${project.designConcept}
                    </p>

                </div>

            </section>

        `;

    }


    let roleHTML = "";

    if (
        project.role &&
        project.role.length > 0
    ) {

        roleHTML = `

            <section class="project-extra-section">

                <h2 class="project-extra-title">
                    👨‍💻 My Role
                </h2>

                <div class="project-role-list">

                    ${
                        project.role
                            .map(
                                role => `

                                    <span>
                                        ${role}
                                    </span>

                                `
                            )
                            .join("")
                    }

                </div>

            </section>

        `;

    }


    return `

        <div class="project-extra-content">

            ${highlightsHTML}

            ${featuresHTML}

            ${conceptHTML}

            ${roleHTML}

        </div>

    `;

}


/* =========================================
   PROJECT PREVIEW
========================================= */

function openProjectPreview(project) {

    const oldPreview =
        document.getElementById(
            "projectPreviewOverlay"
        );


    if (oldPreview) {
        oldPreview.remove();
    }


    const overlay =
        document.createElement("div");


    overlay.id =
        "projectPreviewOverlay";

    overlay.className =
        "project-preview-overlay";


    const photoStripCount =
        project.photoStrips
            ? project.photoStrips.length
            : 0;


    let photoStripHTML = "";


    /* =====================================
       PHOTO STRIPS
    ===================================== */

    if (
        project.photoStrips &&
        project.photoStrips.length > 0
    ) {

        photoStripHTML = `

            <div class="photo-strip-section">

                <h2>
                    Photo Strip Designs
                </h2>

                <p class="photo-strip-intro">

                    Explore all ${photoStripCount}
                    photo strip designs below.
                    Click the card to see the design
                    and its description.

                </p>

                <div class="photo-strip-grid">

                    ${
                        project.photoStrips
                            .map(
                                (strip, stripIndex) => `

                                    <div
                                        class="photo-strip-item"
                                    >

                                        <div
                                            class="photo-strip-number"
                                        >
                                            ${stripIndex + 1}
                                        </div>

                                        <img
                                            src="${strip.image}"
                                            alt="${strip.title}"
                                            class="photo-strip-image"
                                        >

                                        <h3>
                                            ${strip.title}
                                        </h3>

                                        <p>
                                            ${strip.description}
                                        </p>

                                    </div>

                                `
                            )
                            .join("")
                    }

                </div>

            </div>

        `;

    }


    /* =====================================
       EXTRA CONTENT
    ===================================== */

    const extraProjectHTML =
        createExtraProjectContent(project);


    /* =====================================
       PREVIEW
    ===================================== */

    overlay.innerHTML = `

        <div class="project-preview-box">

            <button
                type="button"
                class="project-preview-close"
                aria-label="Close"
            >
                ×
            </button>


            <img
                class="project-preview-cover"
                src="${project.image}"
                alt="${project.title}"
                style="
                    width:100%;
                    height:auto;
                    max-height:500px;
                    object-fit:contain;
                    object-position:center;
                    display:block;
                    background:#f4f6f8;
                "
            >


            <div class="project-preview-content">

                <div class="project-preview-labels">

                    <span class="category">
                        ${project.category || "Project"}
                    </span>

                    <span class="status">
                        ${project.status || "Ongoing"}
                    </span>

                </div>


                <h1>
                    ${project.title}
                </h1>


                <p class="project-preview-description">
                    ${project.description}
                </p>


                <div class="project-preview-tools">

                    🛠

                    <strong>
                        Tools Used:
                    </strong>

                    ${project.tools || "N/A"}

                </div>


                ${extraProjectHTML}


                ${photoStripHTML}


                <div class="project-preview-actions">

                    ${
                        project.link
                        ?
                        `
                        <a
                            href="${project.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="view-btn"
                        >
                            View Project
                        </a>
                        `
                        :
                        ""
                    }


                    <button
                        type="button"
                        class="close-preview-btn"
                    >
                        Close
                    </button>

                </div>


            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    /* =====================================
       CLOSE BUTTON
    ===================================== */

    const closeButton =
        overlay.querySelector(
            ".project-preview-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProjectPreview
        );

    }


    const bottomClose =
        overlay.querySelector(
            ".close-preview-btn"
        );


    if (bottomClose) {

        bottomClose.addEventListener(
            "click",
            closeProjectPreview
        );

    }


    /* =====================================
       CLICK OUTSIDE
    ===================================== */

    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === overlay
            ) {

                closeProjectPreview();

            }

        }
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE PREVIEW
========================================= */

function closeProjectPreview() {

    const overlay =
        document.getElementById(
            "projectPreviewOverlay"
        );


    if (overlay) {
        overlay.remove();
    }


    document.body.style.overflow = "";

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProjectPreview();

        }

    }
);


/* =========================================
   CLOSE ADD/EDIT MODAL OUTSIDE CLICK
========================================= */

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


/* =========================================
   INITIAL DISPLAY
========================================= */

displayProjects();
