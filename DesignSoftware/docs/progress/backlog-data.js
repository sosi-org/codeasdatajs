//Code is Data and Data is Code.
/* ---------------------------------------------------------------------- */
/* Data */

sprints = [1,2,3,4,5,6,7,8,9];
users = ["antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham", "vitaliy", "alicia", "konstantin"];
activeSprint = 8; // sprints[sprints.length-1];
currentAimedVersion = 1; //currentAimedVersion

var mode = "essential";

var w8 = 8;

todo("remove use of @dep argument from @init_updateannotation", "Dont remove the dep argument yet");

t_refroot =
todo(
    "Refector the root for 1-multiple instances, 2-include print settings, 3-include constraints, 4-include tools, 5-include metadata")
    .moreInfo("clone should work + all of this included in state stack")
    //.addedAt("11:00am 5 Nov 2015") //deprecated
    .inProgress("11:00am 5 Nov 2015") //come twith timeEst:  .inProgress("11:00am 5 Nov 2015", 2*TIME_DAYS)
    .isEpic()
    .timeEst(2*TIME_DAYS)
    .setSprint(8)
    .assignTo("antonio")
    //.headline(""); or id?
;

todo("refactor root and wrap it in a new class")
.within(t_refroot)
.assignTo("antonio")
.done("Complete.")
;

todo("include printer settings in the new root-wrapper class")
.within(t_refroot)
.assignTo("antonio")
.done("Complete.")
;

todo("refactor PrintSettings into a separate class similar to the PrinterSettings on  python side")
.within(t_refroot)
.assignTo("antonio")
.done("Complete.")
;
todo("include constraints in the new root-wrapper class")
.within(t_refroot)
.assignTo("antonio")
;
todo("include the tools in the new root-wrapper class")
.within(t_refroot)
.assignTo("antonio")
;
todo("include metadata in the new root-wrapper class (owner,time,version)")
.within(t_refroot)
.assignTo("antonio")
.done("Complete.")
;

todo("A simple linear constraint system.", "Dont remove the dep argument yet")
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
.setSprint(8) //start or stop?
.inProgress("2 Nov 2015  ???")
;

var mode = "less important";

todo("show list of objects selected in the constraints sidebar.");

todo("Checkbox for list of constaints.")
    .moreInfo("high-level description")
    .addedAt("11:00am 5 Nov 2015")
    .deadLine("7 November 2015")
    .setSprint(5);

//todo("BoundingBox");


todo("Ojects cannot be moved when looking from below the bed or below the move plane.")
.assignTo("antonio", "17 Nov 2015")
.done("Complete");

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


todo("Implement SingleShape3D.updateBoundingBox() and SingleShape3D.boundingBox")
.id("shape.bb");

todo("Upgrate (switch) to newest ThreeJS: r73")
.id("threejs.upgrade");

todo("Make the colour hightlight system consistent")
.moreInfo("By changing colour all in one place.")
.assignTo("alican")
.done("completed");

todo("Highlight colour for a reminders (lamp icon)")
.assignTo("alican")
.done("completed");

todo("Calculation of bounding boxes for shapes")
.moreInfo("Analytical formulas for Bounding boxes. ")
.assignTo("vitaliy", "4 November 2015 at 11:12")
.setSprint(8) //make it an active task
.actuallyTook(29*TIME_HOURS)
.done("Succesful. Took 29 hours.")
;


todo("Add node.js deploy scripts on EC2.")
.assignTo("jean", "9 Nov 2015 at 12:00")
.timeEst(8*TIME_HOURS)
.setSprint(8)
//.done("Docker-file is done")
.moreInfo("Docker-file for nodeJS")
.done("Docker-file is done")
;

todo("Install a NodeJS Docker image")
.assignTo("jean", "9 Nov 2015 at 12:00")
.timeEst(8*TIME_HOURS)
.setSprint(8)
.done("docker file is made but not linux script")
;

todo("Slicer: Comand line mode")
.moreInfo("mp5slice.py")
.assignTo("vitaliy", "? November 2015")
.setSprint(7)
//.timeTook(9*TIME_HOURS)
.done("Successful. Took 9 hours.")
.codeReview("sohail", "??Nov 2015", "can use files from any folder. But sould not replace an existing file. Todo: dont use --input=")
;

todo("Refactror the base field for SingleShape3D.")
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


todo("Tests for arc containsPoint.")
.assignTo("vitaliy", "? November 2015")
.setSprint(8)
.actuallyTook(7*TIME_HOURS)
.done("Successful. Important bug discovered. Took 7 hours. Write own checker(similar function to containsPoint, but using different math)")
.moreInfo("Description of the bug discovered: In some cases when two points of arc are the same, " +
    "or point which we are checking equals to points of arc there can be an error. " +
    "But in general this case are very rare")
;

todo("Properties bar sometimes shows exception. It should be redesigned. We need to discuss")
.assignTo("alican", "9 November 2015")
.priority(1000)
.setSprint(8)
.done("completed")
;

todo("CodeReview: The details of the implementations of the magnet should be revised.")
.assignTo("manon", "9 November 2015")
.priority(800)
.setSprint(8)
//.typeCodeReview(reviewer)  //done->test->review
;

