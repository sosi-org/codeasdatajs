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
    this.whocan=[];
    this.prequisits = []; // .basedOn(t)
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
Backlog.prototype.assignExclusively = function(person, when){
    this.assignTo(person,when);
    this.whocan.push(person);
    this.exclusively = person; //redundancy
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
Backlog.prototype.subSprint = function(subSprintNumber){
    assert(Math.floor(subSprintNumber) == this.sprint, "Number of the sprint and subsprint dont match");
    this._subSprint = subSprintNumber;
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
    this._id = new_id;
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


//<--- isEpic

Backlog.prototype.basedOn = function(task2){
    assert(task2.getBrief);
    this.prequisits.push(task2);
    return this;
}
Backlog.prototype.after = function(task2){
    this.basedOn(task2);
    //also: ...
    return this;
}
Backlog.prototype.within = function(task2){
    this.for_task = task2; //is constituent of another one
    return this;
}

Backlog.prototype.inProgress = function(whenStarted){
    if(!whenStarted) console.warn("Progress start time not specified");
    this._inprogress = true;
    this._whenstarted = whenStarted;
    assert(this._inprogress);
    //also: ...
    return this;
}


// ************************************

var backlogset=[];

function addToBacklogset(b){
    //Check duplicates
    backlogset.push(b);
}
//backlogset.
getTask = function(taskName){
    for(var i=0;i<backlogset.length;i++){
        if(backlogset[i]._id == taskName)
            return backlogset[i];
        //if(backlogset[i].title == taskName)
        //    return backlogset[i];
    }
    assert(false, "Task with .id(\""+ taskName +"\") not found");
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
s1+="<li class=\"list-group-item "+ifactive+ifcontext+"\"    style=\"padding-top: 0px; padding-bottom: 0px;\" >"
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
    var total_count = 0;
    var ctr=0;
    //ctr += print_some;
    var r = print_some(  function isaccomplished(b){return b.doneReport;});  //inclued irrelaant versions if not done. But don't include past versions and past sprints.  
    var e = document.getElementById("DoneTasks");
    e.innerHTML = r.html;
    total_count += r.count;

    var r = print_some(  function isactive(b){
        var c=
        b._inprogress ||
        ((! b.doneReport) && (b.sprint==activeSprint) && b.isVersionRelevant(currentAimedVersion) );
        return c;
        });
    var e = document.getElementById("ActiveTasks");
    e.innerHTML = r.html;
    total_count += r.count;

    var e = document.getElementById("ActiveTasks-time");
    e.innerHTML = r.totalTime+""+(r.more?"+":"");

    var r = print_some(  function isinbacklog(b){
        var c=
        (!b._inprogress) &&
        (! b.doneReport) && !(b.sprint==activeSprint) && b.isVersionRelevant(currentAimedVersion);
        return c;
    }); //show: (this.timeActuallyTook)
    var e = document.getElementById("BacklogTasks");
    e.innerHTML = r.html;
    total_count += r.count;

    console.log("total shown = "+total_count+" out of "+backlogset.length+ ((total_count != backlogset.length)?"Something went wrong.":""));
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

