/* =========================================================
   BLOG.JS
========================================================= */


/* =========================================================
   BLOG DATA
========================================================= */

let blogs = [];

let editingIndex = -1;


/* =========================================================
   DEFAULT BLOGS
========================================================= */

const defaultBlogs = [

    /* =====================================================
       CREATING IN MY FREE TIME
    ===================================================== */

    {
        title: "Creating in My Free Time",
        category: "Personal",
        date: "2026-08-18",
        order: 1,
        image: "com.jpg",
        featured: false,

        content: `When I have nothing else to do, I usually spend my free time doing things that I enjoy. Instead of just staying idle, I like to keep myself busy by creating and editing different kinds of things. Editing has become one of my favorite hobbies because it allows me to be creative and experiment with different ideas.

Sometimes, I edit posters and pictures. I enjoy choosing colors, fonts, images, and other elements to create a design that looks clean and visually appealing. There are times when I also edit videos, especially when I want to try something different from my usual designs. Even simple editing projects can be enjoyable because I get to explore new styles and techniques.

Another thing I like doing is creating photo strip layouts. I enjoy designing different themes and arranging the elements so that the final layout looks balanced and attractive. I like thinking about what colors, decorations, fonts, and backgrounds would match a certain theme. It may look like a simple activity, but for me, it is a fun way to express my creativity.

I also spend some of my free time working on this personal website. Creating the website gives me another opportunity to be creative while also learning along the way. I can organize my work, share some of the things I have created, and experiment with how I want everything to look. It feels different from simply making a poster or editing a picture because I am creating something that combines both design and technology.

Most of the time, I do these activities while listening to music. Music makes the experience more enjoyable and helps me stay focused while I work. Sometimes I can spend a long time editing without noticing how much time has passed because I am enjoying both the music and the process of creating.

For me, having free time does not always mean doing nothing. It can also be an opportunity to create something, learn something new, or simply enjoy a hobby. Whether I am editing a poster, a video, a picture, a photo strip layout, or working on my personal website, I enjoy the feeling of turning an idea into something I can actually see. These small creative activities are some of the things that make my free time more meaningful and enjoyable.`
    },


    /* =====================================================
       JUST LEAVES
    ===================================================== */

    {
        title: "Just Leaves 🍂",
        category: "Personal",
        date: "2026-08-18",
        order: 2,
        image: "leaves.jpg",
        featured: false,

        content: `Spoken Word Poetry

Alam mo... para sa akin, dalawa ang ibig sabihin ng linyang “Just Leaves.”

Ang una... mga dahon lang naman 'yan. Walang kwenta. Tinatapak-tapakan. Patay, at tuyo.

Ang pangalawa... iwan mo na ako. Isang pag-alis. Isang pagbitaw. Isang paglayas nang walang paalam.

Pero kapag pinagsama mo ang dalawang kahulugang 'yan... doon mo makikita ang totoong ganda ng buhay.

Oo, dahon lang 'yan. At oo, iniwan ka ng dahong tuyo. Pero hindi ba't kaya lang naman nahulog at natuyo ang dahong 'yan... ay dahil tapos na ang papel niya sa sanga ng buhay mo?

Huwag mong kaawaan ang sarili mo kung may umalis. Hindi natin kailangang makulong sa iisang tao lang habangbuhay. Minsan, kailangan natin ng bagong mukha. Bagong simula. Bagong pag-asa.

Hindi naman natin kakalimutan ang luma, eh. Dahil kung wala ang lumang dahon, walang basehan ang bago. Ang luma ang nagturo sa atin kung paano kumapit... at ang bago ang magtuturo sa atin kung paano muling sumibol.

Kaya sa susunod na titingnan mo ang buhay mo, huwag kang maiyak sa mga nalagas.

Dahil ang totoo...

Hindi mo makikita ang susunod na magandang dahon ng kwento mo... kung hindi mo muna hinayaang mahulog at umalis... ang mga tuyong dahon ng kahapon.

— 🆆🅴🅷🅽🅽 🅻🅷🅴🅴

---

My Thoughts Behind “Just Leaves”

Ang “Just Leaves” ay nagsimula sa isang simpleng paglalaro ng salita, pero habang iniisip ko ang dalawang kahulugan nito, mas nakita ko na may mas malalim pala itong koneksyon sa buhay.

Kapag sinabi mong “just leaves,” puwede itong mangahulugan na mga dahon lang. Mga bagay na minsan ay nasa puno, pero dumating ang panahon na nalaglag, natuyo, at tuluyang nawala.

Pero kapag narinig mo naman ang “just leave,” iba na ang ibig sabihin.

Umalis ka na. Iwan mo na ako.

At doon nagsimula yung idea ng poetry na ito.

🍂 Ang mga dahon ay parang mga tao at karanasan sa buhay

May mga taong dumarating sa buhay natin na parang bagong dahon sa isang puno. Sa simula, hindi natin alam kung gaano sila katagal mananatili.

May ilan na matagal.

May ilan na sandali lang.

At may ilan na darating sa panahon na kailangan natin sila.

Pero hindi lahat ng dahon ay mananatili sa puno habambuhay.

Darating ang panahon na may mga dahong kailangang malaglag.

At minsan, masakit iyon.

Dahil habang nakatingala tayo sa puno, ang nakikita natin ay yung puwang na iniwan ng dahon.

Hindi natin agad nakikita na may dahilan kung bakit ito nahulog.

🌱 Hindi lahat ng pag-alis ay pagkatalo

Madalas, kapag may taong umaalis sa buhay natin, iniisip natin na may nawala sa atin.

At oo, may nawala.

Pero hindi ibig sabihin na tayo mismo ay nawala.

May mga taong bahagi lang ng isang chapter. May mga karanasan na hindi para manatili habang buhay. At may mga bagay na kailangang matapos para magkaroon ng espasyo para sa susunod.

Hindi ibig sabihin na walang halaga ang nauna.

Sa katunayan, mahalaga sila dahil may itinuro sila sa atin.

Kung walang lumang dahon, hindi natin malalaman kung paano naging ganito ang puno.

🌳 Ang puno ay hindi namamatay dahil nalalaglag ang dahon

Ito siguro ang pinakaimportanteng idea sa Just Leaves.

Kapag nalaglag ang isang dahon, hindi ibig sabihin na tapos na ang buhay ng puno.

Patuloy itong nabubuhay.

Patuloy itong lumalaki.

At darating ang panahon na magkakaroon ulit ito ng mga bagong dahon.

Ganito rin siguro tayo.

May mga bagay na mawawala. May mga taong aalis. May mga pangarap na magbabago. May mga chapter na matatapos.

Pero hindi ibig sabihin na doon na rin nagtatapos ang buhay natin.

🍃 Hindi kailangang kalimutan ang nakaraan

Hindi ko rin ibig sabihin na kailangan nating kalimutan ang mga lumang dahon.

Hindi naman ganoon ang buhay.

Ang mga taong naging bahagi ng buhay natin ay maaaring hindi na kasama sa susunod na chapter, pero hindi nito binubura ang naging papel nila sa mga naunang chapter.

May mga taong nagturo sa atin kung paano magmahal.

May mga taong nagturo sa atin kung paano masaktan.

May mga taong nagturo sa atin kung paano bumangon.

At may mga taong nagturo sa atin kung sino talaga tayo.

Kaya hindi kailangang kamuhian ang mga bagay na natapos.

Minsan, sapat nang sabihin:

“Salamat sa pagiging bahagi ng chapter na iyon.”

At pagkatapos...

ituloy ang kwento.

🌱 May bagong dahon pagkatapos ng luma

Siguro iyon ang gusto kong maiwan na mensahe ng Just Leaves.

Kapag may nalagas sa buhay mo, huwag mong isipin na wala nang susunod.

Baka hindi mo pa lang nakikita.

Baka nasa panahon ka pa ng paghihintay.

Baka kailangan mo munang bigyan ng pagkakataon ang sarili mong gumaling.

At baka kailangan mo munang tanggapin na may mga dahon talagang kailangang mahulog.

Dahil minsan, habang nakatingin tayo sa mga dahong nawala, hindi natin napapansin na may bagong dahon nang unti-unting tumutubo.

Kaya kung may umalis man sa buhay mo, huwag mong isipin na nabawasan ang halaga mo.

Kung may isang chapter na natapos, hindi ibig sabihin na tapos na ang buong libro.

May susunod pang pahina.

At baka sa susunod na pahinang iyon...

may mas magandang dahon nang naghihintay.

🍂 Just leaves.

🌱 Just leave.

📖 And then, let the story continue.`
    },


    /* =====================================================
       GRADUATION DAY
    ===================================================== */

    {
        title: "Graduation Day",
        category: "School Experience",
        date: "2026-06-24",
        order: 3,
        image: "profilepic.jpg",
        featured: true,

        content: `June 24, 2026 was one of the most memorable and meaningful days of my life because it was the day I officially graduated with a Bachelor of Science in Information Technology (BSIT) from Urdaneta City University (UCU).

After years of studying, completing projects, attending classes, working on requirements, taking examinations, preparing presentations, and facing different challenges, I finally reached one of the biggest milestones in my life — graduation.

The day was filled with happiness, excitement, and a little bit of sadness because it marked the end of my college journey. Looking back, there were many moments when I felt tired and stressed because of deadlines, projects, school activities, and other responsibilities. There were also times when I doubted myself, but I continued to move forward.

During the graduation ceremony, I felt proud seeing myself wearing my graduation attire and finally receiving my diploma. It was a special moment because I knew that all the hard work and sacrifices I made throughout my college years had finally paid off.

I am also thankful for my family, friends, classmates, instructors, and everyone who supported and encouraged me throughout my journey. Their support helped me continue even during difficult times.

Graduation was not only about receiving a diploma. It was also a reminder of all the experiences and lessons that I gained during my college years. I learned how to manage my time, work with different people, solve problems, communicate my ideas, and become more responsible with my work.

After the graduation ceremony, we went to the cemetery to visit my father. It was an emotional but meaningful part of the day. I wanted to visit him and somehow share this important achievement with him. Although he was not physically there to witness my graduation, visiting his grave made me feel that he was still part of this special moment in my life.

After visiting the cemetery, we went to eat together as a family. We spent some time talking, enjoying our meal, and celebrating the achievement together. It was a simple celebration, but it made the day even more memorable.

After eating, we went home and finally ended the day. It was a simple ending to a very meaningful and unforgettable day.

Graduation was not the end of my journey. It was the beginning of a new chapter in my life. As a BSIT graduate, I want to continue improving my skills in Graphic Design, Web Development, UI/UX Design, and Digital Creativity.

I hope to use everything I have learned to create meaningful projects, improve my skills, and build a successful career in the future.

June 24, 2026 will always be a special date for me — the day I officially became a Bachelor of Science in Information Technology graduate. 🎓`
    },


    /* =====================================================
       OJT EXPERIENCE
    ===================================================== */

    {
        title: "OJT Experience",
        category: "OJT Experience",
        date: "2026-05-28",
        order: 4,
        image: "ojt.jpg",
        featured: true,

        content: `My On-the-Job Training experience was one of the important parts of my college journey.

During my OJT, I was assigned to the LGU Urdaneta City Department of City Library. It gave me the opportunity to experience an actual working environment and understand how tasks are handled in an organization.

One of the tasks I worked on was encoding information for the Vertical File and Clippings Section. I recorded information such as the article title, date, author, page number, and source newspaper.

I also used Google Sheets to organize and record the information. This helped me become more familiar with organizing data and maintaining accurate records.

Aside from the technical tasks, I also learned the importance of being responsible, patient, organized, and attentive when doing work.

My OJT experience helped me understand that working in an actual organization is different from simply completing activities in school.

There were also different activities and programs that I was able to assist with during my OJT experience.

One of these was the R.E.A.D. Library Summer Program 2026. I assisted participants during different activities throughout the program.

The activities included orientation, Book Booth activities, online sessions, storytelling, Canva activities, Wacom Drawing Tablet activities, Math Market Madness, a lecture about Solid Waste Management, and participation from the Bureau of Fire Protection.

I also helped with the preparation and documentation of different activities and completed weekly reports.

Overall, my OJT experience gave me valuable lessons that I can use in my future career.

It helped me improve my communication skills, organization, responsibility, and ability to work with other people.

I am thankful for the people who guided me and for the experiences that became part of my college journey.`
    }

];