todo("Check why collision is not working sometimes (needs debugging).")
.moreInfo("For example: badcollision.1.mp5")
//.assignTo("manon", "9 November 2015").priority(10).setSprint(8)
.assignTo("vitaliy", "17 November 2015")
.setSprint(8).subSprint(8.3)
;

todo("Check why the project name is incorrect after refreshing, but it is known when you save the unnamed.")
.moreInfo("Att. Antonio and Alican")
.assignTo("alican", "9 November 2015")
.priority(10)
.setSprint(8)
.done("completed")
;

todo("Move root.js into src/shapes folder")
.assignTo("antonio", "9 November 2015 21:02")
.setSprint(8)
.done("Complete.")
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
.done("She said she did it. Todo: check.")
;


todo("makeMesh: Find a pattern for making each SingleShape3D in generation.js")
.assignTo("sohail", "10 November 2015")
.setSprint(8)
;

todo("recommendSize: cCamera.recommendSize(point3d): recommends a size for an object at a perticular distance")
.assignTo("sohail", "10 November 2015")
.setSprint(8)
;

recSz =
todo("cCamera.recommendSize(point3d): recommends a size for an object at a perticular distance")
.moreInfo("See a failed attempt at: suggestAbsoluteSizeBasedOnApparentSize()")
.id("autoSize")
.assignTo("sohail", "10 November 2015")
.setSprint(8)
;

todo("resize Arrows dynamically based on camera location. (See )")
.basedOn(recSz) //getTask("autoSize")
.assignTo("sohail", "10 November 2015")
.setSprint(8)
;

todo("Timing of rendering (Render request)") .id("timing:render")
.setSprint(8)
;

todo("Timing of updateScene (update meshes)")   .id("timing:updateMeshFromShape_recursive")
.after(getTask("timing:render"))
.setSprint(8) //exclusive
;

todo("Timing of preparePhys")   .id("timing:physprepare")
.after(getTask("timing:updateMeshFromShape_recursive"))
.setSprint(8)
.assignTo("sohail") //exclusive
;

todo("Camera: RMB moves according to exact mouse movements")
.assignTo("sohail") //exclusive
;

//dont define label / tag

todo("clipboard: copy mp5")
.assignTo("sohail")
;

todo("camera: re-test upright")
.assignTo("sohail")
;

todo("camera: go to target despite interruption during animation")
.assignTo("sohail")
;

todo("camera: shift temporarily to side view")
.assignTo("sohail")
.setSprint(9)
;

todo("animation: buttons  (replay, play, rewind, save)")
.assignTo("sohail")
.setSprint(8)
;

todo("stream: toggle stream camera (as if twitch). tick: exact stream")
.setVersion(2)
;

todo("selectionmesh: separate create from update")
.setSprint(8)
.assignTo("sohail") //exclusive
;

todo("python server must use REST API")
.isEpic()
.priority(100)
.setSprint(8)
//.assignTo("sohail") Jean? Vitaliy? (Constantin? Ali?)
.assignTo("konstantin")
//.tightlyCoupledTo(getTask(****))
.inProgress("Monday 16 November 2015")
.moreInfo("Discussion in progress. almost final.")
;


todo("j2js should be replaced with asDict")
.setVersion(1)
.inProgress()
;

todo("Each Shape should have .asDict()")
.setVersion(1)
.priority(100)
.assignTo("patrick")
.id("getdict")
.done("complete")
.setSprint(8) //.setSprint(8.2)
.subSprint(8.2)
.isEpic() //Otherwise, there will be errors when we call .within(...)
;

todo("Unit Tests for everything")
.isEpic()
;


todo("CSG: Fix bugs about subtraction")
.priority(500)
.setSprint(8)
.assignTo("vitaliy")
.id("CSG-sub")
.moreInfo("The bug was not in CSG, but in duplicationSelected(). " +
    "The meshes of new obj was not cloned, but was referring to the original meshes. The problem was there.")
.actuallyTook(15*TIME_HOURS)
.done("complete")
;


todo("Write a new copy/clone using shapeTree.getDict() and shapeFactory(). Tested it.")
.setSprint(8)
.assignTo("vitaliy")
.done("complete")
.actuallyTook(7*TIME_HOURS)
;






todo("Remove object sometimes leaves the boundig box. In such cases, the Replay breaks.")
.priority(500)
.setSprint(8)
.assignTo("sohail")
;

todo("Replay: the replay cannot be stopped. If something breaks during the replay the exception should be caught.")
.assignTo("jean")
;

todo("Replay: the replay stop means Fast forward to end state.")
.assignTo("jean")
;

todo("Grid: snap to sizes 2x and x/2 while resizing.");


todo("getdict: shape.getDict() for 4 primitives")
//automatically add as a subtask? : .within()
;

todo("getdict: shapeFactory()")
.assignTo("patrick")
.done("complete")
.setSprint(8)
.subSprint(8.2)
.within(getTask("getdict"))  //get task can check the full title too
//.after(getTask("getdict:...")
;



todo("getdict: unittest: x=string -> .decode -> .encode -> .equalsto(x)")
.assignTo("patrick")
.setSprint(8)
.subSprint(8.2)
.within(getTask("getdict"))
;

