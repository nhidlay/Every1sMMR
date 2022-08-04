// JavaScript source code
	
	document.getElementById("myButton").addEventListener("click", printFunction);

	function printFunction()
	{
		let searchInput = document.getElementById("mySearch").value; 
		
		document.getElementById("searchOutput").innerHTML = searchInput;
	}

	
	


