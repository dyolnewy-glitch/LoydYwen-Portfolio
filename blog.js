/* =====================================
   BLOG SYSTEM
===================================== */


/* =====================================
   BLOG DATA
===================================== */

let blogs =
    JSON.parse(localStorage.getItem("blogs")) || [];


let selectedImage = "";

let editIndex = -1;


/* =====================================
   DEFAULT GRADUATION DAY BLOG
===================================== */

const graduationBlog = {

    title: "Graduation Day",

    category: "School Experience",

    content: `
June 24, 2026 was one of the most memorable and meaningful days of my life because it was the day I officially graduated with a Bachelor of Science in Information Technology (BSIT) from Urdaneta City University (UCU).

After years of studying, completing projects, attending classes, preparing requirements, taking examinations, and facing different challenges, I finally reached one of the biggest milestones in my life.

The graduation ceremony was a very special moment for me. Wearing my graduation attire and receiving my diploma made me realize how far I had come. All the hard work, sleepless nights, deadlines, projects, presentations, and challenges throughout college were finally worth it.

I am very thankful to my family, friends, classmates, instructors, and everyone who supported me throughout my college journey. Their encouragement helped me continue even during difficult times.

Graduation also made me remember all the experiences I had during my years at Urdaneta City University. I learned not only about Information Technology but also about responsibility, patience, teamwork, problem-solving, communication, and perseverance.

During my college journey, I developed different skills related to technology and creativity. I learned about web development, UI/UX design, graphic design, programming, and different digital technologies. These experiences helped me understand what kind of career I want to pursue in the future.

After the graduation ceremony, we went to the cemetery to visit my father. It was an emotional but meaningful part of the day because I wanted to share this important achievement with him. Even though he was not physically there to witness my graduation, visiting his grave made me feel that he was still part of this special moment in my life.

After visiting the cemetery, we went to eat together as a family. We talked, enjoyed our food, and celebrated my graduation. It was a simple celebration, but it made the day even more meaningful and memorable.

After eating, we went home and finally ended the day. It was a simple ending to a very special and unforgettable day.

Graduation was not the end of my journey. It was the beginning of a new chapter in my life. As a BSIT graduate, I want to continue improving my skills in Graphic Design, Web Development, UI/UX Design, and Digital Creativity.

I want to continue creating visual designs, editing photos and videos, developing websites, exploring new technologies, and creating digital projects that combine technology and creativity.

I also hope to use the knowledge and experiences I gained during college to build a successful career and become a skilled professional in the future.

Looking back, my college journey was not always easy, but every challenge taught me something valuable. Every project, deadline, examination, presentation, and difficult moment became part of the experience that helped me grow.

June 24, 2026 will always be a special date for me — the day I officially became a Bachelor of Science in Information Technology graduate.

This graduation is not the end of my story. It is the beginning of a new chapter, new opportunities, new challenges, and new dreams.
`,

    image: "profilepic.jpg",

    blogDate: "2026-06-24",

    publishedDate: "June 24, 2026",

    updatedDate: "",

    featured: true

};


/* =====================================
   DEFAULT OJT BLOG
===================================== */