todo("getdict: change 'colour' to 'displaycolor'")
.assignTo("patrick")
.done("complete")
.setSprint(8).subSprint(8.2)
.within(getTask("getdict"))
;



todo("We don't want the socket.io to affect the performance at all. Everything should be done in a setTimeout()")
.setSprint(w8)
.priority(200)
;


todo("Use the right pattern for notifying AngularJS (Observer pattern?).")
.assignTo("alican")
.setSprint(8)
.isEpic()
.id("Angular-trigger")
.done("completed")
;

todo("The simple callback pattern for notifying AngularJS. Needs code review")
.moreInfo()
.assignTo("alican")
.setSprint(8)
.inProgress()
.within(getTask("Angular-trigger"))
//.done("report", "when")
//.timeTook()
;

todo("Study AngularJS 2.0")
//.isReading() //educaitonal
.setSprint(w8)
;

todo("Study OT")
//.isReading() //educaitonal
.setSprint(w8)
.priority(100);

//CSG bugs
todo("CSG centerPoint should not depend on ThreeJS/Mesh")
.setSprint(w8)
;

todo("CSG: If MAXSCENEDEP is surpassed, an exception show be generated.")
.setSprint(w8)
;

todo("Use exceptions handing for impossible movements becasue of constriants.")
.setSprint(w8)
;

todo("Check if isSingleShape() is logically the opposite of isTree(). Refactor: mutually exclusive categories.")
.setSprint(w8)
;



todo("Hierarchy full revision and refactoring.")
.after(t_refroot)
.moreInfo("temp_originalRoot (used to be called: tempRoot), etc.")
//.sprint(???)  //plan for sprint.  plan for user-sequence. plan for CPM.
.setSprint(w8)
;

todo("Hierarchy full revision and refactoring.");

todo("Separate the ShapeTree into 3 subclasses: Union, Intersection, Subtraction")
.setSprint(w8)
;

//todo: consistency warning: an .inProgress() task has no .timeEst()
//todo: date specified in .inProgress is not in the right format




todo("disallow subtraction if more than two objects are subtracted.")
.moreInfo("Assert this everywhere.")
.moreInfo("Use alert to limit user. (Similar to subtration without intersection and constraint)")
.setSprint(w8)
;

todo("Collision Detection doesnt work on subtracted objects, sometimes! Involves rotation, CSG, etc.")
.isBug() //.isIssue() //is a problem or is a bug
.setSprint(w8)
;

todo("New annotation class: Annotations should be according to the orientation (angle) of the object")
.assignTo("antonio")
.setSprint(w8)
;


todo("SelectionMesh should be in a separate class, a cSelection class maybe. As a member of the selection class?")
.setSprint(w8)
;

todo("Conflict detection System: with indicator")
.isEpic()
.id("conflict-detect")
.setSprint(w8)
;

todo("Conflict detection function(). Uses a hash/checksum code")
.within( getTask("conflict-detect") )
.setSprint(w8)
;

todo("Implement the approximate hash function between to shapes (for conflicts,etc)")
.setSprint(w8)
;
todo("Implement the equals function for shapes")
.setSprint(w8)
;

todo("Implement the almostequal function for shapes (given tolerance)")
.setSprint(w8)
;

todo("Read the almost equal link for floating point comparisons")
.setSprint(w8)
;

todo("Add timestamp to all shapes.")
.setSprint(w8)
;




todo("Conflict indicator on top of screen (near the *LIVE logo). Should quickly come and go.")
.within( getTask("conflict-detect") )
.setSprint(w8)
;


todo("Mouse exit issue: the object is unselected. But if not, it causes forgetting the state.")
.setSprint(w8)
;

todo("Initial delay: waiting for NoeJS")
.setSprint(w8)
;

todo("UnitTests for new Shape types (for plugin).")
.setSprint(w8)
;


todo("New environment plugins should be added to the UI options")
.assignTo("alican")
.setSprint(w8)
;


todo("New scene. Also check with the one used before the Sync")
.assignTo("manon") //Speak to Sohail fo rmore inforatiom. 
//.addedBy("sohail")
.setSprint(w8)
;

todo("Drag&Drop from screenshot-preview. New scene when drop from a png.")
.setSprint(w8)
;

todo("updateScene from the queue")
.setSprint(w8)
;

todo("The new shape should be dragged while mouse down.")
.setSprint(w8)
;

todo("How to find out if the mouse button is down.")
.setSprint(w8)
;

todo("Make all buttons flat: the <a></a> part should include all of the icon.")
.setSprint(w8)
.priority(100)
.assignTo("alican")
;

todo("Add note (comment) on each shape. (in mp5 getDict() )")
.setSprint(w8)
;
todo("Right click: adds a note/comment. + Timestamp (& person) of that note.")
.setSprint(w8)
;

todo("Add note to coordinates. (After the ref point feature)")
.setVersion(2)
;

todo("Open and decompress the contents of a Solidworks file.")
.assignTo("sohail")
.setSprint(w8)
;

todo("object creation Api (high level functions for Api.* ): used for tests.")
.moreInfo("Api.makeCube() or Api.add(new Cube())??")
.setSprint(w8)
;

