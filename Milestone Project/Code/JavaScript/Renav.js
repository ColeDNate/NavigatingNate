

$(document).ready(function(){
    $("#renav").load("D:/Documents/GCU/CST-120/worcspaceCST-120/Milestone Project/Code/HTMLFragments/navbar.html", function(response, status, xhr){
        if(status == "error")
            $("#renav").html("Error: " + xhr.status + ": " + xhr.statusText);
    });
});