const ojtBlog = {

    title: "OJT Experience",

    category: "OJT Experience",

    content: `
My On-the-Job Training at the LGU Urdaneta City – City Library Department was one of the memorable experiences of my college journey.

During my OJT, I was assigned to different tasks that allowed me to experience an actual workplace environment. One of my main responsibilities was encoding information from the library's Vertical Files and Clippings Section.

I encoded article titles, dates, authors, page numbers, and newspaper sources. I organized these records using Google Sheets so that the information could be properly documented and managed.

Although encoding may seem simple, working with a large amount of information required patience, focus, and accuracy. I learned to carefully check every detail because even a small mistake could affect the records.

I also assisted with different activities of the R.E.A.D. Library Summer Program 2026. I helped participants during orientation, Book Booth activities, storytelling, online sessions, Canva activities, and other educational activities.

One of the activities I experienced was using a Wacom Drawing Tablet. I also assisted during Math Market Madness and a lecture about Solid Waste Management. The Bureau of Fire Protection also participated in one of the activities and provided important information about fire safety.

Through my OJT, I learned that working in a professional environment requires more than technical skills. I also needed to practice communication, teamwork, patience, responsibility, time management, and professionalism.

There were times when the work became tiring, especially when there were many records to encode or activities to assist with. However, completing every task gave me a sense of accomplishment.

My OJT helped me become more organized when handling information and taught me the importance of accuracy and responsibility.

My final day of OJT was May 28, 2026. Completing my training was a meaningful moment because it marked the end of one important part of my college journey.

Looking back, my OJT was more than just a requirement for graduation. It gave me valuable experience, memories, confidence, and lessons that I can bring with me into my future career.

I am grateful for the people who guided and supported me during my OJT at the LGU Urdaneta City – City Library Department.

The experience ended on May 28, 2026, but the lessons I learned will remain an important part of my journey as an IT graduate.
`,

    image: "ojt.jpg",

    blogDate: "2026-05-28",

    publishedDate: "May 28, 2026",

    updatedDate: "",

    featured: true

};


/* =====================================
   ADD DEFAULT BLOGS
===================================== */

if (
    !blogs.some(
        blog => blog.title === "Graduation Day"
    )
) {

    blogs.unshift(
        graduationBlog
    );

}


if (
    !blogs.some(
        blog => blog.title === "OJT Experience"
    )
) {

    blogs.push(
        ojtBlog
    );

}


/* =====================================
   FIX SAVED BLOG DATA
===================================== */

blogs = blogs.map(blog => {

    return {

        ...blog,

        category:
            blog.category ||
            "Other",

        image:
            blog.image ||
            "profilepic.jpg",

        publishedDate:
            blog.publishedDate ||
            new Date().toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            ),

        updatedDate:
            blog.updatedDate ||
            "",

        featured:
            blog.featured === true

    };

});


/* SAVE */

localStorage.setItem(
    "blogs",
    JSON.stringify(blogs)
);


/* =====================================
   PAGE LOAD
===================================== */

window.addEventListener(
    "load",
    function () {

        displayBlogs();

    }
);


/* =====================================
   OPEN ADD BLOG MODAL
===================================== */

