// function editAssignmentPageView(){
//     document.getElementById('app').innerHTML = /*HTML*/ `
    
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
//     <div id="feedBackWrap">
//     <div id ='feedbackBox'> 
//     <h2>Rediger oppgave</h2>
//     <div id="lineDiv"></div>

//     <div>
//     <h2>Tema: Velg Tema Tittel: Tags: Velg tags</h2>

//     </div>
//     <br>
    


//     <textarea name="" id="teeest" placeholder="Skriv her..."></textarea>




//         <div id="assignmentWrap">
//     <button>Lagre</button>
//     <button>Avbryt</button>
//     </div>

//     </div>
//     </div>
    
    
    
//     `
// }



function editAssignmentPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="header">
            <div class="logo"><img src="./img/GET.png" alt=""></div>
            <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
            <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
            <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
            <div class="userButton" onclick="userPageView()">Bruker</div>
            <div id="search">
                <input type="text" id="searchInput" placeholder="Søk...">
                <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
            </div>
            <div class="headerAvatar" onclick="userPageView()">
            <img src="./img/avatar.png" alt="User Avatar">
            </div>
        </div>

        <div id="editAssignmentWrapper">
            <div id="editAssignmentCard">
                <h2>Rediger Oppgave</h2>
                <div class="lineDiv"></div>

                <form id="editAssignmentForm">
                    <div class="formGroup">
                        <label for="tema">Tema</label>
                        <input type="text" id="tema" placeholder="Skriv tema..." required>
                    </div>
                    <div class="formGroup">
                        <label for="tittel">Tittel</label>
                        <input type="text" id="tittel" placeholder="Skriv tittel..." required>
                    </div>
                    <div class="formGroup">
                        <label for="tags">Tags</label>
                        <div class="tagContainer" id="tagContainer">
                            <span class="tag" data-value="morramøte">Morramøte</span>
                            <span class="tag" data-value="kommunikasjon">Kommunikasjon</span>
                            <span class="tag" data-value="psykologisk-trygghet">Psykologisk Trygghet</span>
                            <span class="tag" data-value="signaturstyrker">Signaturstyrker</span>
                        </div>
                        <input type="hidden" id="tags" name="tags">
                    </div>
                    <div class="formGroup">
                        <label for="beskrivelse">Beskrivelse</label>
                        <textarea id="beskrivelse" placeholder="Skriv beskrivelse her..."></textarea>
                    </div>
                    <div id="assignmentWrap">
                        <button type="submit">Lagre</button>
                        <button type="button" onclick="homePageView()">Avbryt</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}