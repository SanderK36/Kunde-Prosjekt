function calendarView(){
    document.getElementById('app').innerHTML = /*HTML*/`
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

    </div> <br>
    <h1 id='calendarHeader'>April</h1>
    <div class="calendarLayout"></div>
    
    `;
    const calendarLayout = document.querySelector(".calendarLayout");
    for(let i = 1; i <= 42; i++){
        let content = '';

        if(i === 1) content = `<h1>Man</h1>`;
        else if(i === 2) content = `<h1>Tir</h1>`;
        else if(i === 3) content = `<h1>Ons</h1>`;
        else if(i === 4) content = `<h1>Tor</h1>`;
        else if(i === 5) content = `<h1>Fre</h1>`;
        else if(i === 6) content = `<h1>Lør</h1>`;
        else if(i === 7) content = `<h1>Søn</h1>`;
        else if(i === 8) content = "28";
        else if(i === 9) content = "29";
        else if(i === 10) content = "30"
        else if(i === 11) content = "1";
        else if(i === 12) content = "2";
        else if(i === 13) content = "3";
        else if(i === 14) content = "4";
        else if(i === 15) content = "5";
        else if(i === 16) content = "6";
        else if(i === 17) content = "7";
        else if(i === 18) content = "8";
        else if(i === 19) content = "9";
        else if(i === 20) content = "10";
        else if(i === 21) content = "11";
        else if(i === 22) content = "12";
        else if(i === 23) content = "13";
        else if(i === 24) content = "14";
        else if(i === 25) content = "15";
        else if(i === 26) content = "16";
        else if(i === 27) content = "17";
        else if(i === 28) content = "18";
        else if(i === 29) content = "19";
        else if(i === 30) content = "20";
        else if(i === 31) content = "21";
        else if(i === 32) content = "22";
        else if(i === 33) content = "23";
        else if(i === 34) content = "24";
        else if(i === 35) content = "25";
        else if(i === 36) content = "26";
        else if(i === 37) content = "27";
        else if(i === 38) content = "28";
        else if(i === 39) content = "29";
        else if(i === 40) content = "30";
        else if(i === 41) content = "31";
        else if(i === 42) content = "1";
        else content = `Item ${i}`;

        calendarLayout.innerHTML += `<div class ="calendarBox">${content}</div>`;
}
}