todo("A dict comparison: Compares all the float numbers with a given error for each quantity. Or: It calculates the sum of squared errors.")
.setSprint(w8)
//.note("Needed for conflict detection in collaboration")
.moreInfo("Needed for conflict detection in collaboration")
;


todo("Once again look into .obj, .3mf")
.setSprint(w8)
;

todo("Screenshot to show the inner part of the screen. ")
.setSprint(w8)
;

todo("Slice one slice: part 1: slice planes")
.setSprint(w8)
;

todo("Material palette choses the whole printer settings. + thickness, etc. + colour, etc.")
.setSprint(w8)
.priority(100) //force!
;

todo("Printer settings should include extrusion withth. But as a sibling-subclass of the older one (both cluient and server).")
.setSprint(w8)
;

todo("Sepearete material: for version 2. (layers, separate, material regions)")
.setSprint(w8)
;

todo("Screenshot should be updated without flicker. ")
.setSprint(w8)
;

todo("Right mouse button: Move the bed exactly according to the movements of the mouse.")
.setSprint(w8)
.priority(30)
;

todo("Prevent size Zero (use Constraint Exceptions)")
//.definitelyAtVersion1()
.setSprint(w8)
.priority(40)
;



todo("Node.js 'run' script (not the dockerfile)")
.assignTo("jean")
.setSprint(w8)
;

todo("Slicer ignores subtractions")
//.addedAt is deprecated
// addedAt 17 Nov 2015
.assignTo("orial")
.setSprint(w8)
;


todo("Slicer: Identify cause of moles")
.setVersion(2)
.setSprint(w8)
;

todo("Slicer: tip of the cone is a disaster.")
.setSprint(w8)
;

todo("Loading socketio-related .js file takes forever. It should be loaded in parallel.")
.setSprint(w8)
.subSprint(8.3)
;

todo("Make bed-aoiding constranit optional")
.setSprint(w8).subSprint(8.3)
;

todo("UI reorganise (tree)")
.setSprint(w8).subSprint(8.3)
.inProgress()
;

todo("UI prototype by Vanea")
.setSprint(w8).subSprint(8.3)
;

todo("Finalising the UI layout (home screen).")
.setSprint(w8).subSprint(8.3)
;

todo("UI layout of buttons.")
.setSprint(w8)
;

todo("Design of buttons: Sketch (and indicators) (and layers)")
.setSprint(w8).subSprint(8.3)
;

todo("Design of buttons: finalise")
.setSprint(w8).subSprint(8.3)
;




todo("Chat UI theme (CSS).")
.setSprint(w8)
;

todo("Design of UI using CSS.")
.setSprint(w8)
;

todo("Making features separate and possible to disable: Coolab, Theme, view, edit, UI, no tools, custom shapes, etc. To make it possible to have very lightweight versions")
;

todo("rename update.js into multiple files.")
.setSprint(w8)
;

todo("redo the whole startup (startup levels, cache, etc).")
.setSprint(w8)
;

todo("Django: expiry time for files, urls")
.setSprint(w8)
;

todo("Django: customising: username, themes, ip address, (what else?)")
.setSprint(w8)
;

todo("Multiple server automatically. Also able to synchronise them (replicate). Automatic spawn of docker instances, etc.")
.setVersion(2); //or 3!

todo("Bounding-box algorithm using implicit.")
.priority(500)
.assignTo("vitaliy")
.setSprint(w8)
;

todo("Find another UnitTest framework: requirement: ?????")
.setSprint(w8)
;



// short meeting: 17 Nov 2015

todo("Somtimes the designer freezes")
.setSprint(w8)
;

todo("view.html: later it will be used for two designer windows.")
.setSprint(w8)
;

todo("make view.html an angularJS directive (or Django component).")
.setSprint(w8)
;

todo("A second separate server software using Django (3 softwares: slicer, django-slicer, django web server, js-client)")
.setSprint(w8)
;

todo("Socket.io: What heppenswhen the NodeJS is not available")
.setSprint(w8)
;

todo("Socket.io: load delay should not delay the loading. It should be completely asynchronised. NodeJS can start after init.js and main.js")
.setSprint(w8)
;

todo("Must run only on Chrome")
.setSprint(w8)
;

todo("Sometimes non-chrome browsers are not detected.")
.setSprint(w8)
;

todo("Try Safari and FireFox JS.")
.setSprint(w8)
;

todo("If not Chrome, redirect to Chrome download page")
.setSprint(w8)
;

todo("Camera solution for rotating around the selected object (double click, etc).");

todo("Camera: rotation center should be separated from the camera's target: Refactor: getTarget() and getRotaationCenter() + setters. Completely separate. ");

todo("New camera button: ??")
.setSprint(w8)
;

todo("Camera button: Orthographic button")
;

todo("Camera in style of Catia")
;

todo("Camera button 'image' updae according to the next state")
.setSprint(w8)
;

todo("reticle (version 2)")
;

todo("Make the camera's 'b' animated")
.setSprint(w8)
;

todo("Camera's temporary rotate key (B) should make the camera orthographic")
.setSprint(w8)
;


todo("Bring back the primitives")
.setSprint(w8)
.priority(100)
;

