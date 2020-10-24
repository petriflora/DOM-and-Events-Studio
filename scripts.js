// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    console.log('Confirm window successfully loaded - task check.');

    takeoffConfirmEvent = document.getElementById("confirmTakeoff")
    let takeoffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');
    let height = 0;
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleBackgroundWidth = shuttleBackground.clientWidth;
    let shuttleBackgroundHeight = shuttleBackground.clientHeight;
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.bottom = "0";
    rocketImage.style.left = `${((shuttleBackgroundWidth/2) - (rocketImage.clientWidth/2))}px`;

    let transformX = 0;
    let transformY = 0;

    function rocketGoesUp() {
        let confirmTakeoff = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmTakeoff) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "#4C02E0";     
            height += Number(10000);
            shuttleHeight.innerHTML = height;
            console.log("Rocket launched / Take Off button clicked.");
        }
    }
    takeoffButton.addEventListener("click", rocketGoesUp);

    function rocketComesDown() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById("flightStatus").innerHTML =  "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "#008000";
        height = Number(0);
        shuttleHeight.innerHTML = height;
        console.log("Rocket landed / Land button clicked.")
    }
    landingButton.addEventListener("click", rocketComesDown);


    function abortMission() {
        let confirmAbortMission = window.confirm('Confirm that you want to abort the mission.');
        if (confirmAbortMission) {
            document.getElementById("flightStatus").innerHTML =  "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "#008000";
            height = Number(0);
            shuttleHeight.innerHTML = height;
            console.log("Mission aborted / Mission abort button clicked.")
        } 
    }
    abortButton.addEventListener("click", abortMission);


    function moveUp() {
        transformY -=10;
        rocketImage.style.transform = `translate(${transformX}px,${transformY}px)`;
        height += Number(10000);
        shuttleHeight.innerHTML = height;
    }
    upButton.addEventListener("click", moveUp);  
   
    function moveDown() {
        transformY +=10;        
        rocketImage.style.transform = `translate(${transformX}px,${transformY}px)`;
        height -= Number(10000);
        shuttleHeight.innerHTML = height;
    }
    downButton.addEventListener("click", moveDown);   

    function moveRight() {
        transformX +=10;
        rocketImage.style.transform = `translate(${transformX}px,${transformY}px)`;
    }        
    rightButton.addEventListener("click", moveRight);
        
    function moveLeft() {
        transformX -=10;
        rocketImage.style.transform = `translate(${transformX}px,${transformY}px)`;
    }    
    leftButton.addEventListener("click", moveLeft);

}
    

window.onload = init;