/*
draft version of a task management system.
A replacement for JIRA!

"Code is data".
*/
/* */
/* ---------------------------------------------------------------------- */
/* Model */
var sprints = [];
var users = [];

assert = function(x, message){
	if(!x){
		if(message)
			console.error(message);
        alert(x +" "+ message);
		throw x;
	}
};


function Backlog(title){
    this.title = title;
    this.attachments = [];
};
Backlog.prototype.moreInfo = function(description){
    this.descr = description;
    return this;
}
Backlog.prototype.addedAt = function(timestamp){
    this.timestamp = timestamp;
    return this;
}
Backlog.prototype.deadLine = function(timestamp){
    //todo: assert valid time
    this.deadline = timestamp;
    return this;
}
Backlog.prototype.done = function(report){
    this.doneReport = report;
    return this;
}
Backlog.prototype.assignTo = function(person, when){
    assert(users.indexOf(person)>-1, "User not valid");
    this.assignedTo = person;
    this.whenAssigned = when;
    if(!when)
        console.log("Warning: Task assigned without assigned time. Task= " + this.title);
    return this;
}

Backlog.prototype.setSprint = function(sprintNumber){
    //this.timemoved to sprint = ... //history?
    assert(sprints.indexOf(sprintNumber)>-1, "sprint number is invalid");
    if(this.sprint)
        console.log("Task moved from sprint "+this.sprint+" to "+sprintNumber);
    //todo: check if it is not an epic.
    this.sprint = sprintNumber;
    return this;
}

Backlog.prototype.getBrief = function(timestamp){
    return this.title + " " + (this.descr?this.descr:"");
}

Backlog.prototype.moreInfoNeeded = function(){
    this.incompleteInformation = true;
    return this;
}
// .why
//Backlog.prototype.why = function(){}
Backlog.prototype.attachInfo = function(text){
    this.attachments.push(text);
    return this;
}

Backlog.prototype.id = function(new_id){
    this.id = new_id;
    return this;
}
Backlog.prototype.toBacklog = function(){
    console.log("Task moved to backlog");
    this.sprint = 0;
    return this;
}
Backlog.prototype.isEpic = function(){
    this.isEpic = true; //Now it can have subtasks
    return this;
}
var TIME_HOURS = 1.0;
var TIME_DAYS = 8.0;
var TIME_MINUTES = 1.0/60.0;

Backlog.prototype.timeEst = function(time){
    this.timeInitialEstimated = time;
    return this;
}

var backlogset=[];
function addToBacklogset(b){
    //Check duplicates
    backlogset.push(b);
}
function todo(title){
    var b = new Backlog(title);
    //var b_id = getUniqueCode();
    //b._setId(b_id);
    addToBacklogset(b);
    return b;
}


/* ---------------------------------------------------------------------- */
/* View */

function formatUser(u){
    if(u)
        return " <b>["+u+"]</b>";
    else
        return null;
}


function print_some( whichones ){
    var ctr=0;
    var totalTime_is_underEstimated=false;
    var totalTime = 0;
    var s1="";
    for(var i=0;i<backlogset.length;i++){
        var b = backlogset[i];
        if(whichones(b)){ //}b.doneReport){
            if(b.doneReport)
                ;
            var ifactive =  ""; // (ctr==0)?" active":"";
                            //(ctr==0)?" panel-heading ":""; //doesnt work
            var ifcontext = (ctr%2==0)? " list-group-item-success":"";
            var time_t = b.timeInitialEstimated==null?"":( "<small>"+ (b.timeInitialEstimated)+"h</small>" );
s1+="<li class=\"list-group-item "+ifactive+ifcontext+"\">"
            //s1 += "<li>";
            s1 += " <b>"+(ctr+1)+".</b> ";
            s1 += b.getBrief() ;
            if(b.assignedTo)
                s1 += formatUser(b.assignedTo); //s1 += " <b>["+b.assignedTo+"]</b>";
            //s1 += time_t;
            s1 += "<span class=\"badge\">"+time_t + "</span>";
            //s1+="</li>";
s1+="</li>";

            //s1 += "<hr/>";
            var dt = b.timeInitialEstimated;
            if(!dt){
                dt=0;
                totalTime_is_underEstimated = true;
            }
            totalTime += dt;
            
            ctr+=1;
        }
    }
    s1 += "";
    return {html:s1, count:ctr, totalTime: totalTime, more: totalTime_is_underEstimated};
    //return ctr;
}