todo("Make object properties (info) look flat (like ThreeJS editor)")
.setSprint(w8)
;


todo("object properties (info): rewrite from scratch. The logic is just awfull. ")
.setSprint(w8)
.priority(100)
;

todo("object properties (info): definitely should not update the object properties after each key press /change. Only after an actual change (Enter, tab/losing focus, etc) ")
.setSprint(w8)
.priority(100)
;


todo("Ortho - to perspective animation (smooth transition)")
//.setSprint(w8)
;

todo("Camera animation (transition), if interrupted, should not affect the target state (i.e. 22.5+22.5 degress).")
.setSprint(w8)
;

todo("It is difficult to move behind an object")
;

todo("Occluded annotaions: It is difficult to move an object inside another object. Solutiuons: 1,2,3")
//.setSprint(w8)
;

todo("Rename AnnotDots to ControlPoints")
.setSprint(w8)
;

//todo("Rename Annotations to MaipulationConsotrlPoints");

todo("Rotation of Shapes must not use ThreeJS")
.setSprint(w8)
;


//todo("Camera: A button to turn behind the object : 180 deg.);
todo("Camera: while temporary 180 deg pressed down, you still can edit as ususal. All mouse buttons should work.")
//.setSprint(w8)
;


todo("Camera: 'turn toward' function (method) & buttoon (changes the target point to the selected object)")
.setSprint(w8)
;
todo("Camera: set rotation point: function (method) & button ")
.setSprint(w8)
;

todo("Moving an object up is difficult.")
.setSprint(w8)
.priority(100)
;

todo("Set the default annotation type to arrows.")
.setSprint(w8)
;

todo("Allow two annotations at the same time.")
.setSprint(w8)
;

todo("Annotaiotns that are according to shapes orientation, and not Bounding Boxes.")
.setSprint(w8)
;

todo("New shape: cone with top cut.")
.setSprint(9)
;

todo("New shape: free-form cube.")
.setSprint(9)
;

todo("New shape: quaternion.")
//version(2)
;

todo("New shape: free 3-vectors (parallelogaram).")
//version 2
;

todo("Shape.getMinimalFeatures() . Can be ax,ay,ax   or can ebe Quaternion, or can be Free-3-vectors, or can be custom parameter. Use this in Shape Properties")
.setSprint(w8)
.priority(50)
;


todo("copy & paste using the real clipboard")
.setSprint(8)
.priority(50)
;


todo("New shape: empty & cut cone: Outersize-bottom, outersize-top, thickness")
//version 2
;

todo("Slicer: subtraction does not work")
.setSprint(w8)
.priority(50)
;


todo("Avoid using TreeDeepCopy, using getDict() instead")
.setSprint(w8)
.assignTo("vitaliy")
;

todo("Hash using getDict()")
.setSprint(w8)
.priority(30)
;

todo("Magnet : refactor 'norm' to distance")
.setSprint(w8)
;

todo("Conflict of selection during collaboration: ...")
.setSprint(w8)
;


todo("Indicator of collaboration: collaboration mode")
.setSprint(w8)
;

todo("Indicator of connection (separate from collaboration)")
.setSprint(w8)
;

todo("Indicator of constraints. Includes: checkbox for bed constraint")
.setSprint(w8)
;

todo("The issue of group selected objects in Api & Action: when applying the bed constraint. currentMeshes")
.setSprint(w8)
.priority(100)
;

todo("Refactor the bed constraint: fix, throw, ... . In the same form of other constaints. i.e. apply()")
.setSprint(w8)
;

todo("Refactor the zero-size as a constraint? Or (and!) throw an excedption when a shape is resized to too small.")
.setSprint(w8)
;


todo("refactor the currentMeshes into the currentShapes")
.setSprint(w8)
;

todo("Enforce the logic of separation from meshes, in currentShapes, Api, Action, etc.  Shapes, Dict()s, Meshes, etc.")
.setSprint(w8)
;

todo("Decide about the minimalistic align constraints.")
.setSprint(w8)
;

todo("High-level contraint classes (with their .getDict ).")
.setSprint(w8)
;

todo("UI: checkbox: optional bed contstraint (KKT-type constraint, with FIX and Exception)")
.setSprint(w8)
;


todo("Use exceptions everywhere")
.setSprint(w8)
;

todo("A cSelection class")
.setSprint(w8)
;

todo("Untangle init-annot & udate-annot into three dunctions: change selectedMesh, change selection, computer BoundingBox, update the Annotation object")
.setSprint(w8)
.priority(50) //.panic()! .concern()!
;

todo("Second annotation 'visualisation', for second user (semi-transparent + different colour)")
.setSprint(w8)
;

todo("Initial camera size should be moved into the configuration object + the atmosphere + the skin/theme. For fine-tuning the UX + for themes.")
.setSprint(w8)
;

todo("Glow effect") //may need upgrading  ThreeJS
.assignTo("sohail")
.setSprint(w8)
;

todo("Occluded annotaions: Make object before the occluded annotations semi transparent. (hide all object on my way to touch)")
.setSprint(w8)
;

todo("Occluded annotaions: Glow or overlay. ")
//.setSprint(w8)
;