/* =========================================================
   SAVE BLOGS
========================================================= */

function saveBlogs() {

    localStorage.setItem(
        "blogs",
        JSON.stringify(blogs)
    );

}


/* =========================================================
   INITIALIZE BLOGS
========================================================= */

function initializeBlogs() {

    let savedBlogs = null;


    /* -----------------------------------------------------
       TRY TO READ LOCAL STORAGE
    ----------------------------------------------------- */

    try {

        savedBlogs =
            localStorage.getItem("blogs");

    } catch (error) {

        console.warn(
            "LocalStorage could not be accessed.",
            error
        );

    }


    /* -----------------------------------------------------
       LOAD EXISTING BLOGS
    ----------------------------------------------------- */

    if (savedBlogs) {

        try {

            blogs =
                JSON.parse(savedBlogs);

        } catch (error) {

            console.warn(
                "Invalid blog storage. Resetting blogs."
            );

            blogs = [];

        }

    }


    /* -----------------------------------------------------
       MAKE SURE BLOGS IS AN ARRAY
    ----------------------------------------------------- */

    if (!Array.isArray(blogs)) {

        blogs = [];

    }


    /* -----------------------------------------------------
       ADD MISSING DEFAULT BLOGS
       
       THIS IS THE IMPORTANT PART.
    ----------------------------------------------------- */

    defaultBlogs.forEach(
        defaultBlog => {

            const existingIndex =
                blogs.findIndex(
                    blog =>
                        blog.title ===
                        defaultBlog.title
                );


            /* ---------------------------------------------
               BLOG DOES NOT EXIST
            --------------------------------------------- */

            if (
                existingIndex === -1
            ) {

                blogs.push({
                    ...defaultBlog
                });

                return;

            }


            /* ---------------------------------------------
               BLOG EXISTS
               
               Update only the important default settings.
               Keep user-edited content.
            --------------------------------------------- */

            const existingBlog =
                blogs[existingIndex];


            existingBlog.date =
                defaultBlog.date;


            existingBlog.order =
                defaultBlog.order;


            existingBlog.category =
                defaultBlog.category;


            existingBlog.image =
                defaultBlog.image;


            existingBlog.featured =
                defaultBlog.featured;


            /*
               If old blog has no content,
               restore default content.
            */

            if (
                !existingBlog.content ||
                existingBlog.content.trim() === ""
            ) {

                existingBlog.content =
                    defaultBlog.content;

            }

        }
    );


    /* -----------------------------------------------------
       SAVE UPDATED BLOG LIST
    ----------------------------------------------------- */

    saveBlogs();

}