function print_all(){
    var ctr=0;
    //ctr += print_some;
    var r = print_some(  function (b){return b.doneReport;});    
    var e = document.getElementById("DoneTasks");
    e.innerHTML = r.html;

    var r = print_some(  function (b){return (! b.doneReport) && (b.sprint==activeSprint) ;});    
    var e = document.getElementById("ActiveTasks");
    e.innerHTML = r.html;
    var e = document.getElementById("ActiveTasks-time");
    e.innerHTML = r.totalTime+""+(r.more?"+":"");

    var r = print_some(  function (b){return (! b.doneReport) && !(b.sprint==activeSprint);});    
    var e = document.getElementById("BacklogTasks");
    e.innerHTML = r.html;

    return ctr;
}



/* -------------Post process-------------------------------------------------------------*/

function postProcess()
{
    var e;
    print_all("essential");
    var e = document.getElementById("sprintNumber");
    e.innerHTML = ""+activeSprint;
    
    var ut="";
    //ut += "<option>"+"</option>"; //no one
    for(var i in users)
        if(users[i])
            //ut += formatUser(users[i])
            ut += "<option>"+users[i]+"</option>";
    var e = document.getElementById("you");
    e.innerHTML = ut;
    
    var change_to_initial_coice=e.onchange;
    //change_to_initial_coice(); //execute the initial choice
}

/* ---------- */
function onUserChange(){
    var s = document.getElementById("you")
    alert(s.value);
}

/* ---------------------------------------------------------------------- */
/* Data */

sprints = [1,2,3,4,5,6,7,8];
users = ["antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham", "vitaliy"];
activeSprint = sprints[sprints.length-1];

var mode = "essential";

j12=todo("remove use of @dep argument from @init_updateannotation", "Dont remove the dep argument yet");

j14=todo(
    "Refector the root for 1-multiple instances, 2-include print settings, 3-include constraints, 4-include tools, 5-include metadata (owner,time,version)")
    .moreInfo("clone should work + all of this included in state stack")
    .addedAt("11:00am 5 Nov 2015")
    .isEpic()
    .timeEst(2*TIME_DAYS)
    .setSprint(8)
    .assignTo("antonio")
    //.headline(""); or id?
;

j15=todo("A simple linear constraint system.", "Dont remove the dep argument yet")
.assignTo("sohail")
.setSprint(8)
.done("at 2:57, 4th November");
//.addReportDone("Now the user can define any ..."); //Attach a report on a task that is completed.
//spawn another
//.not tested
//.teted
//.parentTask( lookup("m12"))
;

todo("Slicer prints lines instead of Arcs")
.assignTo("orial");

var mode = "less important";

j13=todo("show list of objects selected in the constraints sidebar.");

j14=todo("Checkbox for list of constaints.")
    .moreInfo("high-level description")
    .addedAt("11:00am 5 Nov 2015")
    .deadLine("7 November 2015")
    .setSprint(5);

//todo("BoundingBox");


todo("Ojects cannot be moved when looking from below the bed or below the move plane.");

todo("Proper shadow.").moreInfo("According to a threejs demo ...").assignTo("sohail", "5 Nov 2015").moreInfoNeeded()
.attachInfo("check: http://threejs.org/examples/#webgl_interactive_draggablecubes");

todo("Proper shadow. On all objects. Disable in low-performance mode.");

todo("KKT for constraints").setSprint(7).toBacklog();


todo("Implement Shape3D.updateBoundingBox() and Shape3D.boundingBox").id("shape.bb");

todo("Switch to newest ThreeJS").id("threejs.upgrade");

todo("Make the colour hightlight system consistent").moreInfo("By changing colour all in one place.")
.assignTo("alican");
//.done("on Tuesday");

todo("Highlight colour for a reminders (lamp icon)")
.assignTo("alican");

todo("Calculation of bounding boxes for shapes").moreInfo("Analytical formulas for Bounding boxes.")
.assignTo("vitaliy")
.setSprint(8) //make it an active task
.timeEst(30*TIME_HOURS)
;
