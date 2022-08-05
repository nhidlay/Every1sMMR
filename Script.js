// calls printFunction when button is clicked
	
	document.getElementById("myButton").addEventListener("click", printFunction);

// Takes search box value and puts summoner names in an array, then prints them to screen
	function printFunction()
	{
		let searchInput = document.getElementById("mySearch").value; 
		
		let summonerNames = searchInput.replace(/joined the lobby/g,"");
		
		let summonerName = summonerNames.split("  ");
		
		
		
		for (let i = 0; i < summonerName.length; i++)
		{
			let para = document.createElement("p");
			para.innerText = summonerName[i];
			document.body.appendChild(para);
		}
	}

	
	


