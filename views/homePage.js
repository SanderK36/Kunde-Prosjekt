
function homePageView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    
    
    <div id='header'>
    <div class ="logo">Logo</div>
    <button id="assignmentBtn">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    <i class="fa-solid fa-bell"></i>
    <div class="userButton">Bruker</div>
    </div> <br>

    <div id='currentWeek'>Uke 8</div>

    <div class="test"></div>
    
    `;
    const test = document.querySelector(".test");
    for(let i = 1; i <= 21; i++){
        let content = '';

        if(i === 1) content = "Uke";
        else if(i === 2) content = "Dag";
        else if(i === 3) content = "Tema";
        else if(i === 4) content = "Oppgave";
        else if(i === 5) content = "Tags";
        else if(i === 6) content = "";
        else if(i === 7) content = "Levert?";
        else if(i === 8 || i === 15) content = "8";
        else if(i === 9) content = "Mandag";
        else if(i === 10) content = "Psykologisk trygghet"
        else if(i === 11) content = "Hvordan gjøre et godt morgenmøte";
        else if(i === 13) content = `<div class="commentAndFile"><i class="fa-solid fa-file"></i> <i class="fa-solid fa-comment"></i></div>`;
        else if(i === 16) content = "Tirsdag";
        else if(i === 20) content = `<div class="commentAndFile"><i class="fa-solid fa-file"></i> <i class="fa-solid fa-comment"></i></div>`;
        else content = `Item ${i}`;

        test.innerHTML += `<div class ="box">${content}</div>`;
}
}
