//Code is Data and Data is Code.
/* ---------------------------------------------------------------------- */
/* Data */

sprints = [1,2,3,4,5,6,7,8];
users = ["antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham", "vitaliy", "alicia"];
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


todo("Discuss: Why is function onDocumentMouseWheel(event) commentd?")
//.isDiscussion()
.assignTo("alican", "9 November 2015")
;

todo("Run the designer (setup git, python3, server.py)")
.assignTo("alicia", "10 November 2015")
.setSprint(8)
;
