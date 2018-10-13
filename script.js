function myFunction() {
		// Get the hint DIV
		var x = document.getElementById("hint");
	
		// Add the "show" class to DIV
		x.className = "show";
	
		// After 3 seconds, remove the show class from DIV
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
	}

	setTimeout(function() { 
        myFunction(); 
    }, 1000);