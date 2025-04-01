function userPageView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    
    
    <div id='header'>
    <div class ="logo">Logo</div>
    <button id="assignmentBtn">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days"></i>
    <i class="fa-solid fa-bell"></i>
    <div class="userButton">Bruker</div>

    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    </div> <br>
    `;
}