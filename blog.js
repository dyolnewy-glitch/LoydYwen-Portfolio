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
My On-the-Job Training (OJT) at the LGU Urdaneta City – City Library Department was one of the most memorable and meaningful experiences I had during my college journey.

During my OJT, I was assigned to different tasks that allowed me to experience an actual workplace environment. It gave me the opportunity to apply some of the knowledge and skills that I learned during my years as an Information Technology student.

One of my main responsibilities was encoding information from the library's Vertical File and Clippings Section.

I encoded different pieces of information such as article titles, dates, authors, page numbers, and newspaper sources. Some of the newspaper sources included Manila Bulletin and other newspapers.

I organized these records using Google Sheets so that the information could be properly documented and managed.

Although data encoding may seem like a simple task, working with a large amount of information required patience, focus, consistency, and accuracy. I learned to carefully check every detail because even a small mistake could affect the accuracy and organization of the records.

The task also helped me understand the importance of proper information management. Since libraries handle a large amount of information, every record needs to be organized properly so that it can be easily accessed and maintained.

Aside from encoding, I also assisted with different activities of the R.E.A.D. Library Summer Program 2026.

The R.E.A.D. Library Summer Program 2026 was one of the activities where I had the opportunity to assist participants and help during different educational and creative activities.

During the program, I assisted participants during the orientation and different activities conducted throughout the program.

One of the activities was the Book Booth, where participants were able to interact with books and different reading-related activities.

I also assisted during online sessions and storytelling activities. These activities allowed me to interact with participants and observe how educational programs are organized and conducted.

Another activity involved Canva. I assisted participants during the Canva activity and helped them understand the basic process of creating digital designs.

This was also meaningful to me because I have an interest in graphic design and digital creativity. It allowed me to use some of the skills that I already had while also helping other participants complete their activities.

I also experienced an activity involving a Wacom Drawing Tablet. The activity introduced participants to digital drawing and allowed them to experience creating artwork using a drawing tablet.

There were also other educational activities such as Math Market Madness. This activity allowed participants to learn while participating in an interactive and enjoyable activity.

Another activity included a lecture about Solid Waste Management. The lecture helped participants understand the importance of proper waste disposal, environmental responsibility, and keeping the community clean.

The Bureau of Fire Protection also participated in one of the activities. They provided important information about fire safety and taught participants about what they should do during emergencies involving fire.

Assisting in these activities gave me a different experience compared to the technical tasks I normally encountered as an IT student.

My OJT was not only about completing assigned tasks. It was also about learning how to work with other people and how to behave in a professional workplace.

Through my OJT, I learned that working in a professional environment requires more than technical skills. I also needed to practice communication, teamwork, patience, responsibility, time management, and professionalism.

There were times when the work became tiring, especially when there were many records to encode or several activities that needed assistance. However, completing every task gave me a sense of accomplishment.

I learned how important it is to stay focused even when doing repetitive tasks. Encoding records required attention to detail, while assisting participants required patience and good communication.

My OJT also helped me become more organized when handling information. I became more careful when recording details and learned to double-check my work before considering a task completed.

Another important lesson I learned was responsibility. When someone gives you a task in a workplace, you need to make sure that you complete it properly and within the expected time.

I also learned that asking questions when I do not understand something is important. Instead of guessing, it is better to ask for clarification so that the task can be completed correctly.

My OJT gave me an opportunity to experience what it feels like to be part of an actual organization.

It also helped me improve my confidence when communicating with other people. At first, I was not always comfortable interacting with people in a professional environment, but as the days passed, I became more comfortable and confident.

The experience also taught me the value of teamwork. Some tasks were easier to accomplish when everyone worked together and helped one another.

My final day of OJT was May 28, 2026. Completing my training was a meaningful moment because it marked the end of one important part of my college journey.

Looking back, my OJT was more than just a requirement for graduation. It gave me valuable workplace experience, memories, confidence, and lessons that I can bring with me into my future career.

I am grateful to the people who guided and supported me during my OJT at the LGU Urdaneta City – City Library Department.

I am also thankful for the opportunity to participate in the different library activities and to experience different responsibilities during my training.

My OJT helped me understand that learning does not only happen inside the classroom. Some of the most valuable lessons can also be learned by experiencing actual situations, working with other people, making mistakes, solving problems, and taking responsibility for assigned tasks.

The experience ended on May 28, 2026, but the lessons I learned will remain an important part of my journey as an IT graduate.

