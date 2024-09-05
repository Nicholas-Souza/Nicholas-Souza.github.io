function foto(idModal) {
    var modal = document.getElementById(idModal);
    
    if (modal.style.display == "block") {
        modal.style.display = "none";    
    }else{
        modal.style.display = "block";    
    }

}