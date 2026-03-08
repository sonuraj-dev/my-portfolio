export default function About(){
  return (
    <section id="about" 
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">

      </section>
  
)
}
<!DOCTYPE html>
<html>
<head>
<title>SCOPE Smart Academic Dashboard</title>

<style>
body{
  font-family: 'Segoe UI';
  margin:0;
  background: linear-gradient(135deg,#667eea,#764ba2);
  color:white;
}

header{
  text-align:center;
  padding:20px;
  font-size:26px;
  font-weight:bold;
}

section{
  background:white;
  color:black;
  margin:20px;
  padding:20px;
  border-radius:15px;
  box-shadow:0 10px 30px rgba(0,0,0,0.3);
}

button{
  padding:8px 14px;
  border:none;
  border-radius:8px;
  background:#4e73df;
  color:white;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  background:#2e59d9;
  transform:scale(1.05);
}

.warning{color:red;font-weight:bold;}
.success{color:green;font-weight:bold;}

#dashboard{
  position:relative;
  height:200px;
  border:2px solid #333;
  background:#f8f9fc;
}

.overlay{
  position:absolute;
  width:150px;
  height:80px;
  display:none;
  padding:10px;
  border-radius:10px;
  box-shadow:0 8px 15px rgba(0,0,0,0.3);
}
</style>
</head>

<body>

<header>🚀 SCOPE Smart Academic Dashboard</header>

<!-- Q11 DO WHILE -->
<section>
<h3>1. Dashboard Menu (Do-While)</h3>
<button onclick="showMenu()">Open Menu</button>
</section>

<!-- Q12 SWITCH -->
<section>
<h3>2. Grade Calculator</h3>
<input type="number" id="score" placeholder="Enter Score">
<button onclick="calculateGrade()">Check Grade</button>
<p id="gradeResult"></p>
</section>

<!-- Q13 NESTED IF -->
<section>
<h3>3. Student Validator</h3>
<input type="text" id="name" placeholder="Name">
<input type="text" id="roll" placeholder="Roll (VIT...)">
<input type="number" id="cgpa" placeholder="CGPA">
<button onclick="validateStudent()">Validate</button>
<p id="validResult"></p>
</section>

<!-- Q14 FOR LOOP -->
<section>
<h3>4. Course List</h3>
<button onclick="renderCourses()">Show Courses</button>
<ul id="courseList"></ul>
</section>

<!-- Q15 RADIO -->
<section>
<h3>5. Specialization</h3>
<input type="radio" name="track" value="Data Mining" onchange="showTrack()"> Data Mining
<input type="radio" name="track" value="AI" onchange="showTrack()"> AI
<input type="radio" name="track" value="Web" onchange="showTrack()"> Web
<p id="trackResult"></p>
</section>

<!-- Q16 CHECKBOX -->
<section>
<h3>6. Dashboard Features</h3>
<input type="checkbox" id="darkMode" onchange="toggleDarkMode()"> Dark Mode
<input type="checkbox" id="chat" onchange="toggleChat()"> Live Chat
<div id="chatBox" style="display:none;">Support Online</div>
</section>

<!-- Q17 Z-INDEX -->
<section>
<h3>7. Notification Overlay</h3>
<div id="dashboard">
<button onclick="showNotification()">Alert</button>
<button onclick="showQuickMenu()">Menu</button>

<div id="notification" class="overlay" style="background:yellow; z-index:10; left:20px; top:60px;">
New Assignment!
</div>

<div id="quickMenu" class="overlay" style="background:#4e73df; color:white; z-index:20; right:20px; top:60px;">
Quick Menu
</div>
</div>
</section>

<!-- Q18 TEXTAREA -->
<section>
<h3>8. Assignment Submission</h3>
<textarea id="submission" rows="4" cols="50" maxlength="500" 
oninput="updateCharCount()"></textarea>
<p>Characters: <span id="charCount">0</span>/500</p>
<button onclick="submitAssignment()">Submit</button>
<p id="submitResult"></p>
</section>

<!-- Q19 DROPDOWN -->
<section>
<h3>9. Course Category</h3>
<select id="category" onchange="showCategory()">
<option value="">Select</option>
<option value="theory">Theory</option>
<option value="practical">Practical</option>
<option value="project">Project</option>
</select>
<p id="categoryResult"></p>
</section>

<!-- Q20 MULTI SELECT -->
<section>
<h3>10. Skills</h3>
<select id="skills" multiple size="4" onchange="updateSkills()">
<option>Java</option>
<option>Python</option>
<option>JavaScript</option>
<option>SQL</option>
</select>
<p id="skillsResult"></p>
</section>