/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(date) {

    if (!date) {

        return "";

    }


    const d =
        new Date(
            date + "T00:00:00"
        );


    return d.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

}


/* =========================================================
   SORT BLOGS
   DATE: LATEST → OLDEST
   SAME DATE: ORDER
========================================================= */

function sortBlogs() {

    blogs.sort(
        (a, b) => {

            const dateA =
                new Date(
                    a.date +
                    "T00:00:00"
                );


            const dateB =
                new Date(
                    b.date +
                    "T00:00:00"
                );


            const dateDifference =
                dateB - dateA;


            if (
                dateDifference !== 0
            ) {

                return dateDifference;

            }


            return (
                (Number(a.order) || 999) -
                (Number(b.order) || 999)
            );

        }
    );

}


/* =========================================================
   DISPLAY BLOGS
========================================================= */

function displayBlogs() {

    sortBlogs();


    const container =
        document.getElementById(
            "blogContainer"
        );


    const featuredContainer =
        document.getElementById(
            "featuredContainer"
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


    /* =====================================================
       LATEST BLOGS
       ONLY 4
    ===================================================== */

    const latestBlogs =
        blogs.slice(
            0,
            4
        );


    latestBlogs.forEach(
        blog => {

            const originalIndex =
                blogs.indexOf(blog);


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "blog-card";


            card.dataset.category =
                blog.category || "";


            card.onclick =
                function () {

                    openBlog(
                        originalIndex
                    );

                };


            card.innerHTML = `

                <img
                    class="blog-card-image"
                    src="${blog.image || "profilepic.jpg"}"
                    alt="${escapeHTML(blog.title)}"
                >

                <div class="blog-info">

                    <span class="blog-category">

                        ${escapeHTML(
                            blog.category ||
                            "Uncategorized"
                        )}

                    </span>

                    <h2>

                        ${escapeHTML(
                            blog.title
                        )}

                    </h2>

                    <p>

                        Blog Date:
                        ${formatDate(
                            blog.date
                        )}

                    </p>

                </div>

                <div class="actions">

                    <button
                        class="edit"
                        onclick="
                            event.stopPropagation();
                            editBlog(${originalIndex});
                        "
                    >
                        Edit
                    </button>

                    <button
                        class="delete"
                        onclick="
                            event.stopPropagation();
                            deleteBlog(${originalIndex});
                        "
                    >
                        Delete
                    </button>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );


    /* =====================================================
       FEATURED BLOGS
       ONLY 2
    ===================================================== */

    if (featuredContainer) {

        const featuredTitles = [

            "Graduation Day",

            "OJT Experience"

        ];


        featuredTitles.forEach(
            title => {

                const blog =
                    blogs.find(
                        item =>
                            item.title ===
                            title
                    );


                if (
                    !blog ||
                    blog.featured !== true
                ) {

                    return;

                }


                const originalIndex =
                    blogs.indexOf(
                        blog
                    );


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "featured-card";


                card.onclick =
                    function () {

                        openBlog(
                            originalIndex
                        );

                    };


                card.innerHTML = `

                    <img
                        src="${blog.image || "profilepic.jpg"}"
                        alt="${escapeHTML(blog.title)}"
                    >

                    <span class="featured-badge">

                        Featured

                    </span>

                    <div class="blog-info">

                        <span class="blog-category">

                            ${escapeHTML(
                                blog.category ||
                                "Uncategorized"
                            )}

                        </span>

                        <h2>

                            ${escapeHTML(
                                blog.title
                            )}

                        </h2>

                        <p>

                            Blog Date:
                            ${formatDate(
                                blog.date
                            )}

                        </p>

                    </div>

                `;


                featuredContainer.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       NO BLOG
    ===================================================== */

    const noBlog =
        document.getElementById(
            "noBlog"
        );


    if (noBlog) {

        noBlog.style.display =
            latestBlogs.length === 0
                ? "block"
                : "none";

    }


    applySearchAndFilter();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    if (!text) {

        return "";

    }


    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   FORMAT BLOG CONTENT
========================================================= */

function formatContent(content) {

    if (!content) {

        return "";

    }


    const cleanContent =
        content.trim();


    const paragraphs =
        cleanContent
            .split(
                /\n\s*\n/
            )
            .filter(
                paragraph =>
                    paragraph.trim() !== ""
            );


    return paragraphs
        .map(
            paragraph => {

                return `

                    <p>
                        ${escapeHTML(
                            paragraph.trim()
                        ).replace(
                            /\n/g,
                            "<br>"
                        )}
                    </p>

                `;

            }
        )
        .join("");

}


/* =========================================================
   OPEN BLOG
========================================================= */

function openBlog(index) {

    const overlay =
        document.getElementById(
            "blogOverlay"
        );


    const preview =
        document.getElementById(
            "blogPreview"
        );


    if (
        !overlay ||
        !preview
    ) {

        return;

    }


    const blog =
        blogs[index];


    if (!blog) {

        return;

    }


    overlay.style.display =
        "block";


    preview.style.display =
        "block";


    preview.innerHTML = `

        <div class="preview-content">

            <img
                src="${blog.image || "profilepic.jpg"}"
                alt="${escapeHTML(blog.title)}"
            >

            <span class="blog-category">

                ${escapeHTML(
                    blog.category ||
                    "Uncategorized"
                )}

            </span>

            <h2>

                ${escapeHTML(
                    blog.title
                )}

            </h2>

            <p class="preview-date">

                ${formatDate(
                    blog.date
                )}

            </p>

            <div class="preview-description">

                ${formatContent(
                    blog.content
                )}

            </div>

        </div>

    `;


    preview.onclick =
        function () {

            closePreview();

        };


    overlay.onclick =
        function () {

            closePreview();

        };


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE BLOG
========================================================= */

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


        preview.innerHTML =
            "";


        preview.onclick =
            null;

    }


    document.body.style.overflow =
        "";

}


/* =========================================================
   OPEN ADD BLOG MODAL
========================================================= */

function openModal() {

    const modal =
        document.getElementById(
            "blogModal"
        );


    if (!modal) {

        return;

    }


    editingIndex =
        -1;


    document.getElementById(
        "modalTitle"
    ).textContent =
        "Add New Blog";


    document.getElementById(
        "title"
    ).value =
        "";


    document.getElementById(
        "category"
    ).value =
        "";


    document.getElementById(
        "blogDate"
    ).value =
        new Date()
            .toISOString()
            .split("T")[0];


    document.getElementById(
        "content"
    ).value =
        "";


    document.getElementById(
        "featured"
    ).checked =
        false;


    document.getElementById(
        "image"
    ).value =
        "";


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
            "";

    }


    if (previewContainer) {

        previewContainer.style.display =
            "none";

    }


    modal.style.display =
        "block";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    const modal =
        document.getElementById(
            "blogModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    editingIndex =
        -1;

}


/* =========================================================
   SAVE BLOG
========================================================= */

function saveBlog() {

    const title =
        document.getElementById(
            "title"
        ).value.trim();


    const category =
        document.getElementById(
            "category"
        ).value;


    const date =
        document.getElementById(
            "blogDate"
        ).value;


    const content =
        document.getElementById(
            "content"
        ).value.trim();


    const featured =
        document.getElementById(
            "featured"
        ).checked;


    const imageInput =
        document.getElementById(
            "image"
        );


    if (
        !title ||
        !category ||
        !date ||
        !content
    ) {

        alert(
            "Please complete all required fields."
        );

        return;

    }


    function finishSave(
        imageData
    ) {

        const maxOrder =
            blogs.reduce(
                (
                    max,
                    blog
                ) => {

                    return Math.max(
                        max,
                        Number(
                            blog.order
                        ) || 0
                    );

                },
                0
            );


        const oldBlog =
            editingIndex >= 0
                ? blogs[
                    editingIndex
                ]
                : null;


        const blogData = {

            title:
                title,

            category:
                category,

            date:
                date,

            order:
                oldBlog
                    ? oldBlog.order
                    : maxOrder + 1,

            content:
                content,

            image:
                imageData ||
                (
                    oldBlog &&
                    oldBlog.image
                        ? oldBlog.image
                        : "profilepic.jpg"
                ),

            featured:
                featured

        };


        if (
            editingIndex >= 0
        ) {

            blogs[
                editingIndex
            ] =
                blogData;

        }

        else {

            blogs.push(
                blogData
            );

        }


        saveBlogs();

        displayBlogs();

        closeModal();

    }


    if (
        imageInput.files &&
        imageInput.files[0]
    ) {

        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                finishSave(
                    event.target.result
                );

            };


        reader.readAsDataURL(
            imageInput.files[0]
        );

    }

    else {

        finishSave();

    }

}


/* =========================================================
   EDIT BLOG
========================================================= */

function editBlog(index) {

    const blog =
        blogs[index];


    if (!blog) {

        return;

    }


    editingIndex =
        index;


    document.getElementById(
        "modalTitle"
    ).textContent =
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
        "blogDate"
    ).value =
        blog.date;


    document.getElementById(
        "content"
    ).value =
        blog.content;


    document.getElementById(
        "featured"
    ).checked =
        blog.featured === true;


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
        preview
    ) {

        preview.src =
            blog.image;


        if (previewContainer) {

            previewContainer.style.display =
                "block";

        }

    }


    document.getElementById(
        "image"
    ).value =
        "";


    document.getElementById(
        "blogModal"
    ).style.display =
        "block";

}


/* =========================================================
   DELETE BLOG
========================================================= */

function deleteBlog(index) {

    const blog =
        blogs[index];


    if (!blog) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${blog.title}"?`
        );


    if (!confirmed) {

        return;

    }


    blogs.splice(
        index,
        1
    );


    saveBlogs();

    displayBlogs();

}


/* =========================================================
   SEARCH
========================================================= */

function searchBlog() {

    applySearchAndFilter();

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterCategory() {

    applySearchAndFilter();

}


/* =========================================================
   SEARCH + CATEGORY FILTER
========================================================= */

function applySearchAndFilter() {

    const searchInput =
        document.getElementById(
            "search"
        );


    const categorySelect =
        document.getElementById(
            "filterCategory"
        );


    if (
        !searchInput ||
        !categorySelect
    ) {

        return;

    }


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedCategory =
        categorySelect.value;


    const cards =
        document.querySelectorAll(
            "#blogContainer .blog-card"
        );


    let visibleCount =
        0;


    cards.forEach(
        card => {

            const title =
                card
                    .querySelector(
                        "h2"
                    )
                    ?.textContent
                    .toLowerCase() ||
                "";


            const category =
                card.dataset.category ||
                "";


            const matchesSearch =
                title.includes(
                    searchText
                );


            const matchesCategory =
                selectedCategory ===
                    "All" ||
                selectedCategory ===
                    "" ||
                category ===
                    selectedCategory;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                card.style.display =
                    "";

                visibleCount++;

            }

            else {

                card.style.display =
                    "none";

            }

        }
    );


    const noBlog =
        document.getElementById(
            "noBlog"
        );


    if (noBlog) {

        noBlog.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }

}


/* =========================================================
   IMAGE PREVIEW
========================================================= */

document.addEventListener(
    "change",
    function (event) {

        if (
            event.target.id !==
            "image"
        ) {

            return;

        }


        const file =
            event.target.files[0];


        if (!file) {

            return;

        }


        const reader =
            new FileReader();


        reader.onload =
            function (e) {

                const preview =
                    document.getElementById(
                        "imagePreview"
                    );


                const container =
                    document.getElementById(
                        "imagePreviewContainer"
                    );


                if (preview) {

                    preview.src =
                        e.target.result;

                }


                if (container) {

                    container.style.display =
                        "block";

                }

            };


        reader.readAsDataURL(
            file
        );

    }
);


/* =========================================================
   CLOSE MODAL OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "blogModal"
            );


        if (
            event.target ===
            modal
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

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


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeBlogs();

        displayBlogs();

    }
);
