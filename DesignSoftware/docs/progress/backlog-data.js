//Code is Data and Data is Code.
/* ---------------------------------------------------------------------- */
/* Data */

sprints = [1,2,3,4,5,6,7,8,9];
users = ["antonio", "patrick", "orial", "manon", "jean", "sohail", "alican", "hicham", "vitaliy", "alicia", "konstantin"];
activeSprint = 8; // sprints[sprints.length-1];
currentAimedVersion = 1; //currentAimedVersion

var mode = "essential";

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


todo("Implement Shape3D.updateBoundingBox() and Shape3D.boundingBox")
.id("shape.bb");

todo("Upgrate (switch) to newest ThreeJS: r73")
.id("threejs.upgrade");

todo("Make the colour hightlight system consistent")
.moreInfo("By changing colour all in one place.")
.assignTo("alican");
//.done("on Tuesday");

todo("Highlight colour for a reminders (lamp icon)")
.assignTo("alican");

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


todo("makeMesh: Find a pattern for making each Shape3D in generation.js")
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

todo("Timing of updateScene (update meshes)")   .id("timing:updateMesh")
.after(getTask("timing:render"))
.setSprint(8) //exclusive
;

todo("Timing of preparePhys")   .id("timing:physprepare")
.after(getTask("timing:updateMesh"))
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
.moreInfo("makeGroup() -> buildCSGMesh() -> buildCSG() ")
.inProgress()
.isBug()
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
;


todo("Use the right pattern for notifying AngularJS (Observer pattern?).")
.assignTo("alican")
.setSprint(8)
.isEpic()
.inProgress()
.id("Angular-trigger")
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
;

todo("Study OT")
//.isReading() //educaitonal
;

//CSG bugs
todo("CSG centerPoint should not depend on ThreeJS/Mesh");

todo("CSG: If MAXSCENEDEP is surpassed, an exception show be generated.")
;

todo("Use exceptions handing for impossible movements becasue of constriants.");

todo("Check if isShape() is logivally the opposite of isTree()");



todo("Hierarchy full revision and refactoring.")
.after(t_refroot)
.moreInfo("tempRoot, etc.")
//.sprint(???)  //plan for sprint.  plan for user-sequence. plan for CPM.
;

todo("Hierarchy full revision and refactoring.");

todo("Separate the ShapeTree into 3 subclasses: Union, Intersection, Subtraction")
;

//todo: consistency warning: an .inProgress() task has no .timeEst()
//todo: date specified in .inProgress is not in the right format


todo("disallow subtraction if more than two objects are subtracted.")
.moreInfo("Assert this everywhere.")
.moreInfo("Use alert to limit user. (Similar to subtration without intersection and constraint)")
;

todo("Collision Detection doesnt work on subtracted objects, sometimes! Involves rotation, CSG, etc.")
.isBug() //.isIssue() //is a problem or is a bug
;

todo("New annotation class: Annotations should be according to the orientation (angle) of the object")
.assignTo("antonio")
;


todo("SelectionMesh should be in a separate class, a Selection class maybe. As a member of the selection class?")
;

todo("Conflict detection System: with indicator")
.isEpic()
.id("conflict-detect")
;

todo("Conflict detection function(). Uses a hash/checksum code")
.within( getTask("conflict-detect") )
;

todo("Implement the approximate hash function between to shapes (for conflicts,etc)")
;
todo("Implement the equals function for shapes")
;

todo("Add timestamp to all shapes.")
;




todo("Conflict indicator on top of screen (near the *LIVE logo). Should quickly come and go.")
.within( getTask("conflict-detect") )
;


todo("Mouse exit issue: the object is unselected. But if not, it causes forgetting the state.");

todo("Initial delay: waiting for NoeJS");

todo("UnitTests for new Shape types (for plugin).");


todo("New environment plugins should be added to the UI options")
.assignTo("alican");


todo("New scene. Also check with the one used before the Sync")
.assignTo("manon") //Speak to Sohail fo rmore inforatiom. 
//.addedBy("sohail")
;

todo("Drag&Drop from screenshot-preview. New scene when drop from a png.");

todo("updateScene from the queue");

todo("The new shape should be dragged while mouse down.");

todo("How to find out if the mouse button is down.")


todo("Add note (comment) on each shape. (in mp5 getDict() )");
todo("Right click: adds a note/comment. + Timestamp (& person) of that note.");

todo("Add note to coordinates. (After the ref point feature)")
.setVersion(2)
;

todo("Open and decompress the contents of a Solidworks file.")
.assignTo("sohail")
;

todo("object creation Api (high level functions for Api.* ): used for tests.")
.moreInfo("Api.makeCube() or Api.add(new Cube())??")
;

