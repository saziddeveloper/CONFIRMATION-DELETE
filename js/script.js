document.getElementById("inputText").addEventListener("keyup", function(event){
    const inputText = event.target.value;
    const deleteButton = document.getElementById("button");
    if(inputText === "I WANT PERMANENT DELETE @username"){
        deleteButton.removeAttribute("disabled");
    }
    else{
        deleteButton.setAttribute("disabled", true);
    }
});

document.getElementById("button").addEventListener("click", function(){
    // Delay the action by 2 seconds
    setTimeout(function() {
        const mainSection = document.getElementById("main-section");
        mainSection.style.display = "none";
        const section2 = document.getElementById("section-2");
        section2.style.display = "flex";
    }, 2000);
});
