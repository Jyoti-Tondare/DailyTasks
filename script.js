const title=document.getElementById("title");
const description=document.getElementById("description");
const form1=document.querySelector("form");
const contain=document.querySelector(".container");

const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showAllTasks();
function showAllTasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.appendChild(innerDiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        p.style.fontWeight="bold";
        innerDiv.appendChild(p);

        const span=document.createElement("span");
        span.innerText=value.description;
        innerDiv.appendChild(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";
  
        btn.addEventListener("click",()=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks)); 
            showAllTasks();
            // console.log(tasks);
        })

        div.appendChild(btn);

        contain.appendChild(div);
    })

}

function removeTasks(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
}

form1.addEventListener("submit",(e)=>{
     e.preventDefault();
     removeTasks();
     tasks.push({
         title:title.value,
         description:description.value,
       });
      localStorage.setItem("tasks",JSON.stringify(tasks)); 
     showAllTasks();
  });