todo("Occluded annotaions: Priority of their clickables (pointables). ")
//.setSprint(w8) //not sure about the priority.  
//not veriosn 1!
;

todo("Occluded annotaions: a feature like Z-order (try)")
.setSprint(w8)
;

todo("Occluded annotaions: allowing the user to make one object semi transparent. Or all others.")
;

todo("write the updateFromDict() function")
.priority(500)
.assignTo("patrick")
;
//todo("rename shapeFactory() to createFromDict()")
//;

todo("Objects that are complex crash the designer")
.priority(200)
.setSprint(w8)
;

todo("The renderer resizing issue: change it back.")
.priority(20)
.assignTo("sohail")
.setSprint(w8)
;

todo("Ratio bug: The camera loses the aspect ratio. It currently can be solved using preessing the 'l' key twice. First, only identify why and where it happens.")
.assignTo("antonio")
.setSprint(w8)
;

todo("Hierarchy bug 1")
.setSprint(w8)
;


todo("Hierarchy bug 2")
.setSprint(w8)
;

todo("Hierarchy bug 3")
.setSprint(w8)
;

todo("Hierarchy: refactor the cModel (cRoot) for the hierarchy temp thing. cModel.switchToTemp(branch). cModel.switchBackToRoot().  most of the calls to getRoot() will be calls to getCurrentRoot(). ")
.setSprint(w8)
;

todo("Unit testing the collabotation/server (details please from Manon/Jean)")
.setSprint(w8)
;


todo("Issue about 'save'ing the collaborative work. (?) (details please)")
.setSprint(w8)
;

todo("Rotation: write a rotate that is not based on threejs.")
.setSprint(w8)
;


todo("The Shape Properties box should use a function called Shape.getMinimalFeatures() to extract which parmaeters is hould show. It returns a list of paramters. Each parameter is {name:'length',units:'mm',type:'real'} and these strings are shown ins the propeties box.")
.setSprint(w8)
;

todo("The Shape Properties box should look flat, like THreeJS editor")
.setSprint(w8)
;

todo("Annotaitons of a group selection should be different to the single-shape selection. The former uses bounding boxes and the latter uses free-form 3-vector parallelogram as the bounding box..")
.setSprint(w8)
;


todo("A Sims-style annotation box on top of objects that need to be highlighted somehow. It will be used in 1-showing the selections of other users, notifying objects that have issues/reminders, etc.")
.setSprint(w8)
;


todo("A two windows demo")
.setSprint(w8)
;

todo("A view-only app. + Select project. (no mouse)")
.setSprint(w8)
;

todo("A view-only mode. The use can still rorate the camera.")
.setSprint(w8)
;

todo("updateScene is very inefficient and has increadible redundancy.")
.setSprint(w8)
;

todo("Use coding standards of JS Hint")
.setSprint(w8)
;

todo("Use minification from ...");

todo("Read and use AngularJS's recommended practices")
.setSprint(w8)
;

todo("Some actions change sleection. Bring the change of selection from the actual operations.")
.setSprint(w8)
;

todo("CSG changes selection. bring the change of selection from the actual operations. (do after disentangling the initAnnot_update function)")
.setSprint(w8)
;

todo("Camera: getDict()!")
.assignTo("antonio")
.setSprint(w8)
;

todo("Camera should be able to be transferred to other users.")
;

todo("Change in Printer settings should be transferred between the collaborative users. (Action)")
.setSprint(w8)
;

todo("Testable Api methods. Able to use as a script.");

todo("Other than root state, camera, printer settings, selection, etc should be shared.")
.setSprint(w8)
;

todo("Refactor: Action should be applied to cModel (also check the Api)")
.setSprint(w8)
;

todo("Locally, the action is done in a Queue, in the same way as remotely.")
.setSprint(w8)
;

todo("rx.js")
//.setSprint(w8)
;


todo("A fast CSG algorithm")
//.setSprint(w8)
;

todo("Load object: a mini browser")
.setSprint(w8)
;

todo("Note/comment: a text added to each shape. It is a dicitonary with key-key-value: timestamp, user, text. In fact: user, (test,timestamp)")
//add: where? where = ip address, which compueer, (not GPS, etc)
.setSprint(w8)
;

todo("Not/comment on a 3d point in space: refpoints")
//ver2?
;

todo("Ref-points")
;

todo("Ali: atmosphere button should get automatrically include all the choices.")
.setSprint(w8)
.priority(100)
;

todo("Print wysiwyg mode: As a new thee. + real colour of objects + their material.")
.setSprint(w8)
;

todo("Show the bed only in the Wysiwyg (print preview) mode.")
.setSprint(w8)
;

todo("Show the grid only in the Wysiwyg (print preview) mode!")
.setSprint(w8)
;

todo("The username in beginning is null?")
.setSprint(w8)
.priority(100)
;


todo("Include getDict() in state stack (undo/redo).")
.setSprint(w8)
;

todo("Use the getDict() in the Action s")
.setSprint(w8)
;

todo("Use the 'new shape' function as an Api function. (refactor)")
.setSprint(w8)
;

todo("Automatic check (test) of correspondence between the Api functions and the Actions.")
.setSprint(w8)
;

