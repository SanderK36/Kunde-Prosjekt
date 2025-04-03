
function homePageView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    
    
    <div id='header'>
    <div class ="logo">Logo</div>
    <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
    <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
    <div class="userButton" onclick="userPageView()">Bruker</div>

    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
    </div>

    </div> <br>

    <h1 id='currentWeek'>Uke 8</h1>

    <div class="test"></div>
    
    `;
    const test = document.querySelector(".test");
    for(let i = 1; i <= 21; i++){
        let content = '';

        if(i === 1) content = `<h1>Uke</h1>`;
        else if(i === 2) content = `<h1>Dag</h1>`;
        else if(i === 3) content = `<h1>Tema</h1>`;
        else if(i === 4) content = `<h1>Oppgave</h1>`;
        else if(i === 5) content = `<h1>Tags</h1>`;
        else if(i === 6) content = "";
        else if(i === 7) content = `<h1>levert?</h1>`;
        else if(i === 8 || i === 15) content = "8";
        else if(i === 9) content = "Mandag";
        else if(i === 10) content = "Psykologisk trygghet"
        else if(i === 11) content = "Hvordan gjøre et godt morgenmøte";
        else if(i === 12) content = "Morramøtet bli kjent";
        else if(i === 13) content = `<div class="gridIcons"><i class="fa-solid fa-file"></i> <i class="fa-solid fa-comment"></i></div>`;
        else if(i === 14) content = `<div class="gridIcons"><i class="fa-solid fa-square-check"></i></div>`;
        else if(i === 16) content = "Tirsdag";
        else if(i === 17) content = "Psykologisk trygghet"
        else if(i === 18) content = "Hvordan være forberedt"
        else if(i === 19) content = "Signaturstyrker Kommunikasjon"
        else if(i === 20) content = `<div class="gridIcons"><i class="fa-solid fa-file"></i> <i class="fa-solid fa-comment"></i></div>`;
        else if(i === 21) content = `<div class="gridIcons"><i class="fa-solid fa-square-xmark"></i></div>`;
        else content = `Item ${i}`;

        test.innerHTML += `<div class ="box">${content}</div>`;
}
}
