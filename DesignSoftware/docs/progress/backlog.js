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
    assert(sprints.indexOf(sprintNumber)>-1, "sprint number is invalid "+sprintNumber);
    if(this.sprint)
        console.log("Task moved from sprint "+this.sprint+" to "+sprintNumber);
    //todo: check if it is not an epic.
    this.sprint = sprintNumber;
    return this;
}
Backlog.prototype.setVersion = function(versionNumber){
    //Version first assigned, then postponed, etc.
    validVersions=[1,2];
    assert(validVersions.indexOf(versionNumber)>-1, "version number is invalid" + versionNumber);
    if(this.version)
        console.log("Task moved from version "+this.version+" to "+versionNumber);
    this.version = versionNumber;
    return this;
}
Backlog.prototype.isVersionRelevant = function(currentAimedVersion){
return !this.currentAimedVersion || this.currentAimedVersion==currentAimedVersion;
}

//Backlog.prototype.postPone(){
//    adds a separate task and freezes the previous one.
//    When getDescr is done, postponed tasks may refer to their original postponed tasks.
//}

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

Backlog.prototype.timeEst = function(time_hours){
    this.timeInitialEstimated = time_hours;
    return this;
}
Backlog.prototype.actuallyTook = function(time_hours){
    assert(time_hours > 0.0);
    this.timeActuallyTook = time_hours;
    return this;
}
//e.g. 1,2,3,10,100. ._priority: An attribute based on which the tasks are sorted (and the starting times are sequenced/scheduled). priority >100 shown as danger (red)
Backlog.prototype.priority = function(priority_value){
    this._priority = priority_value;
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
            var ifcontext = //"";//(ctr%2==0)? " list-group-item-success":"";
                (b._priority>=100)? "list-group-item-danger":"";
                
                
                /*
                "list-group-item-success"
                "list-group-item-info"
                "list-group-item-warning"
                "list-group-item-danger"
                */

                
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
    var r = print_some(  function (b){return b.doneReport;});  //inclued irrelaant versions if not done. But don't include past versions and past sprints.  
    var e = document.getElementById("DoneTasks");
    e.innerHTML = r.html;

    var r = print_some(  function (b){return (! b.doneReport) && (b.sprint==activeSprint) 
    && b.isVersionRelevant(currentAimedVersion);});    
    var e = document.getElementById("ActiveTasks");
    e.innerHTML = r.html;
    var e = document.getElementById("ActiveTasks-time");
    e.innerHTML = r.totalTime+""+(r.more?"+":"");

    var r = print_some(  function (b){return (! b.doneReport) && !(b.sprint==activeSprint)
    && b.isVersionRelevant(currentAimedVersion)
    ;}); //show: (this.timeActuallyTook)
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
currentAimedVersion = 1; //currentAimedVersion

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
.done("at 2:57, 4th November")
;
//.addReportDone("Now the user can define any ..."); //Attach a report on a task that is completed.
//spawn another
//.not tested
//.teted
//.parentTask( lookup("m12"))
;

todo("Slicer prints lines instead of Arcs")
.assignTo("orial")
.setSprint(8)
;

var mode = "less important";

j13=todo("show list of objects selected in the constraints sidebar.");

j14=todo("Checkbox for list of constaints.")
    .moreInfo("high-level description")
    .addedAt("11:00am 5 Nov 2015")
    .deadLine("7 November 2015")
    .setSprint(5);

//todo("BoundingBox");


todo("Ojects cannot be moved when looking from below the bed or below the move plane.");

todo("Proper shadow.")
.moreInfo("According to a threejs demo ...")
.assignTo("sohail", "5 Nov 2015")
.moreInfoNeeded()
.attachInfo("check: http://threejs.org/examples/#webgl_interactive_draggablecubes");

todo("Proper shadow. On all objects. Disable in low-performance mode.");

todo("KKT for constraints")
//.setSprint(8)
.setVersion(2)
.toBacklog();


todo("Implement Shape3D.updateBoundingBox() and Shape3D.boundingBox")
.id("shape.bb");

todo("Switch to newest ThreeJS")
.id("threejs.upgrade");

todo("Make the colour hightlight system consistent")
.moreInfo("By changing colour all in one place.")
.assignTo("alican");
//.done("on Tuesday");

todo("Highlight colour for a reminders (lamp icon)")
.assignTo("alican");

todo("Calculation of bounding boxes for shapes")
.moreInfo("Analytical formulas for Bounding boxes. For Ellipsoid works fine, there are some bugs in other shapes. Working on it.")
.assignTo("vitaliy", "4 November 2015 at 11:12")
.setSprint(8) //make it an active task
.timeEst(30*TIME_HOURS)
;


todo("Add node.js deploy scripts on EC2")
.assignTo("jean", "9 Nov 2015 at 12:00")
.timeEst(8*TIME_HOURS)
.setSprint(8)
;

todo("Install a NodeJS Docker image")
.assignTo("jean", "9 Nov 2015 at 12:00")
.timeEst(8*TIME_HOURS)
.setSprint(8)
;

todo("Slicer: Comand line mode")
.moreInfo("mp5slice.py")
.assignTo("vitaliy", "? November 2015")
.setSprint(7)
//.timeTook(9*TIME_HOURS)
.done("Successful. Took 9 hours.")
;

todo("Refactror the base field for Shape3D.")
.moreInfo("rotations are simple fields ax ay az")
.assignTo("vitaliy", "? November 2015")
.setSprint(7)
.actuallyTook(13*TIME_HOURS)
.done("Successful. Took 13 hours.")
;

todo("Tests for rotation matrix.")
.assignTo("vitaliy", "? November 2015")
.setSprint(7)
.actuallyTook(6*TIME_HOURS)
.done("Successful. Important bug discovered. Took 6 hours.")
.moreInfo("Description of the bug disovered: If axis is (0, 0, 0) => division by zero. In this case I think we should return diag(1, 1, 1).")
;

todo("Properties bar sometimes shows exception. It should be redesigned. We need to discuss")
.assignTo("alican", "9 November 2015")
.priority(1000)
.setSprint(8)
;

todo("CodeReview: The details of the implementations of the magnet should be revised.")
.assignTo("manon", "9 November 2015")
.priority(800)
.setSprint(8)
//.typeCodeReview(reviewer)  //done->test->review
;

todo("Check why collision is not working sometimes.")
.moreInfo("For example: badcollision.1.mp5")
.assignTo("manon", "9 November 2015")
.priority(10)
.setSprint(8)
;

todo("Check why the project name is incorrect after refreshing, but it is known when you save the unnamed.")
.moreInfo("Att. Antonio and Alican")
.assignTo("alican", "9 November 2015")
.priority(10)
.setSprint(8)
;

todo("Move root.js into src/shapes folder")
.assignTo("antonio", "9 November 2015 21:02")
.setSprint(8)
;

//todo("Rename the 'webgl' folder into '3d'")  // 3d?  designer? three? web?
//.setSprint(8)
//;