<!-- Q21 CANVAS -->
<section>
<h3>11. Progress Chart</h3>
<canvas id="chart" width="400" height="200" style="border:2px solid #333;"></canvas><br>
<button onclick="drawChart()">Draw</button>
<button onclick="clearChart()">Clear</button>
</section>

<!-- Q22 INLINE + EVENT LISTENER -->
<section>
<h3>12. Enrollment</h3>
<button onclick="enroll('Data Mining')">Enroll DM</button>
<button id="aiBtn">Enroll AI</button>
<div id="enrollList"></div>
</section>

<script>

/* Q11 */
function showMenu(){
 let choice;
 do{
   choice=prompt("1.Courses 2.Assignments 3.Exit");
   if(choice=="1") console.log("Courses selected");
 }while(choice!="3");
 alert("Logged out");
}

/* Q12 */
function calculateGrade(){
 let score=parseInt(document.getElementById("score").value);
 let grade;
 switch(true){
   case(score>=90): grade="A"; break;
   case(score>=80): grade="B"; break;
   default: grade="F";
 }
 document.getElementById("gradeResult").innerHTML="Grade: "+grade;
}

/* Q13 */
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElementById("cgpa").value);

 if(name.length>=3){
   if(roll.startsWith("VIT") && cgpa>=7.5)
     document.getElementById("validResult").innerHTML="Valid Student";
   else
     document.getElementById("validResult").innerHTML="Invalid Roll/CGPA";
 } else {
   document.getElementById("validResult").innerHTML="Name too short";
 }
}

/* Q14 */
let courses=["Data Mining","AI","Web Programming"];
function renderCourses(){
 let list=document.getElementById("courseList");
 list.innerHTML="";
 for(let i=0;i<courses.length;i++){
   list.innerHTML+="<li>"+courses[i]+"</li>";
 }
}

/* Q15 */
function showTrack(){
 let radio=document.querySelector('input[name="track"]:checked');
 document.getElementById("trackResult").innerHTML=
 radio ? "Selected: "+radio.value : "None";
}

/* Q16 */
function toggleDarkMode(){
 document.body.style.background=
 document.getElementById("darkMode").checked ? "#333" : 
 "linear-gradient(135deg,#667eea,#764ba2)";
}
function toggleChat(){
 document.getElementById("chatBox").style.display=
 document.getElementById("chat").checked ? "block":"none";
}

/* Q17 */
function showNotification(){
 document.getElementById("notification").style.display="block";
}
function showQuickMenu(){
 document.getElementById("quickMenu").style.display="block";
}

/* Q18 */
function updateCharCount(){
 let count=document.getElementById("submission").value.length;
 document.getElementById("charCount").innerText=count;
}
function submitAssignment(){
 let content=document.getElementById("submission").value.trim();
 document.getElementById("submitResult").innerHTML=
 content.length>=50 ? "Submitted Successfully" : "Minimum 50 characters required";
}

/* Q19 */
function showCategory(){
 let value=document.getElementById("category").value;
 document.getElementById("categoryResult").innerHTML=
 value? "Selected: "+value:"Select category";
}

/* Q20 */
function updateSkills(){
 let selected=Array.from(document.getElementById("skills").selectedOptions)
 .map(opt=>opt.value);
 document.getElementById("skillsResult").innerHTML=
 selected.length>0?selected.join(", "):"No skills selected";
}

/* Q21 */
function drawChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.fillStyle="green";
 ctx.fillRect(20,50,200,30);
 ctx.fillText("Data Mining 85%",20,45);
}
function clearChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.clearRect(0,0,canvas.width,canvas.height);
}

/* Q22 */
let count=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElementById("cgpa").value);

 if(name.length>=3){
   if(roll.startsWith("VIT") && cgpa>=7.5)
     document.getElementById("validResult").innerHTML="Valid Student";
   else
     document.getElementById("validResult").innerHTML="Invalid Roll/CGPA";
 } else {
   document.getElementById("validResult").innerHTML="Name too short";
 }
}

/* Q14 */
let courses=["Data Mining","AI","Web Programming"];
function renderCourses(){
 let list=document.getElementById("courseList");
 list.innerHTML="";
 for(let i=0;i<courses.length;i++){
   list.innerHTML+="<li>"+courses[i]+"</li>";
 }
}

/* Q15 */
function showTrack(){
 let radio=document.querySelector('input[name="track"]:checked');
 document.getElementById("trackResult").innerHTML=
 radio ? "Selected: "+radio.value : "None";
}

