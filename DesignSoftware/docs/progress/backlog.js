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
    console.log("Task moved from sprint "+this.sprint+" to "+sprintNumber);
    this.sprint = sprintNumber;
    return this;
}

Backlog.prototype.getBrief = function(timestamp){
    return this.title + " " + (this.descr?this.descr:"");
}

Backlog.prototype.moreInfoNeeded = function(){
    //this.incompleteInformation = true;
    return this;
}
// .why
//Backlog.prototype.why = function(){}

Backlog.prototype.id = function(new_id){
    this.id = new_id;
    return this;
}
Backlog.prototype.toBacklog = function(){
    console.log("Task moved to backlog");
    this.sprint = 0;
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

function print_some( whichones ){
    var ctr;
    var s1="";
    for(var i=0;i<backlogset.length;i++){
        var b = backlogset[i];
        if(whichones(b)){ //}b.doneReport){
            ctr+=1;
            if(b.doneReport)
                ;
            s1 = s1.concat( "<li> <b>"+i+".</b> " +b.getBrief() +"</li>");
            s1 += "<hr/>";
        }
    }
    s1 += "";
    return s1;
    //return ctr;
}

function print_all(){
    var ctr=0;
    //ctr += print_some;
    var s = print_some(  function (b){return b.doneReport;});    
    var e = document.getElementById("DoneTasks");
    e.innerHTML = s;

    var s = print_some(  function (b){return false;});    
    var e = document.getElementById("ActiveTasks");
    e.innerHTML = s;

    var s = print_some(  function (b){return ! b.doneReport;});    
    var e = document.getElementById("BacklogTasks");
    e.innerHTML = s;

    return ctr;
}

/* ---------------------------------------------------------------------- */
/* Data */

sprints = [1,2,3,4,5,6,7];
users = ["antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham", "vitaliy"];
activeSprint = sprints[sprints.length-1];

var mode = "essential";

j12=todo("remove use of @dep argument from @init_updateannotation", "Dont remove the dep argument yet");

j14=todo(
    "Refector the root for 1-multiple instances, 2-include print settings, 3-include constraints, 4-include tools, 5-include metadata (owner,time,version)")
    .moreInfo("clone should work + all of this included in state stack")
    .addedAt("11:00am 5 Nov 2015")
    //.headline(""); or id?
;

j15=todo("A simple linear constraint system.", "Dont remove the dep argument yet")
.assignTo("sohail")
.done("at 2:57, 4th November");
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

todo("Proper shadow.").moreInfo("According to a threejs demo ...").assignTo("sohail", "5 Nov 2015").moreInfoNeeded();

todo("Proper shadow. On all objects. Disable in low-performance mode.");

todo("KKT for constraints").setSprint(7).toBacklog();


todo("Implement Shape3D.updateBoundingBox() and Shape3D.boundingBox").id("shape.bb");

/* ---------------------------------------------------------------------------------------------------------  */

print_all("essential");
var e = document.getElementById("sprintNumber");
console.log(e.innerHTML);
e.innerHTML = ""+activeSprint;
