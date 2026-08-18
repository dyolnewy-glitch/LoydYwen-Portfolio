/* =========================================================
   BLOG.JS
========================================================= */


/* =========================================================
   BLOG DATA
========================================================= */

let blogs =
    JSON.parse(localStorage.getItem("blogs")) || [];

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

Graduation was not only about receiving a diploma. It was also a reminder of all the experiences and lessons that I gained during my college years.

I learned how to manage my time, work with different people, solve problems, communicate my ideas, and become more responsible with my work.

After the graduation ceremony, we went to the cemetery to visit my father. It was an emotional but meaningful part of the day. I wanted to visit him and somehow share this important achievement with him.

Although he was not physically there to witness my graduation, visiting his grave made me feel that he was still part of this special moment in my life.

After visiting the cemetery, we went to eat together as a family. We spent some time talking, enjoying our meal, and celebrating the achievement together.

It was a simple celebration, but it made the day even more memorable.

After eating, we went home and finally ended the day.

It was a simple ending to a very meaningful and unforgettable day.

Graduation was not the end of my journey. It was the beginning of a new chapter in my life.

As a BSIT graduate, I want to continue improving my skills in Graphic Design, Web Development, UI/UX Design, and Digital Creativity.

I hope to use everything I have learned to create meaningful projects, improve my skills, and build a successful career in the future.

June 24, 2026 will always be a special date for me — the day I officially became a Bachelor of Science in Information Technology graduate. 🎓`
    },


    /* =====================================================
       THE PEOPLE I MET DURING MY OJT
    ===================================================== */

    {
        title: "The People I Met During My OJT",
        category: "OJT Experience",
        date: "2026-06-10",
        order: 4,
        image: "ojts.jpg",
        featured: false,

        content: `My OJT experience was not only about the tasks I completed, the things I learned, or the 486 hours that I needed to finish. One of the most memorable parts of my OJT was the people I met along the way.

When we were deployed at the library, there were students from different schools who were also completing their OJT. There were students from Urdaneta City University (UCU), Pangasinan State University (PSU), and LNL.

At first, we did not really know each other. We were all just trying to adjust to the new environment, understand our responsibilities, and get comfortable working in the library.

There were four of us from UCU and five PSU ABEL students who were deployed at the library at around the same time. When we arrived, there were already three PSU IT students who had been there for about a month.

There were also four students from LNL who had already been assigned to the library since November 2025.

At first, I was shy around everyone. I did not really know how to start conversations or become comfortable with people I had just met.

After a few days, however, we slowly started to become more comfortable with each other.

The people who were initially strangers slowly became friends and companions that I looked forward to seeing every day.

One of the things that made us closer was the fact that we were sharing the same computer room.

Since we were all in one room, it was almost impossible for the place to stay quiet. We became noisy, joked around, laughed at random things, and talked about different topics while doing our tasks.

There were moments when the computer room was so noisy that it felt less like a workplace and more like a room full of friends spending time together.

One of the people I became close with was Roxanne.

She was from PSU ABEL, so she did not have as much experience with computers. She would often ask me for help whenever there was something about the computer that she did not know how to do.

I would try to teach her and help her understand the things she was having difficulty with.

Those simple moments became some of the memories I remember the most.

It was not anything grand or extraordinary, but helping each other made our OJT experience more enjoyable.

Another thing that brought us closer was Istoryahan sa Parke and Aklatan sa Parke.

Every Tuesday to Friday, from around 4:00 to 5:00 in the afternoon, we would usually be together at the park. We assisted with the activities and helped children read books.

Spending time together outside the library gave us more opportunities to talk, laugh, and bond with each other.

The practice and preparation for Istoryahan sa Parke for the anniversary of Urdaneta City was also one of the moments that brought us even closer.

We practiced together, spent time together, laughed together, and experienced the nervousness and excitement of preparing for the event.

I think those moments were important because we were no longer just OJT students from different schools.

We were already becoming a group that shared the same experiences.

