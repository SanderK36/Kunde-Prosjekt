// function tomorrowsAssignmentView(){

//     if(model.app.loggedInUser.admin == true){
//         document.getElementById('app').innerHTML = /*HTML*/ `
    
//     <div id='header'>
//     <div class ="logo"><img src="./img/GET.png" alt=""></div>
//     <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
//     <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
//     <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
//     <div class="userButton" onclick="userPageView()">Bruker</div>
//     <div onclick="adminClassPageView()" class="userButton"> Admin </div>
//     <div id="search">
//     <input type="text" id="searchInput" placeholder="Søk...">
//     <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
//     </div>

//     </div> <br>
//     <h1 class="topLeftBox" id ="tomorrowAssignmentBox">Morgendages oppgave</h1>
//     <div class="centerTextBox"> 
//     <h2>Hvordan være forberedt</h2>
//     <div id="lineDiv"></div>
//     <br>

//     <div class="bulletPoints">
//     <li>Har du gjort endringer i tanker/ innstilling/ handlinger her på GET som har gjort deg god/ bedre?</li>
//     <li>Hva har du gjort for endringer?</li>
//     <li>Hva kan du gjøre bedre?</li>
//     </div>
//     `;
//     } else {
//         document.querySelector('#app').innerHTML = /*HTML*/ `
    
//     <div id='header'>
//     <div class ="logo"><img src="./img/GET.png" alt=""></div>
//     <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
//     <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
//     <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
//     <div class="userButton" onclick="userPageView()">Bruker</div>

//     <div id="search">
//     <input type="text" id="searchInput" placeholder="Søk...">
//     <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
//     </div>

//     </div> <br>
//     <h1 class="topLeftBox" id ="tomorrowAssignmentBox">Morgendages oppgave</h1>
//     <div class="centerTextBox"> 
//     <h2>Hvordan være forberedt</h2>
//     <div id="lineDiv"></div>
//     <br>

//     <div class="bulletPoints">
//     <li>Har du gjort endringer i tanker/ innstilling/ handlinger her på GET som har gjort deg god/ bedre?</li>
//     <li>Hva har du gjort for endringer?</li>
//     <li>Hva kan du gjøre bedre?</li>
//     </div>
//     `;
//     }
// }

function tomorrowsAssignmentView() {
    const isAdmin = model.app.loggedInUser.admin === true;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toLocaleDateString('no-NO', { weekday: 'long', day: 'numeric', month: 'long' });

    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="header">
            <div class="logo"><img src="./img/GET.png" alt=""></div>
            <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
            <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
            <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
            <div class="userButton" onclick="userPageView()">Bruker</div>
            ${isAdmin ? '<div onclick="adminClassPageView()" class="userButton"> Admin </div>' : ''}
            <div id="search">
                <input type="text" id="searchInput" placeholder="Søk...">
                <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
            </div>
            <div class="headerAvatar" onclick="userPageView()">
             <img src="./img/avatar.png" alt="User Avatar">
            </div>
        </div>

        <div id="assignmentWrapper">
            <div id="assignmentCard">
                <h2 id="assignmentTitle">Morgendagens Oppgave: ${tomorrowDate}</h2>
                <div id="assignmentContent">
                    <h3>Hvordan være forberedt</h3>
                    <div class="lineDiv"></div>
                    <ul class="bulletPoints">
                        <li>Har du gjort endringer i tanker/ innstilling/ handlinger her på GET som har gjort deg god/ bedre?</li>
                        <li>Hva har du gjort for endringer?</li>
                        <li>Hva kan du gjøre bedre?</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}