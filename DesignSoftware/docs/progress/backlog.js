
function Backlog(title){
    this.title = title;
}
var backlogs=[];
function todo(title){
    //var b_id = getUniqueCode();
    var b = new Backlog(title);
    b._setId(b_id);
    backlogs.push(b);
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