My OJT became one of the experiences that prepared me for the next chapter of my life after college. It gave me a better understanding of workplace responsibilities and helped me become more prepared for my future career.
`,

    image: "ojt.jpg",

    blogDate: "2026-05-28",

    publishedDate: "May 28, 2026",

    updatedDate: "",

    featured: true

};


/* =====================================
   ADD GRADUATION BLOG
   ONLY IF IT DOES NOT EXIST
===================================== */

let graduationExists =
    blogs.some(
        blog =>
            blog.title === "Graduation Day"
    );


if(!graduationExists){

    blogs.unshift(
        graduationBlog
    );

}


/* =====================================
   ADD OJT BLOG
   ONLY IF IT DOES NOT EXIST
===================================== */

let ojtExists =
    blogs.some(
        blog =>
            blog.title === "OJT Experience"
    );


if(!ojtExists){

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


/* =====================================
   SAVE UPDATED BLOGS
===================================== */

localStorage.setItem(
    "blogs",
    JSON.stringify(blogs)
);


/* =====================================
   PAGE LOAD
===================================== */

window.addEventListener(
    "load",
    function(){

        displayBlogs();

    }
);


/* =====================================
   OPEN ADD BLOG MODAL
===================================== */

function openModal(){

    const modal =
        document.getElementById(
            "blogModal"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    if(!modal){

        return;

    }


    modal.style.display =
        "block";


    if(modalTitle){

        modalTitle.innerHTML =
            "Add New Blog";

    }


    editIndex = -1;

    clearForm();

}


/* =====================================
   CLOSE ADD / EDIT MODAL
===================================== */

function closeModal(){

    const modal =
        document.getElementById(
            "blogModal"
        );


    if(modal){

        modal.style.display =
            "none";

    }


    clearForm();

}


/* =====================================
   IMAGE UPLOAD
===================================== */

const imageInput =
    document.getElementById(
        "image"
    );


if(imageInput){

    imageInput.addEventListener(
        "change",
        function(){

            const file =
                this.files[0];


            if(!file){

                return;

            }


            const reader =
                new FileReader();


            reader.onload =
                function(event){

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


                    if(preview){

                        preview.src =
                            selectedImage;

                    }


                    if(previewContainer){

                        previewContainer.style.display =
                            "block";

                    }

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =====================================
   SAVE BLOG
===================================== */

function saveBlog(){

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


    if(
        title === "" ||
        category === "" ||
        content === "" ||
        blogDate === ""
    ){

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


    /* =================================
       FEATURED LIMIT
    ================================= */

    if(featured){

        const featuredCount =
            blogs.filter(
                blog =>
                    blog.featured === true
            ).length;


        if(
            editIndex === -1 &&
            featuredCount >= 4
        ){

            alert(
                "Maximum of 4 Featured Blogs only."
            );

            return;

        }


        if(
            editIndex !== -1 &&
            !blogs[editIndex].featured &&
            featuredCount >= 4
        ){

            alert(
                "Maximum of 4 Featured Blogs only."
            );

            return;

        }

    }


    /* =================================
       BLOG OBJECT
    ================================= */

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


    /* =================================
       EDIT EXISTING BLOG
    ================================= */

    if(editIndex !== -1){

        blog.publishedDate =
            blogs[editIndex]
            .publishedDate;


        blog.updatedDate =
            today;


        blogs[editIndex] =
            blog;

    }


    /* =================================
       ADD NEW BLOG
    ================================= */

    else{

        blogs.push(
            blog
        );

    }


    /* SAVE */

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

function displayBlogs(){

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


    if(!container){

        return;

    }


    container.innerHTML =
        "";


    if(featuredContainer){

        featuredContainer.innerHTML =
            "";

    }


    /* =================================
       NO BLOG
    ================================= */

    if(blogs.length === 0){

        if(noBlog){

            noBlog.style.display =
                "block";

        }

        return;

    }


    if(noBlog){

        noBlog.style.display =
            "none";

    }


    /* =================================
       FEATURED BLOGS
    ================================= */

    const featuredBlogs =
        blogs.filter(
            blog =>
                blog.featured === true
        );


    if(featuredContainer){

        featuredBlogs
        .slice(0,4)
        .forEach(
            blog => {

                const index =
                    blogs.indexOf(
                        blog
                    );


                featuredContainer.innerHTML += `

                    <div
                    class="featured-card"
                    onclick="openBlog(${index})">


                        <img
                        src="${blog.image}"
                        alt="${blog.title}">


                        <span
                        class="featured-badge">

                            Featured

                        </span>


                        <div
                        class="blog-info">


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
        (blog,index) => {

            container.innerHTML += `

                <div
                class="blog-card"
                data-category="${blog.category}">


                    <img
                    class="blog-card-image"
                    src="${blog.image}"
                    alt="${blog.title}"
                    onclick="openBlog(${index})">


                    <div
                    class="blog-info">


                        <span
                        class="blog-category">

                            ${blog.category}

                        </span>


                        <h2
                        onclick="openBlog(${index})">

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
                    class="actions">


                        <button
                        class="edit"
                        onclick="
                        event.stopPropagation();
                        editBlog(${index});
                        ">

                            Edit

                        </button>


                        <button
                        class="delete"
                        onclick="
                        event.stopPropagation();
                        deleteBlog(${index});
                        ">

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

function editBlog(index){

    const blog =
        blogs[index];


    if(!blog){

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


    if(
        blog.image &&
        preview &&
        previewContainer
    ){

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

function deleteBlog(index){

    if(
        confirm(
            "Delete this blog?"
        )
    ){

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

function searchBlog(){

    const searchInput =
        document.getElementById(
            "search"
        );


    const categoryInput =
        document.getElementById(
            "filterCategory"
        );


    if(!searchInput){

        return;

    }


    const search =
        searchInput
        .value
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


            if(
                searchMatch &&
                categoryMatch
            ){

                card.style.display =
                    "block";

            }

            else{

                card.style.display =
                    "none";

            }

        }
    );

}


/* =====================================
   FILTER CATEGORY
===================================== */

function filterCategory(){

    searchBlog();

}


/* =====================================
   OPEN BLOG PREVIEW
===================================== */

function openBlog(index){

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


    if(
        !blog ||
        !overlay ||
        !preview
    ){

        return;

    }


    /* =================================
       IF SAME PREVIEW IS ALREADY OPEN
    ================================= */

    if(
        preview.style.display ===
        "block"
    ){

        closePreview();

        return;

    }


    /* SHOW */

    overlay.style.display =
        "block";


    preview.style.display =
        "block";


    /* =================================
       CREATE PARAGRAPHS
    ================================= */

    const paragraphs =
        blog.content
        .split(/\n+/)
        .filter(
            paragraph =>
                paragraph.trim() !== ""
        )
        .map(
            paragraph => {

                return `

                    <p>

                        ${paragraph.trim()}

                    </p>

                `;

            }
        )
        .join("");


    /* =================================
       PREVIEW CONTENT
    ================================= */

    preview.innerHTML = `

        <div
        class="preview-content">


            <img
            src="${blog.image}"
            alt="${blog.title}">


            <span
            class="blog-category">

                ${blog.category}

            </span>


            <h2>

                ${blog.title}

            </h2>


            <p
            class="preview-date">

                Blog Date:
                ${blog.blogDate}

            </p>


            <div
            class="preview-description">

                ${paragraphs}

            </div>


        </div>

    `;


    /* =================================
       PREVENT PAGE SCROLL
    ================================= */

    document.body.style.overflow =
        "hidden";


    /*
       Small delay prevents the SAME
       click that opened the blog from
       closing it immediately.
    */

    preview.dataset.ready =
        "false";


    setTimeout(
        function(){

            preview.dataset.ready =
                "true";

        },
        150
    );

}


/* =====================================
   CLOSE BLOG PREVIEW
===================================== */

function closePreview(){

    const overlay =
        document.getElementById(
            "blogOverlay"
        );


    const preview =
        document.getElementById(
            "blogPreview"
        );


    if(overlay){

        overlay.style.display =
            "none";

    }


    if(preview){

        preview.style.display =
            "none";

        preview.dataset.ready =
            "false";

    }


    document.body.style.overflow =
        "";

}


/* =====================================
   CLICK SCREEN TO CLOSE BLOG
===================================== */

document.addEventListener(
    "click",
    function(event){

        const preview =
            document.getElementById(
                "blogPreview"
            );


        if(
            !preview ||
            preview.style.display !==
            "block"
        ){

            return;

        }


        if(
            preview.dataset.ready !==
            "true"
        ){

            return;

        }


        /*
           Any click after the blog has
           opened will close it.
        */

        closePreview();

    }
);


/* =====================================
   CLEAR FORM
===================================== */

function clearForm(){

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


    if(title){

        title.value =
            "";

    }


    if(category){

        category.value =
            "";

    }


    if(content){

        content.value =
            "";

    }


    if(blogDate){

        blogDate.value =
            "";

    }


    if(featured){

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


    if(preview){

        preview.src =
            "";

    }


    if(previewContainer){

        previewContainer.style.display =
            "none";

    }


    if(image){

        image.value =
            "";

    }


    editIndex =
        -1;

}


/* =====================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

window.addEventListener(
    "click",
    function(event){

        const modal =
            document.getElementById(
                "blogModal"
            );


        const overlay =
            document.getElementById(
                "blogOverlay"
            );


        /* MODAL */

        if(
            modal &&
            event.target === modal
        ){

            closeModal();

            return;

        }


        /* OVERLAY */

        if(
            overlay &&
            event.target === overlay
        ){

            closePreview();

        }

    }
);


/* =====================================
   ESCAPE KEY
===================================== */

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key ===
            "Escape"
        ){

            closePreview();

            closeModal();

        }

    }
);
