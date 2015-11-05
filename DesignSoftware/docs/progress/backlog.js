/*
draft version
*/
sprints = [1,2,3,4,5,6,7];

function Backlog(title){
    this.title = title;
}
Backlog.prototype.describe(description){
    this.descr = description;
    return this;
}
Backlog.prototype.addedAt(timestamp){
    this.timestamp = timestamp;
    return this;
}
Backlog.prototype.moveToSprint(sprintNumber){
    //this.timemoved to sprint = ... //history?
    assert(sprints.indexOf(sprintNumber)>-1);
    this.sprint = sprintNumber;
    return this;
}

var backlogset=[];
functio addToBacklogset(){
    backlogset.push(b);
    backlogset.push(b);
}
function todo(title){
    //var b_id = getUniqueCode();
    var b = new Backlog(title);
    b._setId(b_id);
    addToBacklogset(b);
}

var mode = "essential";

j12=t("remove use of dep argument from init_updateannotation", "Dont remove the dep argument yet");

j14=todo(
    "Refector the root for 1-multiple instances, 2-include print settings, 3-include constraints, 4-include tools, 5-include metadata (owner,time,version)")
    .descr("clone should work + all of this included in state stack")
    .addedAt("11:00am 5 Nov 2015");


var mode = "less important";

j13=todo("show list of objects selected in constraints sidebar.");
j14=todo("Checkbox for list of constaints.")
    .descr("high-level description")
    .addedAt("11:00am 5 Nov 2015")
    .deadLine("7 November 2015")
    .moveToSprint(5);

print_all("essential");
