
logInPageView();
function logInPageView(){
    
document.getElementById('app').innerHTML = /*HTML*/`
<div id='header'>
<div class ="logo"><img src="./img/GET.png" alt=""></div>

    </div> <br>

<h1 id="logInHeader">Logg inn</h1>
<div id="chooseRole">
<button class="studentRole" onclick="">Elev</button>
<button class="adminRole" onclick="">Admin</button> <br>
</div>

<div id="logInForm">
<input type="email" id="email" name="email" placeholder="Email" oninput="model.input.logInInput.emailInput = this.value"> 
<input type="password" name="password" id="password" placeholder="Passord" oninput="model.input.logInInput.passwordInput = this.value">
<button class="logInButton" onclick="checkLoginInfo()">Logg inn</button>
</div> 


`
/* husk! legg inn noen dummy users med email og passord for å teste at login funker som vi tro ;D
${model.input.logInInput.passwordInput = this.value}
  <input type="password" name="password" id="password" placeholder="Passord" 
        oninput="model.input.logInInput.passwordInput = this.value">
*/ 

/*The way you are trying to log the value using onchange="${console.log(this.value)}" is incorrect. The issue is that the ${} syntax is typically used inside template literals in JavaScript (e.g., inside backticks ` `), but here it's being used inside an HTML attribute, which doesn't work as expected.

Instead, console.log(this.value) will execute immediately when the HTML is parsed, and the onchange event won't work as expected.*/
}