There were also times when the library had events and we would eat lunch together.

Whenever there was food or an event, we would often find ourselves sitting together and talking while eating.

Even simple lunches became memorable because of the conversations and laughter that came with them.

We also took many pictures together.

Some of our pictures were taken at the park during our activities. We also had a photo booth experience at the Cultural Center, where the library was involved in an activity.

We took pictures together and captured moments that, at that time, seemed like ordinary memories.

But looking back now, those pictures became something more meaningful.

They became reminders of a group of people who unexpectedly became an important part of my college and OJT experience.

Of course, our OJT could not last forever.

The PSU ABEL students were the first ones among the PSU group to finish their OJT. They only needed 400 hours, so their OJT ended earlier than ours.

When their last day came, they shared what they had learned during their time at the library.

They talked about their experiences, the things they appreciated, their recommendations for the library, and the memories they would take with them.

Listening to them made me realize that the time we had together was already coming to an end.

I cried so much that day.

It was difficult to accept that the people I had gotten used to seeing almost every day were already leaving.

One of the moments I will never forget was when Rose gave me a letter.

I became very emotional while reading it because Rose was one of the people who always made me feel happy during our OJT.

She was also one of the people who would remind me to eat and ask me if I was okay.

Those may seem like small things, but they meant a lot to me.

Sometimes, we do not realize how much someone's simple concern can mean until the person is no longer around.

After the PSU ABEL students left, the PSU IT students eventually finished their OJT as well.

There were only the UCU students left.

The library suddenly felt different.

It became much quieter.

The room that used to be filled with laughter, conversations, jokes, and noise was no longer the same.

I could really feel the difference.

It was strange seeing the same room but not hearing the same voices anymore.

The people who used to make the room noisy and fun were already gone.

After a few more weeks, it was my turn to leave.

My last day was May 28, 2026.

When I left, there were still three UCU students who remained at the library.

At that time, there was also an event happening, so I was not able to properly share everything I wanted to say before leaving.

Maybe that is one of the reasons why I still feel like there was something unfinished.

I wanted to say goodbye properly.

I wanted to tell everyone how thankful I was for the time we spent together.

I wanted to tell them that the memories we created during those months meant so much to me.

But sometimes, things do not end the way we imagine they will.

One day, we were all together, laughing and making noise in the computer room.

Then suddenly, one by one, people started leaving.

The people who were once part of our everyday routine were no longer there.

And eventually, I became one of the people who had to leave too.

While writing this blog, I honestly feel emotional.

I miss them so much.

I miss the noise in the computer room.

I miss the random conversations.

I miss helping each other.

I miss Roxanne asking me about things she did not know on the computer.

I miss Rose reminding me to eat and asking if I was okay.

I miss our afternoons at the park.

I miss the laughter during Istoryahan sa Parke and Aklatan sa Parke.

I miss our lunches together.

I miss taking pictures with everyone.

I miss the simple moments that I did not realize would become some of my favorite memories.

Sometimes, I wish our OJT had lasted longer.

I wish we had more days together.

I wish we could have spent more time talking, laughing, practicing for events, eating together, and simply being around each other.

If I had known that those days would become some of the best memories of my life, maybe I would have appreciated every single moment even more.

Our OJT was supposed to be about completing 400 hours and gaining work experience.

But for me, it became so much more than that.

It became a chapter filled with friendship, laughter, learning, challenges, memories, and people who made the experience unforgettable.

We came from different schools.

We had different backgrounds.

We had different skills and different experiences.

But somehow, we became a group.

We started as strangers who were shy around each other.

Then we slowly became comfortable.

Then we became friends.

And eventually, we became people who would miss each other when the OJT ended.

That is what makes this experience so special to me.

The OJT may have ended, but the memories will always remain.

The pictures we took, the letters we received, the conversations we had, the jokes we shared, the meals we ate together, and the moments we spent at the park will always remind me of that chapter of my life.

I know that we will all eventually move forward.

