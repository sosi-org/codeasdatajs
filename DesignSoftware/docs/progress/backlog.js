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
    this.assignedTo = person;
    this.whenAssigned = when;
    if(!when)
        console.log("Warning: Task assigned without assigned time. Task= " + this.title);
    return this;
}

Backlog.prototype.moveToSprint = function(sprintNumber){
    //this.timemoved to sprint = ... //history?
    assert(sprints.indexOf(sprintNumber)>-1);
    this.sprint = sprintNumber;
    return this;
}

Backlog.prototype.getBrief = function(timestamp){
    return this.title + " " + (this.descr?this.descr:"");
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
/* Data */

sprints = [1,2,3,4,5,6,7];
users = "antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham";

var mode = "essential";

j12=todo("remove use of dep argument from init_updateannotation", "Dont remove the dep argument yet");

j14=todo(
    "Refector the root for 1-multiple instances, 2-include print settings, 3-include constraints, 4-include tools, 5-include metadata (owner,time,version)")
    .moreInfo("clone should work + all of this included in state stack")
    .addedAt("11:00am 5 Nov 2015")
    //.headline(""); or id?
;

j15=todo("A simple linear constraint system.", "Dont remove the dep argument yet");
console.log(j15);

j15.assignTo("Sohail");
j15.done("at 4th November");
//spawn another
//.not tested
//.teted
;


var mode = "less important";

j13=todo("show list of objects selected in constraints sidebar.");
j14=todo("Checkbox for list of constaints.")
    .moreInfo("high-level description")
    .addedAt("11:00am 5 Nov 2015")
    .deadLine("7 November 2015")
    .moveToSprint(5);

print_all("essential");

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
