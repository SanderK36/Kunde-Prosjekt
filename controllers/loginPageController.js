function checkLoginInfo(){

    for(let i = 0; i < model.data.users.length; i++){
        let currentUser = model.data.users[i];

        if(model.input.logInInput.emailInput == currentUser.email 
            && model.input.logInInput.passwordInput == currentUser.password){
                
           
            homePageView();
        }
        else {
        
            // legge inn en 404 page, elelr feil passord side elns eller! rød tekst i login et eller annet
        }
    }
}