function openModal() {

    const modal =
        document.getElementById(
            "blogModal"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    if (!modal) {

        return;

    }

    modal.style.display =
        "block";

    if (modalTitle) {

        modalTitle.innerHTML =
            "Add New Blog";

    }

    editIndex = -1;

    clearForm();

}


/* =====================================
   CLOSE ADD / EDIT MODAL
===================================== */

function closeModal() {

    const modal =
        document.getElementById(
            "blogModal"
        );

    if (modal) {

        modal.style.display =
            "none";

    }

    clearForm();

}


/* =====================================
   IMAGE UPLOAD
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const imageInput =
            document.getElementById(
                "image"
            );

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

                            selectedImage =
                                event.target.result;

                            const preview =
                                document.getElementById(
                                    "imagePreview"
                                );

                            const previewContainer =
                                document.getElementById(
                                    "imagePreviewContainer"
                                );

                            if (preview) {

                                preview.src =
                                    selectedImage;

                            }

                            if (previewContainer) {

                                previewContainer.style.display =
                                    "block";

                            }

                        };

                    reader.readAsDataURL(file);

                }
            );

        }

    }
);


/* =====================================
   SAVE BLOG
===================================== */

function saveBlog() {

    const title =
        document.getElementById(
            "title"
        ).value.trim();

    const category =
        document.getElementById(
            "category"
        ).value;

    const content =
        document.getElementById(
            "content"
        ).value.trim();

    const blogDate =
        document.getElementById(
            "blogDate"
        ).value;

    const featured =
        document.getElementById(
            "featured"
        ).checked;


    if (
        title === "" ||
        category === "" ||
        content === "" ||
        blogDate === ""
    ) {

        alert(
            "Please complete all fields."
        );

        return;

    }


    const today =
        new Date().toLocaleDateString(
            "en-US",
            {
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );


    /* FEATURED LIMIT */

    if (featured) {

        const featuredCount =
            blogs.filter(
                blog =>
                    blog.featured === true
            ).length;


        if (
            editIndex === -1 &&
            featuredCount >= 4
        ) {

            alert(
                "Maximum of 4 Featured Blogs only."
            );

            return;

        }


        if (
            editIndex !== -1 &&
            !blogs[editIndex].featured &&
            featuredCount >= 4
        ) {

            alert(
                "Maximum of 4 Featured Blogs only."
            );

            return;

        }

    }


    /* BLOG OBJECT */

    const blog = {

        title:
            title,

        category:
            category,

        content:
            content,

        image:
            selectedImage ||
            "profilepic.jpg",

        blogDate:
            blogDate,

        publishedDate:
            today,

        updatedDate:
            "",

        featured:
            featured

    };


    /* EDIT */

    if (editIndex !== -1) {

        blog.publishedDate =
            blogs[editIndex]
                .publishedDate;

        blog.updatedDate =
            today;

        blogs[editIndex] =
            blog;

    }


    /* ADD */

    else {

        blogs.push(
            blog
        );

    }


    /* SAVE TO LOCALSTORAGE */

    localStorage.setItem(
        "blogs",
        JSON.stringify(blogs)
    );


    closeModal();

    displayBlogs();

}


/* =====================================
   DISPLAY ALL BLOGS
===================================== */

function displayBlogs() {

    const container =
        document.getElementById(
            "blogContainer"
        );

    const featuredContainer =
        document.getElementById(
            "featuredContainer"
        );

    const noBlog =
        document.getElementById(
            "noBlog"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        "";


    if (featuredContainer) {

        featuredContainer.innerHTML =
            "";

    }


    if (blogs.length === 0) {

        if (noBlog) {

            noBlog.style.display =
                "block";

        }

        return;

    }


    if (noBlog) {

        noBlog.style.display =
            "none";

    }


    /* =================================
       FEATURED
    ================================= */

    const featuredBlogs =
        blogs.filter(
            blog =>
                blog.featured === true
        );


    if (featuredContainer) {

        featuredBlogs
            .slice(0, 4)
            .forEach(
                blog => {

                    const index =
                        blogs.indexOf(
                            blog
                        );


                    featuredContainer.innerHTML += `

                        <div
                            class="featured-card"
                            onclick="openBlog(${index})"
                        >

                            <img
                                src="${blog.image}"
                                alt="${blog.title}"
                            >

                            <span
                                class="featured-badge"
                            >
                                Featured
                            </span>

                            <div
                                class="blog-info"
                            >

                                <h2>
                                    ${blog.title}
                                </h2>

                                <p>
                                    ${blog.category}
                                </p>

                                <p>
                                    ${blog.publishedDate}
                                </p>

                            </div>

                        </div>

                    `;

                }
            );

    }


    /* =================================
       ALL BLOGS
    ================================= */

    blogs.forEach(
        (blog, index) => {

            container.innerHTML += `

                <div
                    class="blog-card"
                    data-category="${blog.category}"
                >

                    <img
                        class="blog-card-image"
                        src="${blog.image}"
                        alt="${blog.title}"
                        onclick="openBlog(${index})"
                    >

                    <div
                        class="blog-info"
                    >

                        <span
                            class="blog-category"
                        >
                            ${blog.category}
                        </span>

                        <h2
                            onclick="openBlog(${index})"
                        >
                            ${blog.title}
                        </h2>

                        <p>
                            Blog Date:
                            ${blog.blogDate}
                        </p>

                        <p>
                            Published:
                            ${blog.publishedDate}
                        </p>

                        ${
                            blog.updatedDate
                            ?
                            `
                                <p>
                                    Updated:
                                    ${blog.updatedDate}
                                </p>
                            `
                            :
                            ""
                        }

                    </div>

                    <div
                        class="actions"
                    >

                        <button
                            class="edit"
                            onclick="
                                event.stopPropagation();
                                editBlog(${index});
                            "
                        >
                            Edit
                        </button>

                        <button
                            class="delete"
                            onclick="
                                event.stopPropagation();
                                deleteBlog(${index});
                            "
                        >
                            Delete
                        </button>

                    </div>

                </div>

            `;

        }
    );

}


/* =====================================
   EDIT BLOG
===================================== */

function editBlog(index) {

    const blog =
        blogs[index];

    if (!blog) {

        return;

    }

    editIndex =
        index;


    document.getElementById(
        "modalTitle"
    ).innerHTML =
        "Edit Blog";


    document.getElementById(
        "title"
    ).value =
        blog.title;


    document.getElementById(
        "category"
    ).value =
        blog.category;


    document.getElementById(
        "content"
    ).value =
        blog.content;


    document.getElementById(
        "blogDate"
    ).value =
        blog.blogDate;


    document.getElementById(
        "featured"
    ).checked =
        blog.featured;


    selectedImage =
        blog.image;


    const preview =
        document.getElementById(
            "imagePreview"
        );


    const previewContainer =
        document.getElementById(
            "imagePreviewContainer"
        );


    if (
        blog.image &&
        preview &&
        previewContainer
    ) {

        preview.src =
            blog.image;

        previewContainer.style.display =
            "block";

    }


    document.getElementById(
        "blogModal"
    ).style.display =
        "block";

}


/* =====================================
   DELETE BLOG
===================================== */

function deleteBlog(index) {

    if (
        confirm(
            "Delete this blog?"
        )
    ) {

        blogs.splice(
            index,
            1
        );

        localStorage.setItem(
            "blogs",
            JSON.stringify(blogs)
        );

        displayBlogs();

    }

}


/* =====================================
   SEARCH BLOG
===================================== */

function searchBlog() {

    const searchInput =
        document.getElementById(
            "search"
        );

    const categoryInput =
        document.getElementById(
            "filterCategory"
        );


    if (!searchInput) {

        return;

    }


    const search =
        searchInput.value
            .toLowerCase();


    const category =
        categoryInput
        ? categoryInput.value
        : "All";


    const cards =
        document.querySelectorAll(
            ".blog-card"
        );


    cards.forEach(
        card => {

            const titleElement =
                card.querySelector(
                    "h2"
                );


            const title =
                titleElement
                ? titleElement.innerText
                    .toLowerCase()
                : "";


            const cardCategory =
                card.getAttribute(
                    "data-category"
                );


            const searchMatch =
                title.includes(
                    search
                );


            const categoryMatch =
                category === "All" ||
                cardCategory === category;


            if (
                searchMatch &&
                categoryMatch
            ) {

                card.style.display =
                    "block";

            }

            else {

                card.style.display =
                    "none";

            }

        }
    );

}


/* =====================================
   FILTER CATEGORY
===================================== */

function filterCategory() {

    searchBlog();

}


/* =====================================
   OPEN BLOG PREVIEW
===================================== */

function openBlog(index) {

    const blog =
        blogs[index];


    const overlay =
        document.getElementById(
            "blogOverlay"
        );


    const preview =
        document.getElementById(
            "blogPreview"
        );


    if (
        !blog ||
        !overlay ||
        !preview
    ) {

        return;

    }


    /* SAME BLOG OPEN = CLOSE */

    if (
        preview.style.display ===
        "block"
    ) {

        closePreview();

        return;

    }


    overlay.style.display =
        "block";


    preview.style.display =
        "block";


    /* =================================
       IMPORTANT:
       PARAGRAPH SEPARATOR
       
       ONLY A BLANK LINE CREATES
       A NEW PARAGRAPH.
       
       A SINGLE ENTER DOES NOT.
    ================================= */

    const paragraphs =
        blog.content
            .trim()
            .split(/\r?\n\s*\r?\n+/)
            .filter(
                paragraph =>
                    paragraph.trim() !== ""
            )
            .map(
                paragraph => {

                    return `
                        <p>
                            ${paragraph
                                .trim()
                                .replace(
                                    /\r?\n/g,
                                    " "
                                )}
                        </p>
                    `;

                }
            )
            .join("");


    /* =================================
       PREVIEW
    ================================= */

    preview.innerHTML = `

        <div
            class="preview-content"
        >

            <img
                src="${blog.image}"
                alt="${blog.title}"
            >


            <span
                class="blog-category"
            >
                ${blog.category}
            </span>


            <h2>
                ${blog.title}
            </h2>


            <p
                class="preview-date"
            >
                Blog Date:
                ${blog.blogDate}
            </p>


            <div
                class="preview-description"
            >

                ${paragraphs}

            </div>

        </div>

    `;


    document.body.style.overflow =
        "hidden";


    preview.dataset.ready =
        "false";


    setTimeout(
        function () {

            preview.dataset.ready =
                "true";

        },
        150
    );

}


/* =====================================
   CLOSE BLOG PREVIEW
===================================== */

function closePreview() {

    const overlay =
        document.getElementById(
            "blogOverlay"
        );


    const preview =
        document.getElementById(
            "blogPreview"
        );


    if (overlay) {

        overlay.style.display =
            "none";

    }


    if (preview) {

        preview.style.display =
            "none";

        preview.dataset.ready =
            "false";

    }


    document.body.style.overflow =
        "";

}


/* =====================================
   CLICK SCREEN TO CLOSE
===================================== */

document.addEventListener(
    "click",
    function (event) {

        const preview =
            document.getElementById(
                "blogPreview"
            );


        if (
            !preview ||
            preview.style.display !==
            "block"
        ) {

            return;

        }


        if (
            preview.dataset.ready !==
            "true"
        ) {

            return;

        }


        /*
           Clicking outside the
           opened blog closes it.
        */

        if (
            !preview.contains(
                event.target
            )
        ) {

            closePreview();

        }

    }
);


/* =====================================
   CLEAR FORM
===================================== */

function clearForm() {

    const title =
        document.getElementById(
            "title"
        );


    const category =
        document.getElementById(
            "category"
        );


    const content =
        document.getElementById(
            "content"
        );


    const blogDate =
        document.getElementById(
            "blogDate"
        );


    const featured =
        document.getElementById(
            "featured"
        );


    if (title) {

        title.value =
            "";

    }


    if (category) {

        category.value =
            "";

    }


    if (content) {

        content.value =
            "";

    }


    if (blogDate) {

        blogDate.value =
            "";

    }


    if (featured) {

        featured.checked =
            false;

    }


    selectedImage =
        "";


    const preview =
        document.getElementById(
            "imagePreview"
        );


    const previewContainer =
        document.getElementById(
            "imagePreviewContainer"
        );


    const image =
        document.getElementById(
            "image"
        );


    if (preview) {

        preview.src =
            "";

    }


    if (previewContainer) {

        previewContainer.style.display =
            "none";

    }


    if (image) {

        image.value =
            "";

    }


    editIndex =
        -1;

}


/* =====================================
   CLOSE MODAL / OVERLAY
===================================== */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "blogModal"
            );


        const overlay =
            document.getElementById(
                "blogOverlay"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeModal();

            return;

        }


        if (
            overlay &&
            event.target === overlay
        ) {

            closePreview();

        }

    }
);


/* =====================================
   ESCAPE KEY
===================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closePreview();

            closeModal();

        }

    }
);
