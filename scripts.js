// Write your JavaScript code here.
// Remember to pay attention to page loading!

let button = null;
// let paragraph = null;
// let confirmTakeoff = null;

function init () {
    console.log('Confirm window successfully loaded - task check.');

    // takeoffConfirmEvent = document.getElementById("confirmTakeoff")
    button = document.getElementById("takeoff");

    function rocketGoesUp() {
        let confirmTakeoff = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmTakeoff) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "#4C02E0";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
            console.log("Rocket launched / Take Off button clicked.")
        }
    }
    takeoff.addEventListener("click", rocketGoesUp);

    button = document.getElementById("landing");

    function rocketComesDown() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "#008000";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        console.log("Rocket landed / Land button clicked.")
    }
    landing.addEventListener("click", rocketComesDown);

    button = document.getElementById("missionAbort");

    function abortMission() {
        let confirmAbortMission = window.confirm('Confirm that you want to abort the mission.');
        if (confirmAbortMission) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "#008000";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            console.log("Mission aborted / Mission abort button clicked.")
        } 
    }
    missionAbort.addEventListener("click", abortMission);
}

    // button = document.getElementById('up');
    // button = document.getElementById('down');
    // button = document.getElementById('right');
    // button = document.getElementById('left');

    // function moveUp() {
    //     if () {
    //         Image.position -= 10px;
    //     }
        
    // function moveDown() {
    //     if () {
    //         Image.position += 10px;
    //     }
    
    // function moveRight() {
    //     if () {
    //         Image.position -= 10px;
    //     }        
    
    // function moveLeft() {
    //     if () {
    //         Image.position += 10px;
    //     }
        
    // }

    // up.addEventListener("click", moveUp);
    // down.addEventListener("click", moveDown);
    // right.addEventListener("click", moveRight);
    // left.addEventListener("click", moveLeft);
    

window.onload = init;