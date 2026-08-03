
let projects = JSON.parse(localStorage.getItem("projects")) || [];

let editIndex = null;

let imageData = "";



// ELEMENTS

const projectContainer = document.getElementById("projectContainer");

const noProject = document.getElementById("noProject");

const modal = document.getElementById("projectModal");

const imageInput = document.getElementById("projectImage");

const imagePreview = document.getElementById("imagePreview");







// OPEN MODAL


function openProjectModal(){


modal.style.display="flex";


document.getElementById("modalTitle").innerHTML="Add Project";


editIndex=null;


clearForm();


}







// CLOSE MODAL


function closeProjectModal(){


modal.style.display="none";


clearForm();


}







// CLEAR FORM


function clearForm(){


document.getElementById("projectTitle").value="";


document.getElementById("projectCategory").value="";


document.getElementById("projectStatus").value="";


document.getElementById("projectDescription").value="";


document.getElementById("projectTools").value="";


document.getElementById("projectLink").value="";


imagePreview.src="";


imageInput.value="";


imageData="";


}








// IMAGE PREVIEW


imageInput.addEventListener("change",function(){


const file=this.files[0];


if(file){


const reader=new FileReader();


reader.onload=function(e){


imageData=e.target.result;


imagePreview.src=imageData;


}



reader.readAsDataURL(file);


}


});









// SAVE PROJECT


function saveProject(){



let title=document.getElementById("projectTitle").value;


let category=document.getElementById("projectCategory").value;


let status=document.getElementById("projectStatus").value;


let description=document.getElementById("projectDescription").value;


let tools=document.getElementById("projectTools").value;


let link=document.getElementById("projectLink").value;







if(title=="" || description==""){


alert("Please complete required fields.");


return;


}







let project={


image:imageData || "assets/default-project.png",


title:title,


category:category,


status:status,


description:description,


tools:tools,


link:link


};









if(editIndex===null){


projects.push(project);


}

else{


projects[editIndex]=project;


}







localStorage.setItem(

"projects",

JSON.stringify(projects)

);







displayProjects();


closeProjectModal();


}









// DISPLAY PROJECTS


function displayProjects(){



projectContainer.innerHTML="";





if(projects.length===0){


noProject.style.display="block";


}

else{


noProject.style.display="none";


}








projects.forEach((project,index)=>{



let card=document.createElement("div");


card.className="project-card";







card.innerHTML=`

<img src="${project.image}">



<div class="project-content">






<span class="category">

${project.category}

</span>



<span class="status">

${project.status}

</span>







<h2>

${project.title}

</h2>






<p>

${project.description}

</p>






<div class="tools-used">

🛠 Tools Used:

${project.tools}

</div>







<div class="project-buttons">





<a href="${project.link}"

target="_blank"

class="view-btn">

View Project

</a>







<button

class="edit-btn"

onclick="editProject(${index})">

Edit

</button>








<button

class="delete-btn"

onclick="deleteProject(${index})">

Delete

</button>






</div>




</div>

`;







projectContainer.appendChild(card);



});



}









// EDIT PROJECT


function editProject(index){



editIndex=index;


let project=projects[index];




document.getElementById("modalTitle").innerHTML="Edit Project";



document.getElementById("projectTitle").value=project.title;



document.getElementById("projectCategory").value=project.category;



document.getElementById("projectStatus").value=project.status;



document.getElementById("projectDescription").value=project.description;



document.getElementById("projectTools").value=project.tools;



document.getElementById("projectLink").value=project.link;






imageData=project.image;


imagePreview.src=project.image;






modal.style.display="flex";



}









// DELETE PROJECT


function deleteProject(index){



let confirmDelete=confirm(

"Are you sure you want to delete this project?"

);



if(confirmDelete){



projects.splice(index,1);





localStorage.setItem(

"projects",

JSON.stringify(projects)

);





displayProjects();



}


}









// CLOSE MODAL OUTSIDE CLICK


window.onclick=function(event){



if(event.target==modal){


closeProjectModal();


}


}









// LOAD PROJECTS


displayProjects();