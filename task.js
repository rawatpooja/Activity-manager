document.getElementById("save").addEventListener('click',(e)=>{
    e.preventDefault();
    saveData();
})

 var taskdata=[];
 var obj={
 task:"",taskstatus:"",priority:"",celender:""
 }

 function showData(){
     console.log(localStorage);
     const d = new Date();
     let year = d.getFullYear();
            let month = d.getMonth()+1;
            let date = d.getDate();
            let fulldate = `${year}-${month}-${date}`;
            console.log(fulldate)
      var table=document.getElementById("myTable");
    var row="";
     taskdata= JSON.parse(localStorage.getItem("taskdata"))
        taskdata.map((value,i)=>{
                console.log(value)
               
       if (fulldate==value.celender){
                 row+=`<tr><td>${value.task}</td> <td>${value.taskstatus}</td> <td>${value.priority}</td> <td>${value.celender}</td><td><a href="#" onclick="editData(${i})">edit</a>  <a href="#" onclick="delData(${i})">delete</a></td></tr>`
      }else{
       console.log('no');
       }
  })
    document.getElementById("myTable").innerHTML=row;
}
  
document.getElementById("show_data").addEventListener('click',()=>{
    showData();
 })

 function saveData(){
    var task=document.getElementById('task_name').value;
    var taskstatus=document.getElementById('sta').value;
    var priority=document.getElementById('pri').value;
    var celender=document.getElementById('cel').value;
    var text=localStorage.getItem("taskdata");
    taskdata=JSON.parse(text);
   taskdata.push({"task":task,"taskstatus":taskstatus,"priority":priority,"celender":celender});
  localStorage.setItem("taskdata",JSON.stringify(taskdata));
    console.log(taskdata);
 }

let x;
 function editData(i){
     x = i;
     document.getElementById('task_name').value=taskdata[i].task;
     document.getElementById('sta').value=taskdata[i].taskstatus;
     document.getElementById('pri').value=taskdata[i].priority;
     document.getElementById('cel').value=taskdata[i].celender;
}

 function updateData(i){
     var newtask=document.getElementById('task_name').value;
     var newtaskstatus=document.getElementById('sta').value;
     var newpriority=document.getElementById('pri').value;
     var newcelender=document.getElementById('cel').value;
     taskdata[i].task=newtask;
     taskdata[i].taskstatus=newtaskstatus;
     taskdata[i].priority=newpriority;
     taskdata[i].celender=newcelender;
     localStorage.setItem("taskdata", JSON.stringify(taskdata));
     var text = localStorage.getItem("taskdata");
     taskdata = JSON.parse(text);
     console.log(i);
     showData();
 }

 document.getElementById("update").addEventListener('click',()=>{
     updateData(x);
     showData();
 })   

   function delData(i){
       taskdata.splice(i,1);
       localStorage.setItem("taskdata", JSON.stringify(taskdata));
        var text = localStorage.getItem("taskdata");
        taskdata = JSON.parse(text);
        showData();
 }

 let mysidebar=document.getElementById("mysidebar");
 let closebtn=document.getElementById("closebtn");
 let main=document.getElementById("main");
 main.addEventListener("click",()=>{
     mysidebar.style.width="250px";
 })
 closebtn.addEventListener("click",()=>{
      mysidebar.style.width="0px";
 })