todo("A dict comparison: Compares all the float numbers with a given error for each quantity. Or: It calculates the sum of squared errors.")
.setSprint(8)
//.note("Needed for conflict detection in collaboration")
.moreInfo("Needed for conflict detection in collaboration")
;


todo("Once again look into .obj, .3mf")
;

todo("Screenshot shows inner part of the screen. ")
;

todo("Screenshot should be **. ")
;

todo("Right mouse button: Move the bed exactly according to the movements of the mouse.")
;

todo("Prevent size Zero (use Constraint Exceptions)")
//.definitelyAtVersion1()
;


todo("Node.js 'run' script (not the dockerfile)")
.assignTo("jean")
;

todo("Slicer ignores subtractions")
//.addedAt is deprecated
// addedAt 17 Nov 2015
.assignTo("orial")
;


todo("Slicer: Identify cause of moles")
.setVersion(2)
;

todo("Slicer: tip of the cone is a disaster.")
;

todo("Loading socketio-related .js file takes forever. It should be loaded in parallel.")
.setSprint(8)
.subSprint(8.3)
;

todo("Make bed-aoiding constranit optional")
;

todo("UI reorganise (tree)")
;

todo("UI prototype by Vanea")
;

todo("Finalising the UI layout (gome screen).")
;

todo("UI layout of buttons.")
;

todo("Design of buttons.")
;

todo("Chat UI theme (CSS).")
;

todo("Design of UI using CSS.")
;

todo("Making features separate and possible to disable: Coolab, Theme, view, edit, UI, no tools, custom shapes, etc. To make it possible to have very lightweight versions")
;

todo("rename upadte.js into multiple files.");

todo("redo the whole startup (startup levels, cache, etc).");

todo("Django: expiration");

todo("Django: customising: username, themes, ip address, (what else?)");

todo("Multiple server automatically. Also able to synchronise them (replicate). Automatic spawn of docker instances, etc.")
.setVersion(2); //or 3!

todo("Bounding-box algorithm using implicit.")
.priority(500)
.assignTo("vitaliy")
;

todo("Find another UnitTest framework: requirement: ?????")
;



// short meeting: 17 Nov 2015

todo("Somtimes the designer freezes");

todo("view.html: later it will be used for two designer windows.");

todo("make view.html an angularJS directive (or Django component).");

todo("A second server using Django");

todo("Socket.io: What heppenswhen the NodeJS is not available");

todo("Socket.io: load delay should not delay the loading. It should be completely asynchronised. NodeJS can start after init.js and main.js");

todo("Camera solution for rotating around the selected object (double click, etc).");

todo("Camera: rotation center should be separated from the camera's target: Refactor: getTarget() and getRotaationCenter() + setters. Completely separate. ");

todo("NEw camera button: ");

todo("Make object properties (info) look flat (like ThreeJS editor)");

todo("object properties (info): rewrite from scratch. The logic is just awfull. ");

todo("object properties (info): definitely should not update the object properties after each key press /change. Only after an actual change (Enter, tab/losing focus, etc) ");

todo("Camera's temporary rotate key (B) should make the camera orthographic");

todo("Ortho - to perspective animation (smooth transition)");

todo("Camera animation (transition), if interrupted, should not affect the target state (i.e. 22.5+22.5 degress).");

todo("It is difficult to move behind an object");

todo("Occluded annotaions: It is difficult to move an object inside another object. Solutiuons: 1,2,3");

todo("Rename AnnotDots to ControlPoints");

//todo("Rename Annotations to MaipulationConsotrlPoints");

todo("Rotation of Shapes must not use ThreeJS");


//todo("Camera: A button to turn behind the object : 180 deg.);
todo("Camera: while temporary 180 deg pressed down, you still can edit as ususal. All mouse buttons should work.");


todo("Camera: turn toward");
todo("Camera: set rotation point");

todo("Moving an object up is difficult.");

todo("Set the default annotation type to arrows.");

todo("Allow two annotations at the same time.");

todo("Annotaiotns that are according to shapes orientation, and not Bounding Boxes.");

todo("New shape: cone with top cut.")
.setSprint(9)
;

todo("New shape: free-form cube.")
.setSprint(9)
;

todo("New shape: quaternion.")
.setSprint(9)
;

todo("New shape: free 3-vectors (parallelogaram).")
;

todo("Shape.getMinimalFeatures() . Can be ax,ay,ax   or can ebe Quaternion, or can be Free-3-vectors, or can be custom parameter. Use this in Shape Properties")
;




todo("New shape: empty & cut cone: Outersize-bottom, outersize-top, thickness")
;

todo("Slicer: subtraction does not work");


todo("Avoid using TreeDeepCopy, using getDict() instead");

todo("Hash using getDict()");

todo("Magnet : refactor 'norm' to distance");

todo("Conflict of sleection: ...");