We will graduate, find jobs, continue our studies, meet new people, and experience different things in life.

Maybe there will come a time when we will not talk as often as we used to.

Maybe we will become busy with our own lives.

But I hope that whenever we remember our OJT days, we will remember how happy we were during those moments.

I hope they also remember the noisy computer room.

I hope they remember the park.

I hope they remember our lunches, our pictures, our jokes, and all the little moments that made our OJT special.

Most of all, I hope they remember that for a short period of our lives, we became part of each other's story.

Looking back, I realize that one of the best things I gained from my OJT was not something I could put on a resume.

It was the friendships and memories that I will carry with me.

The OJT may have been temporary, but the memories are something I will never forget.

I am grateful that I met them.

I am grateful that we were given the chance to spend those months together.

And even though I cried when everyone started leaving, I would still choose to experience it all again.

Because those moments were worth it.

Those people were worth it.

And that chapter of my life was one of the best memories I have ever had.

Sometimes, the best memories are not planned.

They happen unexpectedly, with people you never expected to become important to you.

And when the chapter finally ends, you realize just how much those ordinary days actually meant.

My OJT ended on May 28, 2026.

But the memories we made together will stay with me for a much longer time.

To everyone I met during my OJT — thank you.

Thank you for the laughter.

Thank you for the memories.

Thank you for the friendship.

And thank you for making my OJT experience one of the best chapters of my life.

I may have already left the library, but a part of me will always remember the people, the place, and the moments that made those days special.

I miss you all.

And honestly...

