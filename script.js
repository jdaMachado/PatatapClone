function myFunction() {
		// Get the hint DIV
		var x = document.getElementById("hint");
	
		// Add the "show" class to DIV
		x.className = "show";
	
		// After 4 seconds, remove the show class from DIV
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
	}
//Calls myFunction() 1 second after the page loads		
setTimeout(function() { 
	
	myFunction(); 
	
    }, 1000);