todo("Maximum depth should be an exception, not an if")
.priority(50)
.assignTo("sohail")
.setSprint(w8)
;


todo("restructure the folders. DesignSoftware should not contain the server stuff. The src/webgl should be renamed. etc.")
.moreInfo("Also see: http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript")
.setSprint(w8)
;

todo("Check Jasmine, protractortest.org, karma-runner, ")
.setSprint(w8)
;


todo("Dark blue wireframe theme (Avengers)")
.setSprint(w8)
;



todo("Search in public objects in profiles: by object names, is designed, is collaborated")
;

todo("List of objects in profiles of each person")
;


todo("Searching people. By: username, name, ") //sarch on peopepl at least
.priority(100)
.setSprint(w8)
;


todo("Collection of objects (favourite objects of each user)")
.setVersion(2)
;

todo("Display of tree of versions by owners. ") //should we use "git"?
.setVersion(2)
;

todo("Followers, visitors, ")
//
;

todo("Collecting statistics: about button usage.")
//.setSprint(w8)
;


todo("How many people are watching live: in web view")
.setSprint(w8) //high priority
;

todo("How many visited this profile, likes, cheers, ")
.moreInfo("We use google analytics for now.")
;

todo("Current people present (watching) in the room: list in the sidebar. Watchers + Collaborators")
.setSprint(w8)
;


todo("By default, you are public. A random URL is created. renamable.")
.setSprint(w8)
;

todo("Chat: you are public without logging in?")
.setSprint(w8)
;

todo("You may watch wihout chatting, becasue chatting requires login")
.setSprint(w8)
;

//you are on main page
//designing no barrier
//watch: no barrier
//collaborate (to another person's) or chat: you need login
//collaborating wihtout login bu t with sharing URL with them. ---> invite --> needs login.

//If I am not loggiedin, I can share my URL. I will be public. I can decide not to be public. I can be private and share my URL with my Grandmother. This does not depend if I am logged in or not loged in.
//Invite for collaboration: invite-only.  // ---> speak to M&J.

//Invite button: 2 types: link , username: two ways.
//They ask for collaboration.
//make the link no more coollab-able. or not watch-able.



todo("Show avtar of the one who selected")
.priority(50)
//needed for selection, undo notification, etc
.setSprint(w8)
;


todo("Avatars for users: Use an existing Api. Integrat or use avatars of https://en.gravatar.com/")
.setSprint(w8)
;



todo("Ping from server for latenccy of each user. (every 5 minute). Show the latency for each user: ")
.setSprint(w8)
.priority(100)
;
//you have to wait

todo("Apply a delay for test (stress test). + Queue. To debug & test conflicts we need to create conflict.")
.setSprint(w8)
.priority(40)
;


/*

* roll back the changes if (it is reealed that ) somebody else was on it before you.
delay before selecting
delay after selecting  ---> based ont eh measured latency.
base on time (latest change).
based on time: selection belongs to the earliest "selector" which is still selecting. (when released, should the other person select again?)
//aperson may select everything and leae the room: a timeout 1-2 minutes.

You are faster:
- network latency
- practice session for collaboation
*/


todo("Create new primitives (new version)");


//todo("Add another primitive: comming soon. Make your object primitive. Other primites.");


todo("An origanic shape: comming soon (make it gray, almost invisible)")
.setSprint(w8)
.priority(100)
;


todo("Make your object primitive.")
.setSprint(w8)
.priority(5)
;

todo("Comming soon icon: add constraint")
.setSprint(w8)
.priority(5)
;

todo("Comming soon icon: 1 ...")
.setSprint(w8)
.priority(5)
;

todo("Comming soon icon: 2 ...")
.setSprint(w8)
.priority(5)
;
/*
Palette
Material regions
Support
Slicer
*/


//todo("Support by user: requires a differnt material")
//;


todo("Choose printer: printers 2,3,4: commig soon")
.setSprint(w8)
.priority(5)
;
/*

*/



todo("The mesh of the CSG should have random colour") //separate colour
.setSprint(w8)
;

todo("The shapetree object should have a separate display-color from its subclasses")
.setSprint(w8)
;

todo("Atmosphere: per-clock: change of lightness, once per hour")
.setSprint(w8)
;

todo("Theme is separate to Atmosphere")
.setSprint(w8)
;

todo("Theme: sets all [default] materials. All constants should be taken from this. Even sizes.")
.setSprint(w8)
;

todo("A \"theme\": for print preview. Sets all materials.")
.setSprint(w8)
;

todo("A function that changes all materials (for print preview andthee)")
.setSprint(w8)
;

todo("Preview mode: tickbox. Affects: Menues, Collaboration, Material, Reminders, sizes of menues, Atmosphere, (maybe: collaboration)")
.setSprint(w8)
;


todo("Brittle (Support) printer setting preset")
//.setSprint(w8)
;

todo("Fast, low z=0.2 print preset")
.setSprint(w8)
;


todo("Colour picker style should change to a flat design. This design looks too similar to another web app.")
.setSprint(w8)
;


todo("Print issues is not correctly updated after aplying physics engine.")
.setSprint(w8)
;