todo("Decide about the minimal align constraints.");

todo("High-level contraint classes (with their .getDict ).");

todo("UI: optional bed contstraint (KKT-type constraint, with FIX and Exception)");


todo("Use exceptions everywhere");

todo("A selection class");

todo("Untangle init-annot & udate-annot into three dunctions: change selectedMesh, change selection, computer BoundingBox, update the Annotation object");

todo("Second annotation visualisation, for second user (semi-transparent + different colour)");

todo("Initial camera size should be moved into the configuration object + the atmosphere + the skin/theme. For fine-tuning the UX + for themes.");

todo("Glow effect");

todo("Occluded annotaions: Make object before the occluded annotations semi transparent. (hide all object on my way to touch)");

todo("Occluded annotaions: Glow or overlay. ");

todo("Occluded annotaions: Priority of their clickables (pointables). ");

todo("Occluded annotaions: a feature like Z-order");

todo("Occluded annotaions: allowing the user to make one object semi transparent. Or all others.");

todo("write the updateFromDict() function")
.priority(500)
.assignTo("patrick")
;
//todo("rename shapeFactory() to createFromDict()")
//;

todo("Objects that are complex crash the designer")
.priority(200)

todo("The renderer resizing issue: change it back.")
.priority(20)
.assignTo("sohail")
;

todo("Ratio bug: The camera loses the aspect ratio. It currently can be solved using preessing the 'l' key twice. First, only identify why and where it happens.")
.assignTo("antonio")
;

todo("Hierarchy bug 1")
;


todo("Hierarchy bug 2")
;

todo("Hierarchy bug 3")
;

todo("Hierarchy: refactor the cModel (cRoot) for the hierarchy temp thing. cModel.switchToTemp(branch). cModel.switchBackToRoot().  most of the calls to getRoot() will be calls to getCurrentRoot(). ")
;

todo("Unit testing the collabotation/server (details please from Manon/Jean)")
;


todo("Issue about 'save'ing the collaborative work. (?) (details please)");

todo("Rotation: write a rotate that is not based on threejs.");


todo("The Shape Properties box should use a function called Shape.getMinimalFeatures() to extract which parmaeters is hould show. It returns a list of paramters. Each parameter is {name:'length',units:'mm',type:'real'} and these strings are shown ins the propeties box.")
;

todo("The Shape Properties box should look flat, like THreeJS editor");

todo("Annotaitons of a group selection should be different to the single-shape selection. The former uses bounding boxes and the latter uses free-form 3-vector parallelogram as the bounding box..");


todo("A Sims-style annotation box on top of objects that need to be highlighted somehow. It will be used in 1-showing the selections of other users, notifying objects that have issues/reminders, etc.");


todo("A two windows demo");

todo("A view-only app. + Select project. (no mouse)");

todo("A view-only mode. The use can still rorate the camera.");

todo("updateScene is very inefficient and has increadible redundancy.");

todo("Use coding standards of JS Hint");

todo("Use minification from ...");

todo("Read and use AngularJS's recommended practices");

todo("Some actions change sleection. Bring the change of selection from the actual operations.");

todo("CSG changes selection. bring the change of selection from the actual operations. (do after disentangling the initAnnot_update function)");

todo("Camera: getDict()!")
.assignTo("antonio");

todo("Camera should be able to be transferred to other users.")

todo("Change in Printer settings should be transferred between the collaborative users.")
;

todo("Other than root state, camera, printer settings, selection, etc should be shared.");

todo("Action should be apprlied to cModel");

todo("Locally, the action is done in a Queue, in the same way as remotely.");

todo("rx.js");


todo("A fast CSG algorithm");

todo("Load object: a mini browser");

todo("Note: a text added to each shape. It is a dicitonary with key-key-value: timestamp, user, text. In fact: user, (test,timestamp)"); //add: where? where = ip address, which compueer, (not GPS, etc)

todo("Ali: atmosphere button shold get automatrically inclide all the choices.");

todo("Print wysiwyg mode: As a new thee. + real colour of objects + their material.");

todo("Show the bed only in the Wysiwyg (print preview) mode.");

todo("Show the grid only in the Wysiwyg (print preview) mode!");

todo("The username in beginning is null?");


todo("Include getDict() in state stack (undo/redo).");

todo("Use the getDict() in the Action s");

todo("Use the new function as an Api function.");

todo("Automatic check (test) of correspondence between the Api functions and the Actions.");

todo("Maximum depth should be an exception, not an if")
.priority(50)
.assignTo("sohail")
;


todo("restructure the folders. DesignSoftware should not contain the server stuff. The src/webgl should be renamed. etc.")
.moreInfo("Also see: http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript");

todo("Check Jasmine, protractortest.org, karma-runner, ");