I wish our OJT never had to end.`
    },


    /* =====================================================
       OJT EXPERIENCE
    ===================================================== */

    {
        title: "OJT Experience",
        category: "OJT Experience",
        date: "2026-05-28",
        order: 5,
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
   INITIALIZE BLOGS
========================================================= */

function initializeBlogs() {

    if (!localStorage.getItem("blogs")) {

        blogs = defaultBlogs.map(blog => ({
            ...blog
        }));

        saveBlogs();

    } else {

        blogs = JSON.parse(
            localStorage.getItem("blogs")
        );


        /* =================================================
           ADD MISSING DEFAULT BLOGS
        ================================================= */

        defaultBlogs.forEach(defaultBlog => {

            const exists =
                blogs.some(
                    blog =>
                        blog.title ===
                        defaultBlog.title
                );


            if (!exists) {

                blogs.push({
                    ...defaultBlog
                });

            }

        });


        /* =================================================
           FIX EXISTING BLOG DATA
        ================================================= */

        const freeTime =
            blogs.find(
                blog =>
                    blog.title ===
                    "Creating in My Free Time"
            );


        if (freeTime) {

            freeTime.date =
                "2026-08-18";

            freeTime.order =
                1;

            freeTime.category =
                "Personal";

            freeTime.image =
                "com.jpg";

            freeTime.featured =
                false;

        }


        const justLeaves =
            blogs.find(
                blog =>
                    blog.title ===
                    "Just Leaves 🍂"
            );


        if (justLeaves) {

            justLeaves.date =
                "2026-08-18";

            justLeaves.order =
                2;

            justLeaves.category =
                "Personal";

            justLeaves.image =
                "leaves.jpg";

            justLeaves.featured =
                false;

        }


        const graduation =
            blogs.find(
                blog =>
                    blog.title ===
                    "Graduation Day"
            );


        if (graduation) {

            graduation.date =
                "2026-06-24";

            graduation.order =
                3;

            graduation.category =
                "School Experience";

            graduation.image =
                "profilepic.jpg";

            graduation.featured =
                true;

        }


        const peopleOJT =
            blogs.find(
                blog =>
                    blog.title ===
                    "The People I Met During My OJT"
            );


        if (peopleOJT) {

            peopleOJT.date =
                "2026-06-10";

            peopleOJT.order =
                4;

            peopleOJT.category =
                "OJT Experience";

            peopleOJT.image =
                "ojts.jpg";

            peopleOJT.featured =
                false;

        }


        const ojt =
            blogs.find(
                blog =>
                    blog.title ===
                    "OJT Experience"
            );


        if (ojt) {

            ojt.date =
                "2026-05-28";

            ojt.order =
                5;

            ojt.category =
                "OJT Experience";

            ojt.image =
                "ojt.jpg";

            ojt.featured =
                true;

        }


        saveBlogs();

    }

}


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
   DATE FORMAT
========================================================= */

function formatDate(date) {

    if (!date) return "";

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
   LATEST → OLDEST
========================================================= */

function sortBlogs() {

    blogs.sort(
        (a, b) => {

            const dateA =
                new Date(
                    a.date ||
                    "1900-01-01"
                );

            const dateB =
                new Date(
                    b.date ||
                    "1900-01-01"
                );


            const dateDifference =
                dateB - dateA;


            if (
                dateDifference !== 0
            ) {

                return dateDifference;

            }


            return (
                (a.order || 999) -
                (b.order || 999)
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


    if (!container) return;


    container.innerHTML =
        "";


    if (featuredContainer) {

        featuredContainer.innerHTML =
            "";

    }


    /* =====================================================
       ALL BLOGS
       LATEST → OLDEST
    ===================================================== */

    const latestBlogs =
        blogs;


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
                blog.category ||
                "";


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
                            "Personal"
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
                        type="button"
                        class="edit"
                        onclick="
                            event.stopPropagation();
                            editBlog(${originalIndex});
                        "
                    >
                        Edit
                    </button>

                    <button
                        type="button"
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
    ===================================================== */

    if (featuredContainer) {

        const featuredBlogs =
            blogs.filter(
                blog =>
                    blog.featured === true
            );


        featuredBlogs.forEach(
            blog => {

                const originalIndex =
                    blogs.indexOf(blog);


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
                                "Personal"
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

    if (!text) return "";


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

    if (!content) return "";


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

                const text =
                    paragraph.trim();


                return `
                    <p>
                        ${escapeHTML(
                            text
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
    ) return;


    const blog =
        blogs[index];


    if (!blog) return;


    overlay.style.display =
        "block";


    preview.style.display =
        "block";


    preview.innerHTML = `

        <div class="preview-content">

            <img
                src="${blog.image || "profilepic.jpg"}"
                alt="${escapeHTML(
                    blog.title
                )}"
            >

            <span class="blog-category">
                ${escapeHTML(
                    blog.category ||
                    "Personal"
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


    if (!modal) return;


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


    const previewContainer =
        document.getElementById(
            "imagePreviewContainer"
        );


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
                ) =>
                    Math.max(
                        max,
                        blog.order ||
                        0
                    ),
                0
            );


        const blogData = {

            title:
                title,

            category:
                category,

            date:
                date,

            order:
                editingIndex >= 0
                    ? (
                        blogs[
                            editingIndex
                        ].order ||
                        maxOrder + 1
                    )
                    : maxOrder + 1,

            content:
                content,

            image:
                imageData ||
                (
                    editingIndex >= 0
                        ? blogs[
                            editingIndex
                        ].image
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


    if (!blog) return;


    editingIndex =
        index;


    document.getElementById(
        "modalTitle"
    ).textContent =
        "Edit Blog";


    document.getElementById(
        "title"
    ).value =
        blog.title || "";


    document.getElementById(
        "category"
    ).value =
        blog.category || "";


    document.getElementById(
        "blogDate"
    ).value =
        blog.date || "";


    document.getElementById(
        "content"
    ).value =
        blog.content || "";


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
        preview &&
        previewContainer
    ) {

        preview.src =
            blog.image;

        previewContainer.style.display =
            "block";

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


    if (!blog) return;


    const confirmed =
        confirm(
            `Delete "${blog.title}"?`
        );


    if (!confirmed) return;


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
    ) return;


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
                selectedCategory === "All" ||
                selectedCategory === "" ||
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
        ) return;


        const file =
            event.target.files[0];


        if (!file) return;


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
