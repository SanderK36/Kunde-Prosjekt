
function searchAssignment(){
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) {
        console.log("search not found");
        return;
    }

    model.input.search.searchInput = searchInput.value;

    if(model.input.search.searchInput.trim() === "") {
        alert("Vennligst skriv inn et søk");
    } else {
        searchPageView();
    }
    
}
