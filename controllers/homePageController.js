
function searchAssignment(){
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) {
        console.log("search not found");
        return;
    }

    model.input.search.searchInput = searchInput.value;

    if(model.input.search.searchInput.trim() === "") {
        alert("Please enter a search term");
    } else {
        searchPageView();
    }
    
}

/*
Få ut data som matcher med søk - opgpavene da
lurt å ha en controller som søker og returner html'en - 
*/

// function searchPageView() {
//     console.log("Searching " + model.input.search.searchInput);
// }