todo("start the prepare physics after CSG operations. (or with a 500msec delay (refactor period) from the last CSG operation)")
.setSprint(w8)
;

todo("Use camera animtaion on usual camera movements (movements using mouse)")
.setSprint(w8)
;


todo("Collab: Use AngularJS data binding instead of getElementById. Uncaught TypeError: Cannot set property 'innerHTML' of null. stream.js:198. Also: Uncaught TypeError: Cannot read property 'style' of null. stream.js:138")
.assignTo("jean")
.assignTo("alican")
.setSprint(w8)
.priority(100)
;


todo("Change the appearance of the camera buttons to a simpler design")
.setSprint(w8)
;


todo("Embedding script: See togetherJS homepage")
//.version(2)
;

todo("Clicking should create bubbles (to visualise clicks in collaboration mode). (Also for keyboard: separate task)")
//.setSprint(w8)
;

todo("Clicking on Hierarcy adds to pointableMeshes")
.setSprint(w8)
;


todo("Rewrite the hierarchy. After refactoring the cRoot, getDict(), shapeFactory(), etc")
.setSprint(w8)
;


todo("Speak to Mario about the best practices for the reusable clicker button")
;

todo("A clicker button with a fixed tolerance. The tolerance should not change by scaling.")
;

todo("Rejection constraint: ax+by+cz+d >=0 . For example tolerance >= 0.01mm, size.x > 0.2mm, etc")
.setSprint(w8)
;

todo("Constraint categories: hard.autofix, hard.reject, soft.remind, ... (also: grid/snap forces)")
;


todo("Initialise the buttons of environment setting according to the globalEnvrnState.properties (AngularJS)")
.setSprint(w8)
.assignTo("alican")
;


todo("Changing object annotations from menu should not unselect the object (AngularJS)")
.setSprint(w8)
;




todo("Unselect does not work well sometimes")
.setSprint(w8)
;


todo("Errors (console) when collaboration is not used.")
.setSprint(w8)
;


todo("Replay: buttons: rewind, pause, exit.")
.setSprint(w8)
;


todo("Indicator: replay. + [R] button")
.setSprint(w8)
;

todo("Indicator: constraint")
.setSprint(w8)
;

todo("Indicator: coollaboration conflict (+ Live icon)")
;



todo("find occurances of graphMesh.position and .scale, and remove them. if used in physJS only, put them in physMeshToShape. Also another function: postPhysiSimulate where it also sets the velocities (after some delay).")
.setSprint(w8)
;

todo("Start preparing the Physi-JS at the right time. Use a delay. Stop (interrupt) the old preparation if a new preparation is started.")
.setSprint(w8)
;


todo("replay buttons on view screen on homepage (view mode).")
.setSprint(w8)
.priority(5)
;


todo("function addSingleMeshes_recursively() : Document. For what purpose should it be called?")
;

todo("Sometimes objects 'move' ! when multiple objects are selected using Control+Click")
.priority(400)
;

todo("Sometimes all of the group is unselected when selected using Control+Click")
.priority(400)
;


todo("Why is mesh used in updateDot? Isn't mesh.position enough?")
;


todo("SelectionBox class")
;

todo("Make BB updates explicit and extract the method out.");


todo("Check again if mesh in initializeMesh = function(mesh) is selectionBox. Also remove the if(mesh) from it.")
;


todo("Slowly find out the separation and relation between selectionBox, the selection class (in Api: Api in design), and the BBAnnotations class.")
;


todo("Uncaught ReferenceError: interfaceCallbackManager is not defined. stream.js:164")
.assignTo("jean");


todo("New tool shows error when no object is selected. Show an alert 'select an object first'")
;


todo("The rotation of the a group of objects is simply incorrect! the locaiton is not rotated. The center of rotation should be a getter function of the selectionBox (or the selection class).")
.priority(800)
.assignTo("vitaliy")
;


todo(" selectionBox should be a class that has an instance only when multiple objects are selected (temporary group). Can be a TemporaryGroupShape, a type of ShapeTree?")
;

todo("(Maybe) selectionBox class: We may need to implement it using a temporary ShapeTree (a fourth type: Group), which preserves the rotation, etc during one annotation session. When we unselect and select again, the rotation AnnotDots (arcs, etc) are reset. But it is fine. MEthod. shapreTree.reflectTheAngle(). Sets the angle to zero and applies it to the children (private method). reflectAll -> size,angle,position.")
;


todo("The mouse navigation,etc sometimes freezes: It seems to happen when we use the 'tool'. It happens when the collisionDet function does not converge.")
.assignTo("manon")
;



todo("Fix the arguments of addToSelection(true); in function setExamine().")
;


todo("The feature 'unselect after a while' should be active only during collaboration");


todo("The 'touch' and 'grab' should not change colour during an annotation [drag] session. Deactivate touchState during the annotation drag.")
;


//Annotations size should be updated by changing the object or camera






// **************************************
// *   Alpha launch urgent todo list    *

todo("remove the 'Partner-key' from github. It should not be accessible to public. It should be moved into the deploy script. The deploy script has to be in github. This key should be read from a file or ENV variable on the EC2 machine.");

todo("What is MD5");



todo("Load menu should show list of thumbnails. Also a mini browser.");