/* Q16 */
function toggleDarkMode(){
 document.body.style.background=
 document.getElementById("darkMode").checked ? "#333" : 
 "linear-gradient(135deg,#667eea,#764ba2)";
}
function toggleChat(){
 document.getElementById("chatBox").style.display=
 document.getElementById("chat").checked ? "block":"none";
}

/* Q17 */
function showNotification(){
 document.getElementById("notification").style.display="block";
}
function showQuickMenu(){
 document.getElementById("quickMenu").style.display="block";
}

/* Q18 */
function updateCharCount(){
 let count=document.getElementById("submission").value.length;
 document.getElementById("charCount").innerText=count;
}
function submitAssignment(){
 let content=document.getElementById("submission").value.trim();
 document.getElementById("submitResult").innerHTML=
 content.length>=50 ? "Submitted Successfully" : "Minimum 50 characters required";
}

/* Q19 */
function showCategory(){
 let value=document.getElementById("category").value;
 document.getElementById("categoryResult").innerHTML=
 value? "Selected: "+value:"Select category";
}

/* Q20 */
function updateSkills(){
 let selected=Array.from(document.getElementById("skills").selectedOptions)
 .map(opt=>opt.value);
 document.getElementById("skillsResult").innerHTML=
 selected.length>0?selected.join(", "):"No skills selected";
}

/* Q21 */
function drawChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.fillStyle="green";
 ctx.fillRect(20,50,200,30);
 ctx.fillText("Data Mining 85%",20,45);
}
function clearChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.clearRect(0,0,canvas.width,canvas.height);
}

/* Q22 */
let count=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElt=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElt=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElt=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElt=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElt=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour




/* Q13 */vv
function validateStudent(){
 let name=document.getElementById("name").value;
 let roll=document.getElementById("roll").value;
 let cgpa=parseFloat(document.getElementById("cgpa").value);

 if(name.length>=3){
   if(roll.startsWith("VIT") && cgpa>=7.5)
     document.getElementById("validResult").innerHTML="Valid Student";
   else
     document.getElementById("validResult").innerHTML="Invalid Roll/CGPA";
 } else {
   document.getElementById("validResult").innerHTML="Name too short";
 }
}

/* Q14 */
let courses=["Data Mining","AI","Web Programming"];
function renderCourses(){
 let list=document.getElementById("courseList");
 list.innerHTML="";
 for(let i=0;i<courses.length;i++){
   list.innerHTML+="<li>"+courses[i]+"</li>";
 }
}

/* Q15 */
function showTrack(){
 let radio=document.querySelector('input[name="track"]:checked');
 document.getElementById("trackResult").innerHTML=
 radio ? "Selected: "+radio.value : "None";
}

/* Q16 */
function toggleDarkMode(){
 document.body.style.background=
 document.getElementById("darkMode").checked ? "#333" : 
 "linear-gradient(135deg,#667eea,#764ba2)";
}
function toggleChat(){
 document.getElementById("chatBox").style.display=
 document.getElementById("chat").checked ? "block":"none";
}

/* Q17 */
function showNotification(){
 document.getElementById("notification").style.display="block";
}
function showQuickMenu(){
 document.getElementById("quickMenu").style.display="block";
}

/* Q18 */
function updateCharCount(){
 let count=document.getElementById("submission").value.length;
 document.getElementById("charCount").innerText=count;
}
function submitAssignment(){
 let content=document.getElementById("submission").value.trim();
 document.getElementById("submitResult").innerHTML=
 content.length>=50 ? "Submitted Successfully" : "Minimum 50 characters required";
}

/* Q19 */
function showCategory(){
 let value=document.getElementById("category").value;
 document.getElementById("categoryResult").innerHTML=
 value? "Selected: "+value:"Select category";
}

/* Q20 */
function updateSkills(){
 let selected=Array.from(document.getElementById("skills").selectedOptions)
 .map(opt=>opt.value);
 document.getElementById("skillsResult").innerHTML=
 selected.length>0?selected.join(", "):"No skills selected";
}

/* Q21 */
function drawChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.fillStyle="green";
 ctx.fillRect(20,50,200,30);
 ctx.fillText("Data Mining 85%",20,45);
}
function clearChart(){
 let canvas=document.getElementById("chart");
 let ctx=canvas.getContext("2d");
 ctx.clearRect(0,0,canvas.width,canvas.height);
}

/* Q22 */
let count=0;
function enroll(course){
 count++;
 document.getElementById("enrollList").innerHTML+=cour

