updateView();
function updateView(){
    
document.getElementById('app').innerHTML = /*HTML*/`
<h1>Logg inn</h1>
<div id="chooseRole">
<button class="studentRole" onclick="">Elev</button>
<button class="adminRole" onclick="">Admin</button> <br>
</div>

<div id="logInForm">
<input type="email" id="email" name="email" placeholder="Email"> 
<input type="password" name="" id="password" placeholder='Passord'>
<button class="logInButton" onclick="">Logg inn</button>
</div> 


`

}