/* BLOG SYSTEM */


let blogs = JSON.parse(localStorage.getItem("blogs")) || [];


let selectedImage = "";


let editIndex = -1;






/* FIX SAVED DATA */


blogs = blogs.map(blog => {


    return {


        ...blog,


        category: blog.category || "Others",


        publishedDate: blog.publishedDate || 
        new Date().toLocaleDateString("en-US",{

            month:"long",

            day:"numeric",

            year:"numeric"

        }),



        updatedDate: blog.updatedDate || "",



        featured: blog.featured || false



    };



});



localStorage.setItem(

    "blogs",

    JSON.stringify(blogs)

);









window.onload=function(){


    displayBlogs();


};









/* OPEN MODAL */


function openModal(){


document.getElementById("blogModal")
.style.display="block";



document.getElementById("modalTitle")
.innerHTML="Add New Blog";



editIndex=-1;



}









/* CLOSE MODAL */


function closeModal(){


document.getElementById("blogModal")
.style.display="none";



clearForm();



}









/* IMAGE UPLOAD */


document.getElementById("image")
.addEventListener("change",function(){



let file=this.files[0];



if(file){



let reader=new FileReader();



reader.onload=function(e){



selectedImage=e.target.result;



document.getElementById("imagePreview")
.src=selectedImage;



document.getElementById("imagePreviewContainer")
.style.display="block";



};



reader.readAsDataURL(file);



}



});









/* SAVE BLOG */


function saveBlog(){



let title =
document.getElementById("title").value;



let category =
document.getElementById("category").value;



let content =
document.getElementById("content").value;



let blogDate =
document.getElementById("blogDate").value;



let featured =
document.getElementById("featured").checked;







if(
title=="" ||
category=="" ||
content=="" ||
blogDate==""

){



alert("Please complete all fields.");

return;


}







let today =

new Date().toLocaleDateString("en-US",{


month:"long",


day:"numeric",


year:"numeric"



});









/* FEATURE LIMIT 4 */


if(featured){



let featuredCount =

blogs.filter(

blog=>blog.featured===true

).length;





if(editIndex==-1 && featuredCount>=4){



alert(
"Maximum of 4 Featured Blogs only."
);



return;



}



}






let blog={



title:title,



category:category,



content:content,



image:selectedImage,



blogDate:blogDate,



publishedDate:today,



updatedDate:"",



featured:featured



};






if(editIndex!=-1){



blog.publishedDate =

blogs[editIndex].publishedDate;



blog.updatedDate=today;



blogs[editIndex]=blog;



}



else{



blogs.push(blog);



}







localStorage.setItem(

"blogs",

JSON.stringify(blogs)

);





closeModal();


displayBlogs();



}
/* DISPLAY BLOGS */


function displayBlogs(){



let container =
document.getElementById("blogContainer");



let featuredContainer =
document.getElementById("featuredContainer");



let noBlog =
document.getElementById("noBlog");





container.innerHTML="";


featuredContainer.innerHTML="";








/* NO BLOG FOUND */


if(blogs.length===0){


    if(noBlog){

        noBlog.style.display="block";

    }


}

else{


    if(noBlog){

        noBlog.style.display="none";

    }


}









/* FEATURED BLOG */


let featuredBlogs =

blogs.filter(

blog=>blog.featured===true

);





featuredBlogs
.slice(0,4)
.forEach(blog=>{





featuredContainer.innerHTML += `



<div class="featured-card"

onclick="openBlog(${blogs.indexOf(blog)})">





<img src="${blog.image}">





<span class="featured-badge">

Featured

</span>






<div class="blog-info">





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



});









/* ALL BLOGS */


blogs.forEach((blog,index)=>{





container.innerHTML += `





<div class="blog-card"

data-category="${blog.category}">






<img

class="blog-card-image"

src="${blog.image}"

onclick="openBlog(${index})">







<div class="blog-info">






<span class="blog-category">

${blog.category}

</span>







<h2 onclick="openBlog(${index})">


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

blog.updatedDate ?

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








<div class="actions">






<button

class="edit"

onclick="editBlog(${index})">


Edit


</button>







<button

class="delete"

onclick="deleteBlog(${index})">


Delete


</button>







</div>








</div>







`;





});



}













/* EDIT BLOG */


function editBlog(index){



editIndex=index;



let blog=blogs[index];






document.getElementById("modalTitle")
.innerHTML="Edit Blog";





document.getElementById("title").value=

blog.title;





document.getElementById("category").value=

blog.category;





document.getElementById("content").value=

blog.content;





document.getElementById("blogDate").value=

blog.blogDate;





document.getElementById("featured").checked=

blog.featured;






selectedImage=

blog.image;







if(blog.image){



document.getElementById("imagePreview")
.src=blog.image;



document.getElementById("imagePreviewContainer")
.style.display="block";



}







document.getElementById("blogModal")
.style.display="block";





}












/* DELETE BLOG */


function deleteBlog(index){



if(confirm("Delete this blog?")){



blogs.splice(index,1);



localStorage.setItem(

"blogs",

JSON.stringify(blogs)

);



displayBlogs();



}



}












/* SEARCH + CATEGORY */


function searchBlog(){



let search =

document.getElementById("search")
.value
.toLowerCase();





let category =

document.getElementById("filterCategory")
.value;







let cards =

document.querySelectorAll(".blog-card");







cards.forEach(card=>{



let title =

card.querySelector("h2")
.innerText
.toLowerCase();





let cardCategory =

card.getAttribute("data-category");







let searchMatch =

title.includes(search);







let categoryMatch =

category=="All" ||

cardCategory==category;








if(searchMatch && categoryMatch){



card.style.display="block";



}

else{



card.style.display="none";



}



});



}









function filterCategory(){


searchBlog();



}
/* OPEN BLOG PREVIEW */


function openBlog(index){



let blog = blogs[index];



let overlay =

document.getElementById("blogOverlay");



let preview =

document.getElementById("blogPreview");







overlay.style.display="block";



preview.style.display="block";







preview.innerHTML = `



<img src="${blog.image}">





<h2>

${blog.title}

</h2>







<p>

${blog.content}

</p>







`;






}











/* CLOSE PREVIEW */


function closePreview(){



let overlay =

document.getElementById("blogOverlay");



let preview =

document.getElementById("blogPreview");







if(overlay){



overlay.style.display="none";



}







if(preview){



preview.style.display="none";



}






}












/* CLEAR FORM */


function clearForm(){



let title =

document.getElementById("title");



let category =

document.getElementById("category");



let content =

document.getElementById("content");



let blogDate =

document.getElementById("blogDate");



let featured =

document.getElementById("featured");







if(title)

title.value="";







if(category)

category.value="";







if(content)

content.value="";







if(blogDate)

blogDate.value="";







if(featured)

featured.checked=false;







selectedImage="";








let preview =

document.getElementById("imagePreview");



let container =

document.getElementById("imagePreviewContainer");







if(preview){



preview.src="";



}







if(container){



container.style.display="none";



}







editIndex=-1;



}












/* CLICK OUTSIDE CLOSE */


window.onclick=function(event){



let modal =

document.getElementById("blogModal");



let overlay =

document.getElementById("blogOverlay");







if(event.target == modal){



closeModal();



}







if(event.target == overlay){



closePreview();



}



}